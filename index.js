const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.set('view engine','ejs');
app.set('views','./src/views/');

app.use(expressEjsLayouts);
app.set('layout','layouts/layout')

app.use(require('./src/routers/tareaRouter'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
