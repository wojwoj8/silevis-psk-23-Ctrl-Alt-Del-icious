from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    # For user type
    USER_TYPE_CHOICES = [
        ('user', 'User'),
        ('supervisor', 'Supervisor'),
    ]
    
    user_type = models.CharField(
        max_length=10,
        choices=USER_TYPE_CHOICES,
        default='user',
    )

    def __str__(self):
        return f"{self.username}"