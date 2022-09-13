const express = require('express')

const router = express.Router()
const tagsCtrl = require('../controller/tags')

// Get Tags
router.get('/', tagsCtrl.getTags)

module.exports = router