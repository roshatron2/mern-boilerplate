const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./utils/db");

const auth = require("./routes/auth");

connectToDb();
app.use(express.json());
app.use(express.urlencoded({ extendded: false }));
app.use(cors());

const errorHandler = require("./middlewares/errorHandler");

app.use("/api/v1/auth", auth);

app.use(errorHandler);
app.get("/", (req, res) => res.send("Server is UP"));

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`));
