const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    res.render('../views/pages/index.ejs')
})

module.exports = router;