const express = require('express');
const Hive    = require('./hive');

const router = express.Router();

// GET / 라우터
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello, Express');
});

router.use('/hive',Hive);

module.exports = router;
