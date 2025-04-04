**Dev Tinder**

# Features
- Create an Account
- Login
- Create/Update your Profile
- Feed Page
- Send Connection Request 
- See Our Matches
- See the request we've sent /received
- update your profile

# Future Scope 
+ Report/Block
+ Phone No Validation



# Middleware and Error Handlers




# Database Schema & Models
npm mongoose

**Password** = sqY3QVfEJfVd3d3L
mongodb+srv://velocityimmo:<db_password>@users.pjcvm.mongodb.net/

Best Practice 
1. first of all connect to the database and then the server should start listening to the API calls




# creating a Database & Mongoose (S-01)
1. Downloadable Version => compass => we manage in this collection
2. MongoDb it self manages and store the collection on cloud and give access to you

* version => community &&  enterpsrise



# Diving into the API's




# Data Sanitization & scheme validations
- npm validator => for validating the emails 


# Encrypting Passwords


using jsonwebtoken for generating the jwt tokens

how to set expiration in the cookies or jwt token 

* There is something known as mongoose schema method 
this user schema bascially defines the user model and its properties

so i can attach few methods onto this schema which is applicable for all the users => what are these method => these are helper method which are very closely related to the user 

for eg => when we are trying to hit login API we are creating JWT token => every user will have the jwt token 


# Diving into the API's and express Router 

- Express Router to handle the API Routes => used to handle large no of API's (Industry Best practice to group the project)



# Logical DB Query & Compound Indexes
- enum in mongoose. It will allow only to choose from the given value-options only.
- To store the _id(mongoDB id) we create the type => mongoose.Schema.Types.ObjectId


+ How to put index in database
    why do we need indexes in DB
    what is the advantage/disadvanategs of creating indexes
    compound indxes



# 
- Thought process behind the GET vs POST
Post Api - The user is trying enter some data in DB 
    How can a attacker exploit your POST api 
    - sending some random data into your api and bymistake you put that data in your DB 
    - so i will verify everything which is coming in my request 

Get api - user is trying to fetch some data from the database 
    - In GET API we will make sure to send only the allowed data to authorized user 


