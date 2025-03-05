# -*- coding: utf-8 -*-
import json
from langchain import __version__ as langchain_version
import pinecone 
import os

def lambda_handler(event, context):
    PINECONE_API_KEY = os.environ.get('PINECONE_API_KEY')
    PINECONE_ENVIRONMENT = os.environ.get('PINECONE_ENVIRONMENT')
    PINECONE_INDEX_NAME = os.environ.get('PINECONE_INDEX_NAME')
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json; charset=utf-8'
        },
        'body': json.dumps({
            "message": "LangChain подключен успешно!",
            "version Langchain": langchain_version,
            "version Pinecone" : pinecone.__version__,
            "pinecone_api_key_check": PINECONE_API_KEY,
            "pinecone_environment_check": PINECONE_ENVIRONMENT,
            "pinecone_index_name_check": PINECONE_INDEX_NAME
        },  ensure_ascii=False)
    }