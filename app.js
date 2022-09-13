const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
const logger = require('./logger')
require('./model')
// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express()

const swaggerJSDocOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: '个人博客',
            version: '1.0.0',
        },
    },
    apis: ['./controller/*.js'], // 包含接口说明、注释的文件路径
};
const swaggerSpec = swaggerJSDoc(swaggerJSDocOptions);
const swaggerUiOptions = {
    explorer: true
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
// 日志
app.use(morgan('dev'));

app.use(express.json())

app.use(cors())

app.use('/api', router)

// 挂在统一错误中间件
app.use(errorHandler())

const PORT = process.env.PORT || 3000




app.listen(PORT, () => {
    console.log('                //         ')
    console.log(`    \\\\         //        `)
    console.log('     \\\\       //         ')
    console.log('##DDDDDDDDDDDDDDDDDDDDDD##')
    console.log('## DDDDDDDDDDDDDDDDDDDD ##')
    console.log('## hh                hh ##')
    console.log('## hh    //    \\\\    hh ##')
    console.log('## hh   //      \\\\   hh ##')
    console.log('## hh                hh ##')
    console.log('## hh      wwww      hh ##')
    console.log('## hh                hh ##')
    console.log('## MMMMMMMMMMMMMMMMMMMM ##')
    console.log('##MMMMMMMMMMMMMMMMMMMMMM##')
    console.log('      \\/            \\/')
    console.log(`Server is running at http://localhost:${PORT} `)
})