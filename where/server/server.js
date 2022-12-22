const express = require("express");
const app = express();
const port = 3001; 
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./server/dong_coords.json", "utf8"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.post("/info", (req, res) => {
  console.log(data[req.body.id]);
  res.send(data[req.body.id])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});