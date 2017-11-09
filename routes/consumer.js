const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log(JSON.stringify(req.body));
  res.json({});
});

module.exports = router;
