from rest_framework import generics
from .models import Article, Tag, BookReview
from .serializers import ArticleSerializer, TagSerializer, BookReviewSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


def homepage(request):
    return JsonResponse({"message": "Welcome to the API"})

class TagListAPIView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class ArticleList(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailAPIView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class BookReviewList(ListCreateAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer

class BookReviewDetailAPIView(RetrieveAPIView):
    queryset = BookReview.objects.all()
    serializer_class = BookReviewSerializer

@api_view(['GET'])
def get_highlighted_articles(request):
    highlighted_articles = Article.objects.filter(is_highlighted=True)
    serializer = ArticleSerializer(highlighted_articles, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def get_highlighted_book_reviews(request):
    highlighted_book_reviews = BookReview.objects.filter(is_highlighted=True)
    serializer = BookReviewSerializer(highlighted_book_reviews, many=True)
    return Response(serializer.data)