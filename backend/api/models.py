from django.db import models

# Create your models here.
from mongoengine import Document, StringField, DateTimeField
import datetime

class Article(Document):
    title = StringField(required=True)
    content = StringField(required=True)
    created_at = DateTimeField(default=datetime.datetime.utcnow)

