from django.urls import path
from .views import ArticleList, TagListAPIView, ArticleDetailAPIView

#makes urls for ../backend/urls.py 

urlpatterns = [
    path('articles/', ArticleList.as_view(), name='article-list'),
    path('tags/', TagListAPIView.as_view(), name='tag-list'),
    path('articles/<int:pk>/', ArticleDetailAPIView.as_view(), name='article-detail'),

]
