from django.contrib import admin
from django.utils.html import format_html
from .models import Article, Tag

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'thumbnail')
    fields = ('title', 'description', 'picture', 'content', 'tags')
    filter_horizontal = ('tags',)

    def thumbnail(self, obj):
        if obj.picture:
            return format_html('<img src="{}" width="100" />', obj.picture.url)
        return "-"
    thumbnail.short_description = 'Image'

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
