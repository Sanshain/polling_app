from django.db.models import Count, OuterRef, Q
from django.http import HttpRequest
from django.shortcuts import render

# Create your views here.
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, status
from rest_framework.generics import get_object_or_404, GenericAPIView, ListCreateAPIView, UpdateAPIView, ListAPIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin
from rest_framework.response import Response

from polling_app.models import Poll, Question, Choice, Answer, UserSign
from polling_app.serializers import PollSerializer, QuestionSerializer, AnswerSerializer, UserSignSerializer


def index(request: HttpRequest): return render(request, template_name='index.html')


class PollView(viewsets.ViewSet):

    def list(self, request):
        queryset = Poll.objects.filter(active=True).annotate(length=Count('question'))
        serializer = PollSerializer(queryset, many=True)
        return Response(serializer.data)

    # def retrieve(self, request, pk=None):
    #     queryset = Poll.objects.all()
    #     user = get_object_or_404(queryset, pk=pk)
    #     serializer = PollSerializer(user)
    #     return Response(serializer.data)


class QuestionView(viewsets.ViewSet):

    def list(self, request):
        poll_id = request.GET.get('poll')

        qs = Question.objects.filter(poll_id=poll_id) if poll_id else Question.objects.none()

        qs = qs.prefetch_related('choices')

        quests = {}

        for q in qs:
            choices = [choice.value for choice in q.choices.all()]
            quests.update({q.id: choices})

        serializer = QuestionSerializer(qs, many=True)

        for quest in serializer.data:
            quest['choices'] = quests.get(quest.get('id'))

        return Response(serializer.data)

    # def retrieve(self, request, pk=None):
    #     queryset = Poll.objects.all()
    #     user = get_object_or_404(queryset, pk=pk)
    #     serializer = PollSerializer(user)
    #     return Response(serializer.data)


@method_decorator(csrf_exempt, name='dispatch')
class AnswerView(ListCreateAPIView):
    serializer_class = AnswerSerializer

    def get_queryset(self):
        search = self.request.GET.get('s')
        if not search:
            return Answer.objects.none()
        else:
            user_signs = UserSign.objects.filter(Q(phone=search) | Q(email=search) | Q(id=search)).prefetch_related(
                'answers',
                # 'answers__quest',
                # 'answers__quest__choices',
                # 'answers__quest__poll',
            )
            if user_signs.count():
                user_sign: UserSign = user_signs.first()
                qs = Answer.objects.filter(user_sign=user_sign).prefetch_related('quest')
                for q in qs:
                    q.question = q.quest.text
                    q.options = q.quest.choices.values('value')
                    q.poll = q.quest.poll.name
                return qs
        return Answer.objects.filter()

    def create(self, request, *args, **kwargs):
        user_sign_id = request.data.get('user_sign')
        if not user_sign_id:
            user_sign = UserSign.objects.create(email='', phone='')
            request.data['user_sign'] = user_sign.id
        else:
            request.data['user_sign'] = user_sign_id

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class UserSignView(ListModelMixin, UpdateAPIView):
    queryset = UserSign.objects.all()
    serializer_class = UserSignSerializer

    def get_object(self):
        v = self.request.data.get('value')
        if v:
            user_signs = UserSign.objects.filter(value=v)
            count = user_signs.count()
            if count:
                sign_id = self.request.data.get('id')
                UserSign.objects.filter(id=sign_id).delete()
                return user_signs.first()
        return super().get_object()

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


