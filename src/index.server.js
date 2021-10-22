const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

const categoryRoutes = require("./routes/category");

const productRoutes = require("./routes/product");

const cartRoutes = require("./routes/cart")

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
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

//port listening
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
