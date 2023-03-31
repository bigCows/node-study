/**
 * 
 * nodeJS--url模块练习
 */

let url = require('url')
let http = require('http')


const DOMAIN = 'http://www.baidu.com'
const PORT = 3002
const service = http.createServer()

/**
 * 
 * nodeJS中文网: https://nodejs.cn/api-v16/url.html#urlformaturl-options
 */

service.on('request',(req,res) => {
  // let queryString = url.parse(req.url).query  // 获取路径参数
  // let objParams = url.parse(req.url,true).query // 将路径参数转为键值对
  // let pathName = url.parse(req.url).pathname // 获取前端请求的接口
  // let joinUrl = url.resolve(DOMAIN,'ccc') // 前面有斜杠（'/'）,它将替换域名之后的整个路径。前面没有斜杠（'/'）,它将替换基本域名中斜杠之后的所有内容，不是域名有斜杠直接拼接，无斜杠，替换最后一个斜杠后的所有内容
  res.setHeader('content-Type','text/html;charset=utf-8')
  res.write('hello,nodeJS')
  let myUrl = new URL(req.url,'http://localhost:3002')
  for (const [key,val] of myUrl.searchParams) {
    // console.log(key);
    // console.log(val);
  }
  // console.log('myUrl ',myUrl)
  if(myUrl.pathname === '/home') {
    res.write('<html>home页面</html>')
  }
  const myURL = new URL('https://a:b@測試?abc#foo');
  console.log(myURL.href);
  console.log(url.format(myURL,{fragment:false}));
  // auth: url中是否显示用户名和密码，默认true;
  // fragment: url是否显示 代码片段(#后的)，默认true
  // search: 是否显示路径参数,默认true
  // unicode：是否采用unicode编码，默认false

  res.end()
})

service.listen(PORT,() => { console.log(PORT + '端口已启动');})


