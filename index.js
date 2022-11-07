const express = require("express") ; const app = express() ;
const colors = require("colors")
const dotenv = require("dotenv").config();
const connect_DB = require("./config/db")

// Connect Database 
connect_DB() ;

// Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user") ;
const productRoute = require("./routes/product") ;
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

// To Check whether API is running or not
app.get("/",(req,res)=>{
    res.send("API is Working") ;
})

// Middlewares

app.use(express.json());
app.use("/api/auth", authRoute) ;
app.use("/api/users", userRoute) ;
app.use("/api/products", productRoute) ;
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);



app.listen(process.env.PORT, ()=>{
    console.clear();
    console.log("Server running at port 5000".green.bold) ;
}) ;