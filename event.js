/**
 * 
 * 发布订阅 EventEmitter
 */

const EventEmitter = require('events')
const http = require('http')
const https = require('https')
const cherrio = require('cheerio')
const PORT = 3006

const service = http.createServer()
let event = null

service.on('request',(req,res) => {
  res.setHeader('content-Type','application/json;chartset=utf-8')
  res.setHeader('access-control-allow-origin','*')
  // 传入回调函数，采用异步编程
  // getData((data) => {
  //   // res.end(data) // 获取第三方数据
  //   res.end(spider(data)) // 处理爬虫数据
  // })
  event = new EventEmitter()
  event.on('isEvent',(data) => {
    res.end(data)
  })
  getData()

  // postData((data) => {
  //   res.end(data)
  // })

  // res.end()
})
service.listen(PORT,() => {console.log(PORT + '端口已启动');})

const getData = (cb) => {
  let myData = ''

  let MYUrl = 'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8D%97%E4%BA%AC&ci=55&channelId=4'
  
  https.get(MYUrl,(res) => {
    res.on('data',(chunk) => {
      myData += chunk
    }),
    res.on('end',() => {
      console.log(myData);
      event.emit('isEvent',myData)
    })
  })
}

// const postData = (cb) => {
//   let myData = ''
//   let options = {
//     hostname: 'api2.service.order.mi.com',
//     path:'/mtop/act/mhome/static',
//     method: 'POST',
//     port: 443,
//     headers: {
//       'content-Type':'application/json'
//     }
//   }
//   const myPost = https.request(options,(res) => {
//     res.on('data',(chunks) => {
//       console.log(chunks);
//       myData+=chunks
//     }),
//     res.on('end',() =>{
//       console.log(myData);
//       cb(myData)
//     })
//   })

//   myPost.write(JSON.stringify([{},{"keys":["pc_home_footer_up","pc_home_footer","pc_home_footer_spec_image","service_chat_url","pc_home_footer_region"]}]))
//   myPost.end()
// }


/**
 * 处理爬虫数据
 */
const spider = (data) => {
  let $ = cherrio.load(data)
  let myData = []

  // 猫眼数据
  let myHtml = $('.link.item')
  myHtml.each((idx,val) => {
    console.log(val,'val');
    myData.push(
      {
        title: $(val).find('.title.line-ellipsis').text(),
        grade: $(val).find('.grade').text(),
        showInfo: $(val).find('.show-info.line-ellipsis ').text(),
        actor: $(val).find('.actor.line-ellipsis').text(),
        src: $(val).find('.default-img-bg').find('img').attr('src'),
      }
    )
  })

  console.log('----------------------------------');
  // console.log(myHtml);
  // console.log(myData);
  return JSON.stringify(myData)
}
