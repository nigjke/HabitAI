import json
from langchain import __version__ as langchain_version

def lambda_handler(event, context):
    lib_status = {
        "langchain_installed": True,
        "version": langchain_version
    }
    dummy_key = "DUMMY_KEY_12345"
    
    return {
        'statusCode': 200,
        'body': json.dumps({
            "message": "LangChain подключен успешно!",
            "library_info": lib_status,
            "api_key_check": dummy_key
        })
    }