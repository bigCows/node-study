const http = require('http')
const url = require('url')
const PORT = 3003

const service = http.createServer()

service.on('request',(req,res) => {
  console.log(req.url,'ccc');
  // req.url = '/jsonp' ? res.write(`fn(${JSON.stringify({a:1,b:2})})`) : res.write(`fn(${JSON.stringify({errmsg:'路径有误，请重试'})})`)
  let pName = url.parse(req.url).pathname
  let quer = url.parse(req.url,true).query
  console.log(quer,'qqq');
  if(pName = '/jsonp') {
    res.write(`${quer.cb}(${JSON.stringify({a:1,b:2})})`) 
  }
  res.end()
})
service.listen(3003,() => {console.log(PORT + '端口已启动');})
