/**
 * 获取请求参数--get/post
 */

 const express= require('express')
 const cors = require('cors')
 
 const app = express()
 const PORT = 3200

// 跨域中间件
 app.use(cors())

// 处理post请求参数，放在应用级中间件的位置，达到全局处理的效果
app.use(express.urlencoded({extended:false}))//处理form表单提交的数据
app.use(express.json())//处理json提交的数据

app.get('/home',(req,res) => {
  console.log(req.query);
  const params = req.query
  res.send('success')
})

app.post('/login',(req,res) => {
  const params = req.body
  console.log(params);
  res.send('post---------')
})
 app.listen(PORT,() => {
   console.log(PORT+'端口启动');
 })