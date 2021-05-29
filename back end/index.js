require("dotenv").config();
const express = require("express");
const { getFAQlist } = require("./mongod");
const app = express();
const port = process.env.PORT || 5050;

app.use(require("cors")());
app.use(express.static("./build"));

app.get("/list", async (req, res) => {
  try {
    const getList = await getFAQlist();
    res.send(getList);
  } catch (err) {
    res.send(err);
  }
});
  

app.get("/", (req, res) => {
  res.sendFile("index.html");
});


app.listen(port , async () => {
  console.log(`Am listening on http://localhost:${port}`);
});
