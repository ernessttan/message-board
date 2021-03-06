const express = require('express');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
