from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter

from polling_app.views import index, PollView


router = DefaultRouter()
router.register(r'polls', PollView, basename='polls')
router.register(r'questions', PollView, basename='questions')


urlpatterns = [
    path('', index),
    path('results', index),
] + router.urls
