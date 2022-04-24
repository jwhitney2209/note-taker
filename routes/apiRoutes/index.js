const router = require('express').Router();
const notesRoutes = require('./notes');

router.use(notesRoutes);

module.exports = router;