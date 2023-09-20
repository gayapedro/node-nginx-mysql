const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("<h1>Full cycle</h1>");
});

app.listen(3000, () => console.log("listening on port 3000"));
