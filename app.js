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
  res.render('courses', {page:'courses'});
});
app.get('/contact',(req,res) => {
  res.render('contact', {page:'contact'});
});
app.get('/facebook',(req,res) => {
  res.redirect('https://facebook.com/drivein');
});
app.get('/twitter',(req,res) => {
  res.redirect('https://twitter.com/drivein');
});
app.get('/linkedin',(req,res) => {
  res.redirect('https://linkedin.com/in/drivein');
});
app.get('/instagram',(req,res) => {
  res.redirect('https://instagram.com/drivein');
});
app.get('/youtube',(req,res) => {
  res.redirect('https://youtube.com/drivein');
});
app.get('*',(req,res) => {
  res.render('404', {page:''});
});

app.listen(port, ()=> {
  console.log(`listening on http://localhost:${port}`);
});