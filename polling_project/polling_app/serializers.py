from rest_framework import serializers

from polling_app.models import Question, Poll, Answer, UserSign


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class PollSerializer(serializers.ModelSerializer):

    length = serializers.IntegerField()

    class Meta:
        model = Poll
        fields = '__all__'


class AnswerSerializer(serializers.ModelSerializer):

    question = serializers.CharField(allow_null=True, required=False)
    poll = serializers.CharField(allow_null=True, required=False)
    options = serializers.JSONField(allow_null=True, required=False)

    class Meta:
        model = Answer
        fields = '__all__'

    # @classmethod
    # def _build_queryset(cls, queryset):
    #      # modify the queryset here
    #      return queryset.annotate(
    #          total_trucks=...,
    #          total_capacity=...,
    #      )


class UserSignSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSign
        fields = '__all__'


