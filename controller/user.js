
const User = require('../model/user')
const md5 = require('../util/md5')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 1、获取请求体
// 2、数据验证
// 2.1、基本数据验证
// 2.2、业务数据验证
// 3、验证通过，将数据保存到数据库 

// 用户登录
exports.login = async (req, res, next) => {
    try {
        const data = await User.findOne({
            where: {
                email: req.body.email,
                password: md5(req.body.password)
            }
        })
        const token = await jwt.sign({ userId: data.id }, jwtSecret, {
            expiresIn: 60 * 60 * 24
        })
        const user = JSON.parse(JSON.stringify(data))
        delete user.password
        user.token = token
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


/**
 * 用户注册
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.register = async (req, res, next) => {
    try {
        const data = await User.create(req.body)
        const user = JSON.parse(JSON.stringify(data))
        delete user.password
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
/**
 * 获取当前登录信息
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
// Get Current User
exports.getUser = async (req, res, next) => {
    try {
        const data = await User.findOne({
            where: {
                id: req.params.userId
            }
        })
        const user = JSON.parse(JSON.stringify(data))
        delete user.password
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
// Update User
exports.updateUser = async (req, res, next) => {
    try {
        // 查找当前用户的id 然后进行更改
        const params = {
            ...req.body
        }
        const user = await User.update(params, {
            where: {
                id: req.params.userId
            }
        })
        res.status(201).end()
    } catch (error) {
        next(error)
    }
}
// Delete User
exports.deleteUser = async (req, res, next) => {
    try {
        await User.destroy({
            where: {
                id: req.params.userId
            }
        })
        res.status(204).end()
    } catch (error) {
        next(error)
    }
}