const express = require('express');

const router = express.Router();

router.use('/v1/api', require('./access'));


// router.get('', (req, res) => {
//   res.json({ message: 'Welcome to the application.' });
// });

module.exports = router;