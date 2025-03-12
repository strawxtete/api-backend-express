import express from 'express'
import listUserController from '../controllers/user/listUserController.js'
import getUserController from '../controllers/user/getUserController.js'
import createUserController from '../controllers/user/createUserController.js'
import updateUserController from '../controllers/user/updateUserController.js'
import deleteUserController from '../controllers/user/deleteUserController.js'
import editNameUserController from '../controllers/user/editNameUserController.js'

const router = express.Router()

router.get('/list', listUserController)
router.get('/:id', getUserController)
router.post('/', createUserController)
router.put('/:id', updateUserController)
router.delete('/:id', deleteUserController)
router.patch('/name/:id', editNameUserController)

export default router