from django.contrib import admin
from django.urls import path, re_path
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view
# from rest_framework_swagger.views import get_swagger_view

from polling_app.views import index, PollView, QuestionView, AnswerView, UserSignView

router = DefaultRouter()
router.register(r'polls', PollView, basename='polls')
router.register(r'questions', QuestionView, basename='questions')

# schema_view = get_swagger_view(title='API')

urlpatterns = [

    path('', index),
    path('results', index),
    re_path('polls/\d+', index),
    re_path('finish/\d+', index),

    # re_path(r'^schema$', schema_view),
    path(
        'open_api',
         get_schema_view(title="Polls API", description="API for polls app", version='1.1.0'),
         name='open_api-schema'
    ),

    path('answer', AnswerView.as_view()),
    path('user_sign/<int:pk>', UserSignView.as_view()),

    # re_path('.*', index),
] + router.urls
