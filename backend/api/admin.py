from django.contrib import admin
from django.utils.html import format_html
from .models import Article, Tag, BookReview

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'thumbnail','is_highlighted')
    fields = ('title', 'description', 'picture', 'content', 'tags', 'is_highlighted')
    actions = ['mark_as_highlighted']
    filter_horizontal = ('tags',)
    list_filter = ['is_highlighted']

    def thumbnail(self, obj):
        if obj.picture:
            return format_html('<img src="{}" width="100" />', obj.picture.url)
        return "-"
    thumbnail.short_description = 'Image'

    def save_model(self, request, obj, form, change):
        if obj.is_highlighted and Article.objects.filter(is_highlighted=True).exclude(id=obj.id).count() >= 4:
            from django.core.exceptions import ValidationError
            raise ValidationError("You can only highlight 4 articles at a time.")
        super().save_model(request, obj, form, change)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(BookReview)
class BookReviewAdmin(admin.ModelAdmin):
    list_display = ('title', 'book_title', 'author', 'created_at', 'thumbnail', 'is_highlighted')
    fields = ('title', 'book_title', 'author', 'description', 'picture', 'content', 'is_highlighted')
    actions = ['mark_as_highlighted']
    list_filter = ['is_highlighted']
    
    def thumbnail(self, obj):
        if obj.picture:
            return format_html('<img src="{}" width="100" />', obj.picture.url)
        return "-"
    thumbnail.short_description = 'Image'

    def save_model(self, request, obj, form, change):
        if obj.is_highlighted and BookReview.objects.filter(is_highlighted=True).exclude(id=obj.id).count() >= 4:
            raise ValidationError("You can only highlight 4 book reviews at a time.")
        super().save_model(request, obj, form, change)
