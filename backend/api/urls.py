from django.urls import path
from .views import (
    ArticleList, ArticleDetailAPIView,
    TagListAPIView,
    BookReviewList, BookReviewDetailAPIView,
    get_highlighted_articles, get_highlighted_book_reviews
)

#makes urls for ../backend/urls.py 

urlpatterns = [
    path('articles/highlights/', get_highlighted_articles, name='highlighted-articles'),
    path('articles/', ArticleList.as_view(), name='article-list'),
    path('articles/<int:pk>/', ArticleDetailAPIView.as_view(), name='article-detail'),

    path('tags/', TagListAPIView.as_view(), name='tag-list'),

    path('book-reviews/highlights/', get_highlighted_book_reviews, name='highlighted-book-reviews'),
    path('book-reviews/', BookReviewList.as_view(), name='bookreview-list'),
    path('book-reviews/<int:pk>/', BookReviewDetailAPIView.as_view(), name='bookreview-detail'),


]
