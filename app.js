const express = require('express');
const app = express();
const port = process.env.PORT || 3200;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.get('/',(req,res) => {
  res.render('index', {page: 'home'});
});
app.get('/about',(req,res) => {
  res.render('about', {page:'about'});
});
app.get('/courses',(req,res) => {
  res.render('courses', {page:'contact'});
});
app.get('/contact',(req,res) => {
  res.render('contact', {page:'contact'});
});
app.get('*',(req,res) => {
  res.render('404', {page:''});
});
app.listen(port);