const express = require('express');
const router = express.Router();

const baseUri = 'https://code.dudesoln.com/rest/api/1.0/projects';

router.post('/', (req, res) => {
  let repoName = req.body.repository.fullName;
  let commitId = req.body.push.changes[0].new.target.hash;
  let uri = `${baseUri}/${repoName}/commits/${commitId}/changes`;

  let response = {
      changeUri: uri
  };

  req.app.io.emit('commit', response);

  res.json(response);

});

module.exports = router;
