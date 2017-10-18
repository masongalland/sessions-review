const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const checkForSession = require("./middleware/checkForSession");
const port = 3001;

const app = express();

app.use(bodyParser.json());

app.use(
  session({
    secret: "@nyth!ng y0u w@nT",
    resave: false,
    saveUninitialized: false
  })
);
app.use(checkForSession);

app.get("/api/favorites", (req, res) => {
  res.status(200).send(req.session.favorites);
});

app.post("/api/favorites/:fav", (req, res)=>{
    console.log(req.params.fav)
    req.session.favorites.push(req.params.fav)
    res.status(200).send(req.session.favorites)
})



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
