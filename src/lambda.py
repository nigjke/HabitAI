import json

def lambda_handler(event, context):
    """Обрабатывает HTTP-запрос через API Gateway."""
    
    # Проверяем, есть ли тело в запросе
    body = json.loads(event.get("body", "{}")) if event.get("body") else {}

    response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps({
            "message": "Привет из Lambda!",
            "method": event.get("httpMethod"),
            "received_body": body
        })
    }

    return response
