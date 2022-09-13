const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const User = require('../model/user')

module.exports = async (req, res, next) => {
    // 获取请求token 数据
    let token = req.headers['authorization']
    token = token ? token.split('Bearer ')[1] : null
    if (!token) {
        return res.status(401).end()
    }
    // 验证token 是否有效
    try {
        const decodedToken = await jwt.verify(token, jwtSecret)
        const user = await User.findOne({
            where: {
                id: decodedToken.userId
            }
        })
        req.user = user
        next()
    } catch (error) {
        return res.status(401).end()
    }
}