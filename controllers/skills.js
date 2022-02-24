import * as skillDb from '../data/skills-db.js'

function index(req, res) {
    skillDb.find({}, function(error, skills) {
      res.render('skills/index', {
        title: 'title',
        skills: skills,
        error: error
      })
    })
  }

function show(req, res) {
    skillDb.findById(req.params.id, function(error, skill) {
        res.render('skills/show', {
            title: 'title',
            skill: skill,
            error: error
        })
    })
}

export {
    index,
    show
}