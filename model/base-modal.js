const Sequelize = require('sequelize')  //引入sequelize模块
module.exports = {
    create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    update_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}