var compression = require("compression");
const express = require("express");
const path = require("path");
const app = express();

app.use(compression());
app.use(express.static(__dirname + "/dist/exo-meow-translator2"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/exo-meow-translator2/index.html"));
});
app.listen(process.env.PORT || 3000);
