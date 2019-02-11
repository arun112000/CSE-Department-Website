from django.shortcuts import render
from .models import Faculty
# Create your views here.
def home(request):
    fcb=Faculty.objects
    return render(request,'dss.html',{"fcb":fcb})
