from django.http import HttpRequest
from django.shortcuts import render


# Create your views here.
from rest_framework import viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from polling_app.models import Poll
from polling_app.serializers import PollSerializer


def index(request: HttpRequest): return render(request, template_name='index.html')


class PollView(viewsets.ViewSet):

    def list(self, request):
        queryset = Poll.objects.all()
        serializer = PollSerializer(queryset, many=True)
        return Response(serializer.data)
    def retrieve(self, request, pk=None):
        queryset = Poll.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = PollSerializer(user)
        return Response(serializer.data)


class QuestionView(viewsets.ViewSet):

    def list(self, request):
        queryset = Poll.objects.all()
        serializer = PollSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Poll.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = PollSerializer(user)
        return Response(serializer.data)
