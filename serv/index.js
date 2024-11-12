const express = require("express");
const http = require("http");
const jsPDF = require("jspdf");

let port = 3000;
let tartget = '../frontend';

let app = express();
app.use(express.static(tartget));

http.createServer(app).listen(port);