from django.db import models

class Faculty(models.Model):
    Name= models.CharField(max_length=30,blank=True,null=True)
    Image=models.ImageField(blank=True,null=True,upload_to='images/')
    Post=models.CharField(max_length=30,blank=True,null=True)
    Qualifications=models.TextField(blank=True,null=True)
    Intersts=models.CharField(max_length=30,blank=True,null=True)
    Interestslist=models.TextField(blank=True,null=True)
    Address=models.TextField(blank=True,null=True)
    Phone=models.CharField(max_length=20,blank=True,null=True)
    Mobile=models.CharField(max_length=20,blank=True,null=True)
    Email=models.EmailField(blank=True,null=True)
    Publications=models.TextField(blank=True,null=True)

    def __str__(self):
        return self.Name