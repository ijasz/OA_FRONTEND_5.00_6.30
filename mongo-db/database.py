import pymongo


client = pymongo.MongoClient(
    "mongodb+srv://root:TLVhiyf5Gx5Tt8eU@realmcluster.zmek8.mongodb.net/?retryWrites=true&w=majority")
db = client["OA-PY-OCT-2022"]

user = db["user"]

# user.insert_one({
#   "title": "Post Title 1",
#   'body': "Body of post.",
#   'category': "News",
#   'likes': 1,
#   'tags': ["news", "events"],
# })

# persons = [
#     {
#     "name": "sharan",
#     "age": 22,
#     "loaction" : "pondy"
#     },
#     {
#     "name": "MUKESH",
#     "age": 27,
#     "loaction" : "chennai"
#     },
#     {
#     "name": "prem",
#     "age": 25,
#     "loaction" : "saram"
#     },
#     {
#     "name": "kamal",
#     "age": 24,
#     "loaction" : "moolakulam"
#     },
#     {
#     "name": "mani",
#     "age": 10,
#     "loaction" : "kiliyanur"
#     },
#     {
#     "name": "sam",
#     "age": 15,
#     "loaction" : "villianur"
#     },
# ]

# user.insert_many(persons)

# print(user.find_one({"name" : "kamal"}))

# print(user.find())

# for i in user.find({}, {"_id": 0, 'name': 1}):
#     print(i)


# myquery = {"name": "kamal"}
# newvalues = {"$set": {"loaction": "teachers colony", "name": "kamalkdhanush"}}

# user.update_one(myquery, newvalues)

myquery = {"age": {"$gt": 10}}
newvalues = {"$set": {"loaction": "ocean academy"}}

x = user.update_many(myquery, newvalues)


mydoc = user.find().sort("name")

for i in mydoc:
    print(i)

# myquery = {"name": "MUKESH"}

# user.delete_one(myquery)

# print("data sent")
