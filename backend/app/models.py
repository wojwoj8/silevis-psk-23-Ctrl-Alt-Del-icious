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

    def save(self, *args, **kwargs):
        # Set id to 1 and save only if there is no existing instance with id 1
        if not self.pk and not AdminData.objects.filter(pk=1).exists():
            self.pk = 1
            super().save(*args, **kwargs)
        elif self.pk == 1:
            # Update the existing instance with id 1
            super().save(*args, **kwargs)
        else:
            # Do not save if there is already an instance with id other than 1
            raise ValueError("There can be only one instance with id 1.")
    
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