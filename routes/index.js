const express = require('express');
const router = express.Router();


const homeController = require('../controllers/home_controller')


console.log('routes loaded');


router.get('/', homeController.home)


router.use('/users', require('./users'))
router.use('/posts',require('./post'))
router.use('/comments',require('./comments'))
module.exports = router;
