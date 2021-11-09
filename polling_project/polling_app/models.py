from django.core.exceptions import ValidationError
from django.db import models
from django.db.models import QuerySet
from django.db.models.signals import pre_save
from django.dispatch import receiver

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
    active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if self.start_date > self.finish_date:
            raise ValidationError("finish date can't be less then start date!")

        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.name} ({self.start_date.year})'
    

# @receiver(pre_save, sender=Poll)
# def my_handler(sender, instance, created, **kwargs):
#     pass


class Choice(models.Model):
    objects: QuerySet

    quest = models.ForeignKey('Question', on_delete=models.CASCADE, related_name='choices')
    value = models.CharField(max_length=70)

    def __str__(self):
        return self.value


class Question(models.Model):
    choices: QuerySet
    objects: QuerySet

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
    # class Meta:
    #     unique_together = (
    #         'user_sign',
    #         'quest'
    #     )
        
    objects: QuerySet    

    user_sign = models.ForeignKey('UserSign', on_delete=models.SET_NULL, null=True, related_name='answers')
    quest = models.ForeignKey(Question, on_delete=models.CASCADE)
    value = models.CharField(max_length=300)


class UserSign(models.Model):
    objects: QuerySet

    # poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.email or self.phone or super().__str__()