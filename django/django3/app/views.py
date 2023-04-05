from django.shortcuts import render
import pymongo


client = pymongo.MongoClient(
    "mongodb+srv://root:W16IxgSNTas4fcY2@realmcluster.zmek8.mongodb.net/?retryWrites=true&w=majority")
db = client["OA-PY-OCT-2022"]

user = db["user"]

data = []

for i in user.find():
    data.append(i)


# Create your views here.


def index(req):
    return render(req, "index.html", {"data": data})
