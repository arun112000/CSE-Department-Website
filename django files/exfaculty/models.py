from django.db import models

# Create your models here.
class Exfaculty(models.Model):
    Name= models.CharField(max_length=30)
    Image=models.ImageField(upload_to='images/')
    Post=models.CharField(max_length=30)
    Intersts=models.CharField(max_length=30)
    Email=models.EmailField()

    def __str__(self):
        return self.Name