const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const blogController = require('../controllers/blog');
const blog = require('../models/blog');

// [POST] ; /v1/blog/post
router.post('/post', [
            body('title').isLength({min: 3}).withMessage('Input Title Min 3 Karakter'), 
            body('body').isLength({min: 5}).withMessage('Input Body Min 5 Karakter')
        ], blogController.createBlogPost);

router.get('/posts', blogController.getAllBlogPost);
router.get('/post/:postId', blogController.getBlogPostById);
router.put('/post/:postId', [
            body('title').isLength({min: 3}).withMessage('Input Title Min 3 Karakter'), 
            body('body').isLength({min: 5}).withMessage('Input Body Min 5 Karakter')
        ], blogController.updateBlogPost);

router.delete('/post/:postId', blogController.deleteBlogPost);        
        
module.exports = router;