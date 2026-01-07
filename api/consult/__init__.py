import json

def main(req):
    try:
        body = req.get_json()
        query = body.get("query", "")

        return {
            "status": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({
                "response": f"AI Consultant received: {query}"
            })
        }

    except Exception as e:
        return {
            "status": 400,
            "body": json.dumps({"error": str(e)})
        }

