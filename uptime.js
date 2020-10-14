let express = require("express"),
    http = require('http'),
    app = express();

app.use(express.static("public"));
app.get("/",function(request, response) {
  response.sendStatus(200);
})