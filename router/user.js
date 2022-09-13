const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')
// 用户相关路由
// Authentication
router.post('/user/login', userValidator.login, userCtrl.login)
// Registration
router.post('/user', userValidator.register, userCtrl.register)
// Get Current User
router.get('/user/:userId', auth, userCtrl.getUser)
// Update User
router.get('/user/update/:userId', auth, userValidator.updateUser, userCtrl.updateUser)
// Delete User
router.delete('/user/:userId', auth, userValidator.delete, userCtrl.deleteUser)

module.exports = router