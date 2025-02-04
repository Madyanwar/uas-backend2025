// import mysql
const mysql = require("mysql2");

// import dotenv dan menjalankan method config
require("dotenv").config();

// destructing object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

/**
 * Membuat koneksi database menggunakan method createConnection
 * Method menerima parameter object: host, user, password, database
 */
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

/**
 * Menghubungkan ke database menggunakan method connect
 * Menerima parameter callback
 */
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
  } else {
    console.log("Successfully connected to the database!");
  }
});

module.exports = db;
