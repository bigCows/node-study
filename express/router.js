/**
 * 路由级中间件or错误中间件
 */

const express= require('express')
 
 const app = express()
 const router = require('./index-router')
 const PORT = 3100

//  验证下面所有接口
app.use((req,res,next) => {
  console.log('验证token');
  next()
})

// 会给router下的所有接口加上/login前缀
app.use('/login',router)


// 抛出同步错误,异步错误需要借助next使其到达错误中间件
// app.use((req,res) => {
//   throw new Error('error')
// })

 // 错误中间件放在最下面，防止堵塞代码
 app.use((err,req,res,next) => {
  console.log(err);
  res.status(404).send({
    errcode: -1,
    errmsg:'error',
    data: null
  })
})
 
 app.listen(PORT,() => {
   console.log(PORT+'端口启动');
 })