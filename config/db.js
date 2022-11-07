
const mongoose = require("mongoose");

const db = ()=>{
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull...!!!".cyan.bold))
    .catch((err) => {
      console.log(err);
    });

}

module.exports = db ;