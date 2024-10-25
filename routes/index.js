const express = require('express');

const router = express.Router();

const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

/**
 * GET home page.
 */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(authRoutes);
router.use(userRoutes);

module.exports = router;
