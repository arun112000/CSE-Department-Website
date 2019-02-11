from django.db import models

# Create your models here.
class Staff(models.Model):
    Name= models.CharField(max_length=30)
    Post=models.CharField(max_length=30)
    Phone=models.CharField(max_length=20)
    Email=models.EmailField()

    def __str__(self):
        return self.Name