from rest_framework import serializers
from .models import Article, Tag, BookReview

class BookReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookReview
        fields =  '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class ArticleSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    picture = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = '__all__'

    def get_picture(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.picture.url)
        return obj.picture.url