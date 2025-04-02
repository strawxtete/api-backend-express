import express from 'express'
import listProductController from '../controllers/product/listProductController.js'
import getProductController from '../controllers/product/getProductController.js'
import createProductController from '../controllers/product/createProductController.js'
import updateProductController from '../controllers/product/updateProductController.js'
import deleteProductController from '../controllers/product/deleteProductController.js'
import editNameProductController from '../controllers/product/editNameProductController.js'

const router = express.Router()

router.get('/list', listProductController)
router.get('/:id', getProductController)
router.post('/', createProductController)
router.put('/:id', updateProductController)
router.delete('/:id', deleteProductController)
router.patch('/name/:id', editNameProductController)

export default router