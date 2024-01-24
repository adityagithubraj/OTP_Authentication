# OTP_Authentication



## Deployed link

<br>
https://coffee-octopus-belt.cyclic.app/
<br>

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


<h3><strong>Schema for creating/customer  Todo</strong><h3>

```js
{
    name : {type : String },
    contect : {type : String },
    address : {type : String , required : true}
}

```



```

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/register</td>
            <td>This endpoint should allow users to register</td>
            <td>201</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/verify</td>
            <td>This endpoint should allow verification of OTP</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/login</td>
            <td>This endpoint should allow users to login</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/logout</td>
            <td>This endpoint is used to logout</td>
            <td>201</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/api/reset</td>
            <td>This endpoint is used to reset</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/customers</td>
            <td>This endpoint is used to find customers of authorized user if a valid token is present in headers (authorization)</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/customers</td>
            <td>This endpoint is used to create a customer</td>
            <td>200</td>
        </tr>
    </tbody>
</table>


<br>


