express = require("express");
app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;

require('dotenv').config()

const projectRouter = require('./routes/projectRouter');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../src/index.html"));
});

app.use('/verify',
(req, res) => res.redirect('/'));

app.use('/api', projectRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log("server listening on port", PORT));
