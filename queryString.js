/**
 * 
 * nodeJS--queryString模块练习
 */

let queryStr = require('querystring')

let str = 'name=zs&sex=1&age=18'

let qsStr = queryStr.parse(str)

console.log('qsStr ',qsStr)

let objParams = {
  a:1,
  b:2,
  c:3
}

let objStr = queryStr.stringify(objParams)
console.log('obj ',objStr)

let str1 = 'id=3&city=北京&url=https://www.baidu.com'

let str2 = queryStr.escape(str1)  // 将路径中的敏感信息转化为百分比编码
  console.log('str2 ',str2)

let str3 = 'id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com' // 百分比编码反编译
let str4 = queryStr.unescape(str3)
console.log('str4 ',str4)