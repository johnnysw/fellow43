## (一)需求分析
    1. 登录/注册
    2. 文章列表：首页
    3. 文章详情
    4. 发表文章
    5. 文章评论
## (二)项目结构设计
    1. node_modules: 各种npm包
    2. views: 视图文件（html、ejs）
    3. public
        3.1 images: 存放图片
        3.2 javascripts: 存放js文件
        3.3 stylesheets: 存放css文件
    4. routes: 路由文件
    5. controllers: 控制器文件
    6. models: 数据模型文件（数据库操作相关的文件）
    7. config: 配置文件
    8. app.js: 项目的启动(入口)文件
    9. package.json: 项目的配置文件
## (三)数据库设计
    1. 名词解释
        1.1 ER图（Entity Relationship): 用来描述数据库表结构之间的关系
        1.2 主键(Primary Key): 用来确保表中的记录的唯一性
        1.2 外键(Foreign Key): 用来维护父表和子表之间的关系，外键需要进行配置，外键的命名规范：fk_父表名_子表名_外键名

    2. 数据库表间关系
        2.1 一对多：最常见，比如一个用户可以发表多个文章，数据库中通过在子表中放置一个外键来维护一对多关系
        2.2 一对一：用户与身份证信息，数据库中使用『唯一外键关联』和『主键关联』两种方式维护一对一关系
        2.3 多对多：老师与学生信息，数据库中通过再创建一个第三张表，来维护多对多关系
    3. 数据库设计
        3.1 t_user: 用户表
        3.2 t_blog: 文章表

## (四)安装配置
    1. npm init -y
    2. npm i koa
    3. npm i @koa/router: koa router 2.0路由的安装方式
    4. npm i koa-bodyparser: 处理表单post方式提交数据
    5. npm i koa-static: 静态资源文件配置
    6. 模板引擎
        6.1 npm i koa-views
        6.2 npm i ejs
    7. npm i mysql: mysql数据库驱动

## (五)开发流程
    1. 设计views页面
        figma原型：https://www.figma.com/file/Nc8rHlhHqenhluIeVDsMXm/MyBlog?node-id=1%3A18
    2. 设计和配置路由：
        3.1 "/"：进入index.ejs
        3.2 "/login": 进入login.ejs
        3.3 "/regist": 进入regist.ejs
        将路由的代码放置在routes下的index.js中，以减少app.js中的代码量
    3. 正式开发
        3.1 开发login功能
            3.1.1 编写login.ejs页面
            3.1.2 编写post方式的/login路由逻辑