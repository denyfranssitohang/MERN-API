const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const blogController = require('../controllers/blog');

// [POST] ; /v1/blog/post
router.post('/post', [
        body('title').isLength({min: 3}).withMessage('Input Title Min 3 Karakter'), 
        body('body').isLength({min: 5}).withMessage('Input Body Min 5 Karakter')
    ], blogController.createBlogPost);

module.exports = router;