from rest_framework.decorators import api_view
from django.http import JsonResponse
from gradio_client import Client

def get_answer(query):
    client = Client("MrArray22/QuranQA", hf_token= "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")
    result = client.predict(
        query,	# str  in 'query' Textbox component
        api_name="/predict"
    )
    return result

@api_view(['POST'])
def ask_question(request):
    try:
        query = request.data['query']
    except KeyError:
        return JsonResponse({'error': 'Missing "query" field in request data'}, status=400)
    result = get_answer(query)
    return JsonResponse({'answer': result}, status=200)