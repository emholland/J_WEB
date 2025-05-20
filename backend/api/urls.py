from django.urls import path
from .views import ArticleList

#makes urls for ../backend/urls.py 

urlpatterns = [
    path('articles/', ArticleList.as_view()),
]