const crypto = require('crypto')

// 获取真实的散列算法
module.exports = str => {
    return crypto.createHash('md5')
        .update('fuck' + str)
        .digest('hex')
}