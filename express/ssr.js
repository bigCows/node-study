/**
 * 获取请求参数--get/post
 */

 const express= require('express')
 const cors = require('cors')
 
 const app = express()
 const PORT = 3200

// 跨域中间件
 app.use(cors())

//  配置模板引擎ejs
// app.set('views','./views')
// app.set('views engine','ejs')

// 使用ejs直接渲染html文件
app.set('views','./views')
app.set('views engine','html')
app.engine('html',require('ejs').renderFile) // 支持渲染html文件

// 配置静态资源
app.use(express.static('static'))

// 处理post请求参数，放在应用级中间件的位置，达到全局处理的效果
app.use(express.urlencoded({extended:false}))//处理form表单提交的数据
app.use(express.json())//处理json提交的数据

app.get('/home',(req,res) => {

  // 模拟数据库查询数据
  let data = ['name','age','sex','high']
  // 渲染模板给前端
  // res.render('ssr-home.ejs',{name:'mxf',data})
  res.render('ssr-home.html',{name:'mxf',data})
})

app.get('/login-page',(req,res) => {
  res.render('ssr-login.ejs')
})

app.post('/my/login',(req,res,next) => {
  try {
    if(req.body.username === 'mxf' && req.body.password === '123') {
      // 模拟数据库查询数据
      let data = ['name','age','sex','high']
      // 渲染模板给前端
      // res.render('ssr-home.ejs',{name:'mxf',data})
      res.render('ssr-home.html',{name:'mxf',data})
    } else {
      res.render('ssr-login.ejs')
    }
  } catch (error) {
    next(error)
  }
})



app.use((err,req,res,next) => {
  res.status(501).send(err)
})
 app.listen(PORT,() => {
   console.log(PORT+'端口启动');
 })