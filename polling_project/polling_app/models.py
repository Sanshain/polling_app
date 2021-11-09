from django.db import models

from django.utils.translation import ugettext_lazy as _


QUEST_TYPE = (
    (1, _("text")),
    (2, _("one choice")),
    (3, _("few choices")),
)


# Create your models here.
class Poll(models.Model):
    name = models.CharField(max_length=50)
    start_date = models.DateField()
    finish_date = models.DateField()
    desc = models.TextField()


class Question(models.Model):
    poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    text = models.TextField()
    kind = models.IntegerField(choices=QUEST_TYPE, default=2)
    choices = models.TextField()


class Answer(models.Model):
    user_sign = models.ForeignKey('UserSign', on_delete=models.SET_NULL, null=True)
    quest = models.OneToOneField(Question, on_delete=models.CASCADE)
    value = models.CharField(max_length=300)


class UserSign(models.Model):
    # poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    email = models.EmailField()
    phone = models.CharField(max_length=20)