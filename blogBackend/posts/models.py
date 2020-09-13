from django.db import models
from user.models import User

class Post(models.Model):
    title=models.CharField(max_length=200)
    message=models.CharField(max_length=200, null=True)
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.title+" "+self.message+" "+self.user.first_name