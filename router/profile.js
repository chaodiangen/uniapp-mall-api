const express = require('express')

const router = express.Router()
const articlesCtrl = require('../controller/profile')

// Get Profile 用户资料
router.get('/:username', articlesCtrl.getProfile)
// Follow user 关注用户
router.post('/:username/follow', articlesCtrl.getFollowUser)
// UnFollow user 取消关注用户
router.delete('/:username/follow', articlesCtrl.setUnFollowUser)

module.exports = router