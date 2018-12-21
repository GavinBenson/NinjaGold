const express = require("express");

const app = express();

app.use(express.static(__dirname+"/static"));

app.get("", function(request, response) {
  response.sendFile(__dirname + "/templates/main.html");
});
app.listen(8000,(errs)=>console.log(errs?errs: "gucci!"));
