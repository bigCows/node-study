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
app.set('views','./views')
app.set('views engine','ejs')

// 配置静态资源
app.use(express.static('static'))

// 处理post请求参数，放在应用级中间件的位置，达到全局处理的效果
app.use(express.urlencoded({extended:false}))//处理form表单提交的数据
app.use(express.json())//处理json提交的数据

app.get('/home',(req,res) => {
  // 渲染模板给前端
  res.render('ssr-home.ejs',{name:'mxf'})
})

app.get('/login-page',(req,res) => {
  res.render('ssr-login.ejs')
})

app.post('/login',(req,res,next) => {
  try {
    if(req.body.username === 'mxf' && req.body.password === '123') {
      res.render('ssr-home.ejs',{name:'mxf'})
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