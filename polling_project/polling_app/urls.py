from django.contrib import admin
from django.urls import path

from polling_app.views import index

urlpatterns = [
    path('', index),
]
