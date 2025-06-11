from django.db import models
from django.core.exceptions import ValidationError
import _bootsubprocess

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100, default="Unknown Author")
    description = models.CharField(max_length=1000)
    picture = models.ImageField(upload_to='articles/')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tag, blank=True)
    is_highlighted = models.BooleanField(default=False) 

    def __str__(self):
        return self.title

class BookReview(models.Model):
    title = models.CharField(max_length=200)
    book_title = models.CharField(max_length=200)
    author = models.CharField(max_length=100, default="Unknown Author")
    description = models.CharField(max_length=1000)
    picture = models.ImageField(upload_to='bookreviews/')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_highlighted = models.BooleanField(default=False) 

    def __str__(self):
        return self.title
