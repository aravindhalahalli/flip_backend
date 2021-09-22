const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

// mongodb connection
// mongoose.connect(
//     `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.1dbb1.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,{
//        useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true
//     }
// ).then(()=>{
//     console.log("Data base connected")
// })
mongoose.connect(process.env.MONGO_DB_URL, async (err) => {
  if (err) throw err;
  console.log("Data base connected");
});
//middleware
app.use(bodyParser());

app.use("/api", authRoutes);
app.use("/api", adminRoutes);

//port listening
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
