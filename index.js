const express = require("express");
require("dotenv").config();

//....... DB conection......//
const { connection } = require("./config/db");


const { userRouter } = require("./routes/user.route");
const { customerRouter } = require("./routes/customers.route");

const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json()); 

//........ Use the cookie-parser middleware........//
app.use(cookieParser());


app.get("/" , (req,res)=>{
    res.send("Welcome to the OTP verification API!")
})

//...............Use authRouter.........//
app.use("/api", userRouter);



//.................user customer route........//
app.use("/api", customerRouter);



app.listen(process.env.PORT || 8080 , async () => {
  try {
    await connection;
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }

  console.log(`${process.env.PORT} RUN SERVER`);
});
