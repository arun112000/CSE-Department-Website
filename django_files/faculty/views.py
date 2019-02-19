from django.shortcuts import render
from .models import Faculty
# Create your views here.
def faculty(request):
    fcb=Faculty.objects
    return render(request,'people.html',{"fcb":fcb})
