const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const http = require("http");
const https = require("https");

dotenv.config();

let options = {
    key: fs.readFileSync(process.env.KEY),
    cert: fs.readFileSync(process.env.CERT)
}
let port = process.env.PORT;
let tartget = process.env.TARGET;

let app = express();
app.use(express.static(tartget));

http.createServer(app).listen(port);
// https.createServer(options, app).listen(port);