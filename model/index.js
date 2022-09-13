const Sequelize = require('sequelize');
const dbUrl = require('../config/config.default')
// database数据库名称   name 用户  password密码

const sequelize = new Sequelize(
    dbUrl.database,
    dbUrl.user,
    dbUrl.password,
    {
        host: dbUrl.host,  //数据库域名
        dialect: dbUrl.dialect,
        // 设置时区
        timezon: '+08:00',
        define: {
            timestamps: false //为模型添加 createdAt 和 updatedAt 两个时间戳字段（true or false）
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize

// 相应字段有:
// type 字段数据类型(sequlize. …)
// allowNull(是否允许为空true,false)
// autoIncrement(自增, true ,false)
// unique(唯一性, true,false, string)
// comment (解释 说明)
// defaultValue (字段默认值)
// primaryKey (对主键的设置, true,false)
// defaultValue(默认值的设置) 
