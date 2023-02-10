const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const mysqlErrorCodes = require("mysql-error-codes");
require("dotenv").config();
const cors = require("cors");
const { rejects } = require("assert");
const exhbs = require("express-handlebars");
const fileUpload = require("express-fileupload");
app.get("/", (req, res) => {
  res.send("Hello word");
});
app.use(cors());
app.use(express.json());
app.use(express.static("files"));
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//database
const db = mysql.createPool({
  host: process.env.DB_URL,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

//get post from backend
app.get("/post", (req, res) => {
  const sql = "SELECT * FROM articles";
  db.query(sql, (err, result) => {
    res.send(result);
  });
});

//admin upload
app.post("/upload", (req, res) => {
  const file = req.files.file;
  const filename = file.name;
  const newpath = __dirname + "/../frontend/src/upload/";
  const sql =
    "INSERT INTO articles(article_title,article_author,article_date,article_categorie,article_img,article_body) VALUE(?,?,?,?,?,?)";
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  const categorie = req.body.categorie;
  const date = req.body.date;

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "Erreur de chargement", code: 200 });
    }
    res.status(200).send({ message: "Chargement reussi", code: 200 });
  });

  db.query(
    sql,
    [title, author, date, categorie, filename, content],
    (err, res) => {
      if (err) {
        throw err;
      }
      console.log("oscar");
      console.log(res);
    }
  );
});
//supprimer un post
app.post("/delete", (req, res) => {
  const sql = "DELETE FROM articles WHERE id = ?";
  db.query(sql, [req.body.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

app.use("/upload", express.static("./upload"));

// User Authentication
// app.post("/auth", (req, res) => {
//   const { username, password } = req.body;
//   if (username && password) {
//     db.query(
//       `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`,
//       (err, rows, fields) => {
//         if (err) {
//           res.status(500).send({
//             message: "Internal Server Error!",
//           });
//         } else {
//           if (rows.length > 0) {
//             res.status(200).send({
//               message: "You are successfully logged in!",
//             });
//           } else {
//             res.status(401).send({
//               message: "Incorrect username or password!",
//             });
//           }
//         }
//       }
//     );
//   } else {
//     res.status(400).send({
//       message: "Please provide username and password!",
//     });
//   }
// });

//ajouter un user dans la liste des newsletters

app.post("/newsletter", (req, res) => {
  const sql = "INSERT INTO news_letters_users(user_name,user_mail) VALUE(?,?)";
  db.query(sql, [req.body.user_name, req.body.user_mail], (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res);
  });
});

// ajouter un commentaire

app.post("/comment", (req, res) => {
  const sql =
    "INSERT INTO comments(user_name,user_mail,user_comments) VALUE(?,?,?)";
  db.query(
    sql,
    [req.body.user_name, req.body.user_mail, req.body.user_comment],
    (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res);
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log("Server ready! PORT: " + process.env.PORT);
});
