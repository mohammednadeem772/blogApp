require("./models/db");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const blogRoutes = require("./routes/blog");

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", blogRoutes);

//Starting a server
app.listen(3000, () => {
  console.log(`app is running at : 3000`);
});
