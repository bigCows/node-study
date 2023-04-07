const express = require('express')
const router = express.Router()

// 挂载在router上的接口是路由中间件

router.get('/login',(req,res,next) => {
  // res.send('login验证')
  // 异步错误借用next向下到错误中间件
  setTimeout(() => {
    next(new Error('error-sync'))
  }, 0);
})

router.get('/home',(req,res) => {
  res.send('home验证')
})

module.exports = router