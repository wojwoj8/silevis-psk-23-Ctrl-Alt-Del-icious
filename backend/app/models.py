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
        max_length=15,
        choices=USER_TYPE_CHOICES,
        default='user',
    )
    groups = None
    user_permissions = None
    def __str__(self):
        return f"{self.username}"
    
class AdminData(models.Model):
    dziekan_wydzialu = models.CharField(max_length=255)
    start_praktyk = models.DateField()
    koniec_praktyk = models.DateField()
    
class Attachment1(models.Model):
    zawarcie_umowy = models.DateField()
    dziekan_wydzialu = models.CharField(max_length=255)
    miasto = models.CharField(max_length=50)
    ulica = models.CharField(max_length=100)
    krs = models.CharField(max_length=30)
    nip = models.CharField(max_length=30)
    regon = models.CharField(max_length=30)
    zaklad_pracy = models.CharField(max_length=150) 
    reprezentant_zakladu = models.CharField(max_length=100) 
    student = models.CharField(max_length=100) 
    nr_albumu = models.CharField(max_length=100) 
    start_praktyk = models.DateField()
    koniec_praktyk = models.DateField()
    kontakt1_imie = models.CharField(max_length=100) 
    kontakt1_tel = models.CharField(max_length=100) 
    kontakt1_email = models.CharField(max_length=100) 
    kontakt2_imie = models.CharField(max_length=100) 
    kontakt2_tel = models.CharField(max_length=100) 
    kontakt2_email = models.CharField(max_length=100)
    

    # def __str__(self):
    #     return f'{self.student_name} - {self.company_name}'