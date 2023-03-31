/**
 * 
 * nodeJS--http模块简要练习
 */

var http = require('http')
const PORT = 3001
const service = http.createServer()
var url = require('url')
console.log(url);

service.on('request',(req,res) => {

  if(url === 'favicon.ico') {
    return ''
  }
  console.log(url.parse(req.url));
  let pathName = url.parse(req.url).pathname

  // get请求参数
  let queryString = url.parse(req.url,true).query
  console.log('queryString ',queryString)
  if(queryString) {
    console.log('有参数');
    console.log(queryString.a);
    console.log(queryString.b);
  }
  
  res.setHeader('content-type','text/html;charset=utf-8')
  const isPage = pageUrl(pathName)
  res.write(isPage)
  res.end()

});

service.listen(PORT,() => {
  console.log(PORT + '端口已启动');
})

let urlArr = ['/list','/home']

const pageUrl = (url) => {
  if(urlArr.includes(url) > 0) {
    return `<html><h1>${url}页面</h1></html>`
  } else {
    return '<html><h1>404 NOT FOUND</h1></html>'
  }
}

const a = url.resolve('qwea/aaa/xxx/ddd','ccc')
const b = url.resolve('http://www.baidu.com/qwea/aaa/xxx/ddd','ccc')
console.log(a);
console.log(b);
