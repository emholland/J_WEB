from django.urls import path
from .views import ArticleList, TagListAPIView

#makes urls for ../backend/urls.py 

urlpatterns = [
    path('articles/', ArticleList.as_view(), name='article-list'),
    path('tags/', TagListAPIView.as_view(), name='tag-list')
]
