const http = require('http')
var https = require('https')
const url = require('url')
const PORT = 3006

const service = http.createServer()

service.on('request',(req,res) => {
  res.setHeader('content-Type','application/json;chartset=utf-8')
  res.setHeader('access-control-allow-origin','*')
  getData(res)

  // res.end()
})
service.listen(PORT,() => {console.log(PORT + '端口已启动');})

const getData = (response) => {
  let myData = ''
  https.get('https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8D%97%E4%BA%AC&ci=55&channelId=4',(res) => {
    res.on('data',(chunk) => {
      myData += chunk
    }),
    res.on('end',() => {
      console.log(myData);
      response.end(myData)
    })
  })
}
