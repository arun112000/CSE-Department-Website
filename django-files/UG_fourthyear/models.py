from django.db import models

# Create your models here.
class UG_fourthyear(models.Model):
    Name= models.CharField(max_length=30,blank=True,null=True)
    Roll_no=models.CharField(max_length=30,blank=True,null=True)
    Email=models.EmailField(blank=True,null=True)
    Batch=models.CharField(max_length=30,blank=True,null=True)
    Course=models.CharField(max_length=30,blank=True,null=True)

    def __str__(self):
        return self.Name