from django.db import models

class Post(models.Model):
    title=models.CharField(max_length=200)
    message=models.CharField(max_length=200)
