const express = require("express");
const structureRouter = require("./Router/StructureRouter");
const Cors = require('cors');
const app = express();
app.use(express.json());
app.use(Cors());

app.use("/structure", structureRouter);

module.exports=app;