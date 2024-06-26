const express = require('express');
const router = express.Router();
const CoursesController = require('../app/controllers/CoursesController');

router.get('/:slug', CoursesController.show);


module.exports = router;
