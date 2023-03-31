from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def sayHello(req):
    return HttpResponse("<h1>hello sharan☺</h1>")
