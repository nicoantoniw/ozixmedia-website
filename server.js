const express = require('express');
const path = require('path');
const sendMail = require('./dist/js/mail');
const app = express();
const PORT = 8080;

// Data parsing
app.use('/dist', express.static(path.join(__dirname,'dist')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/email', (req, res) => {
  // send email
  const { email, name, last_name, phone, text } = req.body;
  console.log('Data: ', req.body);

  sendMail(email, name, last_name, phone, text);
  res.json({ message: 'Email recieved' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/redirect', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'redirect.html'));
});

app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
});
