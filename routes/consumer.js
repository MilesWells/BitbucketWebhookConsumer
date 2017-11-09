const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body.push.changes);
  res.json({});
});

module.exports = router;
