import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)

// You want to post for create
router.post('/', skillsCtrl.create)

// Use .delete to delete :: /:id to delete the targeted ID
router.delete('/:id', skillsCtrl.delete)

export {
  router
}
