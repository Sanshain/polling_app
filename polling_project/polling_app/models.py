from django.core.exceptions import ValidationError
from django.db import models
from django.db.models import QuerySet

from django.utils.translation import ugettext_lazy as _


QUEST_TYPE = (
    (1, _("text")),
    (2, _("one choice")),
    (3, _("few choices")),
)


# Create your models here.
class Poll(models.Model):

    objects: QuerySet

    name = models.CharField(max_length=50)
    start_date = models.DateField()
    finish_date = models.DateField()
    desc = models.TextField(verbose_name=_('Description'), blank=True)

    def save(self, *args, **kwargs):
        if self.start_date > self.finish_date:
            raise ValidationError("finish date can't be less then start date!")

        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.name} ({self.start_date.year})'


class Choice(models.Model):
    quest = models.ForeignKey('Question', on_delete=models.CASCADE, related_name='choices')
    value = models.CharField(max_length=70)

    def __str__(self):
        return self.value


class Question(models.Model):
    choices: QuerySet

    poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    text = models.TextField()
    kind = models.IntegerField(choices=QUEST_TYPE, default=2)

    def save(self, *args, **kwargs):
        # if self.choices.count() < 2 and self.kind != 1:
        #     raise ValidationError("The question provides at least two choices!")
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.text[:40]}'


class Answer(models.Model):
    user_sign = models.ForeignKey('UserSign', on_delete=models.SET_NULL, null=True)
    quest = models.OneToOneField(Question, on_delete=models.CASCADE)
    value = models.CharField(max_length=300)


class UserSign(models.Model):
    # poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    email = models.EmailField()
    phone = models.CharField(max_length=20)