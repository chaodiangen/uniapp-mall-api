## 路由设计参考
https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints

## 目录结构
- config 配置文件
- controller 用于解析用户的输入，处理后返回相应的结果
- model  数据持久层
- middleware 用户编写中间件
- router 用户配置URL路由规则
- util 工具模块
- app.js 用于自定义启动时的初始化工作

- cors 处理跨域
- morgan 日志
-  express-validator 数据验证

.
├── app.js
├── bin
│   └── www
+├── common #项目公用文件，sql配置文件以及一些公用方法。
+│   ├── config.js #数据库配置文件
+│   ├── sql.js #连接数据库
+│   └── utils.js #公用方法
+├── controllers #控制层，连接数据模型与路由层
+│   ├── user.js #用户相关控制层
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes # 路由
│   ├── index.js 
│   └── users.js #用户相关路由



