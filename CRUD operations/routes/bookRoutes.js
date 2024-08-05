const express = require('express')

const bookController = require('../controllers/bookController')

const router = express.Router()

router.get('/books',bookController.getBooks)
router.post('/books',bookController.createBooks)
router.put('/books/:id',bookController.updateBooks)
router.delete('/books/:id', bookController.deleteBooks)

module.exports = router;