import json
import azure.functions as func

def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        data = req.get_json()
        query = data.get("query", "No query provided")

        response = {
            "response": f"AI Consultant received: {query}"
        }

        return func.HttpResponse(
            json.dumps(response),
            status_code=200,
            mimetype="application/json"
        )

    except Exception as e:
        return func.HttpResponse(
            json.dumps({ "error": str(e) }),
            status_code=500,
            mimetype="application/json"
        )

