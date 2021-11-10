from django.urls import path, re_path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view as generate_schema_view
from rest_framework import permissions
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view

from polling_app.views import index, PollView, QuestionView, AnswerView, UserSignView


schema_view = generate_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

router = DefaultRouter()
router.register(r'polls', PollView, basename='polls')
router.register(r'questions', QuestionView, basename='questions')


urlpatterns = [

    path('', index),
    path('results', index),
    re_path('polls/\d+', index),
    re_path('finish/\d+', index),

    path(
        'open_api',
         get_schema_view(title="Polls API", description="API for polls app", version='1.1.0'),
         name='open_api-schema'
    ),

    re_path(r'^swagger(\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path('answer', AnswerView.as_view()),
    path('user_sign/<int:pk>', UserSignView.as_view()),

] + router.urls

