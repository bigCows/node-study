const http = require('http')
const router = require('./router')
const apiRoute = require('./api')

const service = http.createServer()
const PORT = 3000
let Router = {}

const use = (obj) => {
  Object.assign(Router,obj)
}

use(apiRoute)
use(router)


const start = () => {
  service.on('request',(req,res) => {
    res.setHeader('access-control-allow-origin','*')
    const URLParams = new URL(req.url,'http://127.0.0.1')
    try {
      Router[URLParams.pathname](req,res)
    } catch (error) {
      console.log(error);
      Router['/404'](req,res)
    }
  })
}

service.listen(PORT,() =>{ console.log(PORT + '端口已启动');})

module.exports = start
