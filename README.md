# OTP_Authentication



## Deployed link:-https://coffee-octopus-belt.cyclic.app/
<br>
## Video link :-https://drive.google.com/file/d/1Lpl8cFma4iuCxST8Yta2VvMpKE1zxgHo/view?usp=sharing

## Installation

```
npm install
```

## Start the Backend server 

```


npm run server
```


<br>

##  MVC Structure

```

     ├── config
     |    └── db.js
     ├── middleware
     |    └── auth.mw.js
     |    
     ├── models
     |    └── blacklist_token.model.js
     |    └── User.model.js
     |        customer.model.js
     ├──routes
     |    └── customer.route.js
     |    └── user.route.js
     └── index.js
```
Things to do before starting the server:- 

-  create `.env` file and put "PORT", "URL", "SECRET_KEY".
- "PORT" is for listening the server.
- "MONGODB_URL" write your mongo url here.
- "SECRET_KEY" write your jwt secret key here

<br>

## Schema 

<br>

<h3><strong>Schema for register </strong><h3>

```js

{
     username : {type : String },
    email : {type : String , required : true},
    password : {type : String , required : true}
}

```

<h3><strong>Schema for login</strong><h3>

```js


    {
  "email": "your@email.com",
  "password": "your_password"
}

  

```


<h3><strong>Schema for creating/customer </strong><h3>

```js
{
    name : {type : String },
    contect : {type : String },
    address : {type : String , required : true}
}

```



```

## Endpoints

| METHOD | ENDPOINT         | DESCRIPTION                                        | STATUS CODE |
|--------|------------------|----------------------------------------------------|-------------|
| POST   | /api/register    | Allow users to register                            | 201         |
| POST   | /api/verify      | Allow verification of OTP                          | 200         |
| POST   | /api/login       | Allow users to log in                              | 200         |
| POST   | /api/logout      | Used to log out                                    | 201         |
| PATCH  | /api/reset       | Used to reset password                             | 200         |
| GET    | /api/customers   | Find customers of the authorized user (valid token)| 200         |
| POST   | /api/customers   | Create a new customer                              | 201         |


<br>


