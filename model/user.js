const md5 = require('../util/md5')
const Sequelize = require('sequelize')  //引入sequelize模块
const db = require('./index')  //引入数据库

const User = db.define('user'/*自定义表名*/, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
        comment: "自增id"       //注释:只在代码中有效
    },
    //用户名
    username: {
        type: Sequelize.STRING,
        allowNull: false,//不允许为null
        unique: true
    },
    //密码
    password: {
        type: Sequelize.STRING,
        allowNull: false,//不允许为null
        set (pwd) { // Getter Setter
            this.setDataValue('password', md5(pwd)) // 保存 hash 后的密码
        }
    },
    //手机
    mobile: {
        type: Sequelize.STRING,
        allowNull: true,//允许为null
    },
    role: {
        type: Sequelize.INTEGER,
        allowNull: true,//允许为null
        defaultValue: 3,//默认值是0
    },
    //状态
    status: {
        type: Sequelize.INTEGER,
        allowNull: true,//允许为null
        defaultValue: 0,//默认值是0
    },
    //邮箱
    email: {
        type: Sequelize.STRING,
        allowNull: false,//允许为null
        validate: {
            isEmail: true,   //类型检测,是否是邮箱格式
        }
    },
    // 描述
    bio: {
        type: Sequelize.STRING,
    },
    avart: {
        type: Sequelize.STRING,
        defaultValue: 'https://img.socialmarketings.com/article/2019/12/1576041203581.jpg'
    },
    userType: {
        type: Sequelize.BIGINT,
        defaultValue: 0
    },
    bImage: {
        type: Sequelize.STRING,
        defaultValue: 'https://img.socialmarketings.com/banner/2019/12/1576038652668.jpg'
    },
    create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    update_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    //去掉默认的添加时间和更新时间
    timestamps: false,
    freezeTableName: true     // 设置为true时，sequelize不会改变表名，否则可能会按其规则有所调整
});


//同步:没有就新建,有就不变
// User.sync();
// // 先删除后同步
// User.sync({
//     force: true
// });

module.exports = User




