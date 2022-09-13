const Sequelize = require('sequelize')  //引入sequelize模块
const db = require('./index')  //引入数据库
const baseModal = require('./base-modal')
const User = require('./user')
const Article = db.define('article', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    coverImage: Sequelize.STRING,
    slug: {
        type: Sequelize.STRING,
        allowNull: true,//不允许为null
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,//不允许为null
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,//不允许为null
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false,//不允许为null
    },
    tagList: {
        type: Sequelize.STRING,
        allowNull: true,//不允许为null
    },
    sortId: Sequelize.STRING,
    content: Sequelize.TEXT,
    readCount: {
        type: Sequelize.STRING,
        defaultValue: 0
    },
    commentCount: {
        type: Sequelize.STRING,
        defaultValue: 0
    },
    userId: Sequelize.INTEGER,
    favorited: {
        type: Sequelize.BOOLEAN,
        allowNull: true,//不允许为null
        defaultValue: false
    },
    favoritesCount: {
        type: Sequelize.INTEGER,
        allowNull: true,//不允许为null
        defaultValue: 0
    },
    ...baseModal,
}, {
    //去掉默认的添加时间和更新时间
    timestamps: false,
    freezeTableName: true     // 设置为true时，sequelize不会改变表名，否则可能会按其规则有所调整
})

/**
 * 定义表关联
 * foreignKey 外键
 * targetKey 目标键
 * belongsTo  属于
 */
Article.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
User.hasMany(Article)

//同步:没有就新建,有就不变
// Article.sync();
// // 先删除后同步
// Article.sync({
//     force: true
// });
module.exports = Article