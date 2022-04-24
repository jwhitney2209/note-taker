const router = require('express').Router();
const notes = require('../../data/db.json');

router.get('/api/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    res.json(results);
  } else {
    res.send(404);
  }
});

router.post('/')
module.exports = router;