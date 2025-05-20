from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Article

class ArticleList(APIView):
    def get(self, request):
        articles = Article.objects()
        data = [{"id": str(a.id), "title": a.title, "content": a.content} for a in articles]
        return Response(data)

    def post(self, request):
        data = request.data
        article = Article(title=data["title"], content=data["content"])
        article.save()
        return Response({"message": "Article created", "id": str(article.id)})