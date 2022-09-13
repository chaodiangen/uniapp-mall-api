const { body } = require('express-validator');
const validate = require('../middleware/validation')
const User = require('../model/user')
const md5 = require('../util/md5')
exports.register = validate([
    body('username')
        .notEmpty().withMessage('用户名不能为空')
        .custom(async value => {
            // 查询数据库 判断是不是已经存在
            const username = await User.findOne({
                where: {
                    username: value
                }
            })
            if (username) {
                return Promise.reject('用户名已经存在')
            }
        }).bail(),
    body('password')
        .notEmpty().withMessage('密码不能为空').bail()
        .isLength({ min: 5 }).withMessage('密码长度不能少于5位'),
    body('email')
        .notEmpty().withMessage('邮箱不能为空')
        .bail()
        .isEmail().withMessage('邮箱格式不正确')
        .bail() // 前面验证失败不会往后走
        .custom(async value => {
            // 查询数据库 判断是不是已经存在
            const email = await User.findOne({
                where: {
                    email: value
                }
            })
            if (email) {
                return Promise.reject('邮箱已经存在')
            }
        }),
])

exports.login = [
    validate([
        body('username')
            .notEmpty().withMessage('用户名不能为空')
            .bail(),
        body('email')
            .notEmpty().withMessage('邮箱不能为空')
            .bail()
            .isEmail().withMessage('邮箱格式不正确'),
        body('password')
            .notEmpty().withMessage('密码不能为空')
    ]),
    validate([
        body('email').custom(async (email, { req }) => {
            const user = await User.findOne({
                where: {
                    email
                }
            })
            req.user = user
            if (!user) {
                return Promise.reject('邮箱不存在')
            }
        })
    ]),
    validate([
        body('username').custom(async (username, { req }) => {
            if (username !== req.user.username) {
                return Promise.reject('密码错误')
            }
        })
    ]),
    validate([
        body('password').custom(async (password, { req }) => {
            if (md5(password) !== req.user.password) {
                return Promise.reject('密码错误')
            }
        })
    ])
]
exports.updateUser = [
    validate([
        validate.isValidObjectId(['params'], 'userId', '请输入正确id')
    ]),
    async (req, res, next) => {
        const userId = req.params.userId
        const user = await User.findOne({
            where: {
                id: userId
            }
        })
        req.current = user
        if (!user) {
            return res.status(404).end()
        }
        next()
    },
    async (req, res, next) => {
        if (req.user.role !== 1 && req.user.id !== req.current.id) {
            return res.status(403).end()
        }
        next()
    }
]
exports.delete = [
    validate([
        validate.isValidObjectId(['params'], 'userId', '请输入正确id')
    ]),
    async (req, res, next) => {
        const userId = req.params.userId
        const user = await User.findOne({
            where: {
                id: userId
            }
        })
        req.current = user
        if (!user) {
            return res.status(404).end()
        }
        next()
    },
    async (req, res, next) => {
        if (req.user.role !== 1) {
            return res.status(403).end()
        }
        next()
    }
]
