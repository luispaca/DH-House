const express = require('express');
const path = require('path');
const app = express();
const mainRoute = require("./routes/main-router");
const PORT = 3030;
app.listen(PORT,()=>{
  console.log(`Using port ${PORT}`);
});

app.set("view engine","ejs");
app.set("views","./src/views");
app.use(express.static(path.join(__dirname,'../public')));
app.use(mainRoute);