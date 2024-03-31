
const Course = require('../models/courses')
const { mutipleMongooseToObject, mongooseToObject }  = require('../../util/mongoose')

class CoursesController {

    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
                .then(courses => {
                    res.render('courses/show', { courses: mongooseToObject(courses) });
                })
                .catch(next);
    }
}

module.exports = new CoursesController();
