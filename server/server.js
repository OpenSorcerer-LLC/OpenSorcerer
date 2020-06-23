express = require("express");
app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../src/index.html"));
});

app.listen(PORT, () => console.log("server listening on port", PORT));
