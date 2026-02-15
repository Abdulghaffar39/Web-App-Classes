const express = require("express");
const router = require("./Router/route")
const dbCon = require("./db/dbConnection")
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

dbCon();
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is working successfuly on ${PORT}`);
})