const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('form', { title: 'Mini Messageboard' });
});

module.exports = router;
