export async function post({ request }) {
  const { query } = await request.json();

  const endpoint = process.env.https://white-ground-04d638400.2.azurestaticapps.net;
  const apiKey = process.env.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;
  const deployment = "gpt-35-turbo";

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
      response: data.choices[0].message.content
    }),
    { status: 200 }
  );
}
