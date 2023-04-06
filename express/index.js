const express= require('express')
const app = express()

const PORT = 3000

app.get('/',(req,res) => {
  res.send('111')
})

// 支持动态参数
// app.get('/a/:b',(req,res) => {
//   res.send('a/:b')
// })


// 支持正则
// app.get(/ing*$/g,(req,res) => {
//   res.send('reg')
// })

// app.get('/ab?c',(req,res) => {
//   res.send('ab?c')
// })

// 支持多个中间件
// app.get('/login',(req,res,next) => {
//   // CheckToken
//   let checkToken = true
//   if(checkToken) {
//     next()
//   } else {
//     res.send(
//       {
//         errcode: -1,
//         errmsg:'token已过期,请重新登录',
//         data: null
//       })
//   }
// },(req,res) => {
//   // return Data
//   let data = {
//     errcode: 0,
//     errmsg: '',
//     data: {
//       msg: '请求成功'
//     }
//   }
//   res.send(data)
// })

// login接口改良
const checkTokenFn = (req,res,next) => {
    let checkToken = false
    if(checkToken) {
      next()
    } else {
      res.send(
        {
          errcode: -1,
          errmsg:'token已过期,请重新登录',
          data: null
        })
    }
  }

const returnData = (req,res) => {
  let data = {
    errcode: 0,
    errmsg: '',
    data: {
      msg: '请求成功'
    }
  }
  res.send(data)
}
app.get('/login',[checkTokenFn,returnData])

// 此位置不受use中间件影响
app.get('/detail',(req,res)  => {
  let data = {
    errcode: 0,
    errmsg: '',
    data: {
      msg: 'detail请求成功'
    }
  }
  res.send(data)
})

// 将checkToken挂载在app对象上，称为应用级中间件,在use上方的写的接口不受use中间件限制，在下方的所有接口响应之前都要先通过use的中间件
app.use(checkTokenFn)
// use方法可指定路由，匹配某个路由下的接口是否需要中间件参与
app.use('/home',checkTokenFn)

// 此位置受use中间件限制
app.get('/details',(req,res)  => {
  let data = {
    errcode: 0,
    errmsg: '',
    data: {
      msg: 'details请求成功'
    }
  }
  res.send(data)
})


app.listen(PORT,() => {
  console.log(PORT+'端口启动');
})