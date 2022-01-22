import express from 'express'
import {
  getProducts,
  getProductById,
  delProductById,
  updateProduct,
  createProduct,
  getTopProducts,
  createProductReview,
} from '../controllers/productController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/review').post(protect, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, delProductById)
  .put(protect, admin, updateProduct)

export default router
