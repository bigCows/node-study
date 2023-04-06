const express = require('express')
const router = express.Router()

// 挂载在router上的接口是路由中间件

router.get('/login',(req,res) => {
  console.log('login验证');
})

router.get('/home',(req,res) => {
  console.log('home验证');
})

module.exports = router