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

function newSkill(req, res){
  res.render('skills/new')
}

function create(req, res){
  skillDb.create(req.body, function (error, skill) {
    res.redirect('/skills')
  })
}

function deleteSkill(req, res){
  skillDb.findByIdAndDelete(req.params.id, function(error, todo){
    res.redirect('/skills')
  })
}

export {
    index,
    show,
    newSkill as new,
    create,
    deleteSkill as delete
}