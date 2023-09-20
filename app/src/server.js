const express = require("express");
const mysql = require("mysql");
const faker = require("faker-br");
const app = express();
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);
connection.connect();
const sql = `INSERT INTO names (name) VALUES ('${faker.name.firstName()}')`;
connection.query(sql);
connection.end();

app.get("/", async (req, res) => {
  let returnString = "<h1>Full Cycle Rocks!</h1>";

  const connection = mysql.createConnection(config);
  connection.connect();
  connection.query("SELECT * FROM names", function (error, results, fields) {
    if (error) return res.send(returnString);
    if (results.length) {
      returnString += "<ul>";

      for (const person of results) {
        returnString += `<li>${person.name}</li>`;
      }

      returnString += "</ul>";
    }

    return res.send(returnString);
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
