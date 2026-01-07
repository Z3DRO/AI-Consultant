export async function post({ request }) {
  try {
    const { query } = await request.json();

    if (!query) {
      return new Response(
        JSON.stringify({ error: "Query missing" }),
        { status: 400 }
      );
    }

    const endpoint = process.env.https://white-ground-04d638400.2.azurestaticapps.net;
    const apiKey = process.env.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;
    const deployment = process.env.gpt-35-turbo;

    if (!endpoint || !apiKey || !deployment) {
      return new Response(
        JSON.stringify({ error: "Missing environment variables" }),
        { status: 500 }
      );
    }

    const res = await fetch(
      `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=2024-02-15-preview`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: "You are an AI consultant for a SaaS marketplace." },
            { role: "user", content: query }
          ]
        })
      }
    );

    const data = await res.json();

    return new Response(
      JSON.stringify({
        response: data.choices?.[0]?.message?.content || "No response"
      }),
      { status: 200 }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}
