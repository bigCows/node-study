/**
 * 
 * CORS 跨域
 */

const http = require('http')
const url = require('url')
const PORT = 3003

const service = http.createServer()

service.on('request',(req,res) => {
  console.log(req.url,'ccc');
  // req.url = '/jsonp' ? res.write(`fn(${JSON.stringify({a:1,b:2})})`) : res.write(`fn(${JSON.stringify({errmsg:'路径有误，请重试'})})`)
  res.setHeader('content-Type','application/json;charset=utf-8')
  res.setHeader('access-control-allow-origin','*')
  let pName = url.parse(req.url).pathname
  let quer = url.parse(req.url,true).query
  console.log(quer,'qqq');
  // res.write(`${JSON.stringify({a:1,b:2})}`) 
  const obj = {a:1,b:2}
  res.end(`${JSON.stringify(obj)}`)
})
service.listen(3003,() => {console.log(PORT + '端口已启动');})
