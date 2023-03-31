from django.shortcuts import render

# Create your views here.


def login(req):
    return render(req, "login.html", {"names": ["kamal", "sharan", "mani"]})
