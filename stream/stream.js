const fs = require('fs')

// 读数据流
const rs = fs.createReadStream('./a.txt','utf-8')
// 写入数据流
const ws = fs.createWriteStream('./b.txt','utf-8')

rs.on('data',(chunk) => {
  console.log(chunk,'chunk');
})
rs.on('end',() => {
  console.log('end');
})
rs.on('error',(err) => {
  console.log(err,'err');
})

ws.write('sssssssssssssss')
ws.write('ggggggggggggggg')
ws.write('fffffffffffffff')
ws.end()

// 复制大文件
// pipe 解决读取过快/写入过慢，读取过慢/写入过快带来的一系列问题
fs.writeFile('./rs.txt','1\n2\n3\n4',(err) => {})
const RS = fs.createReadStream('./rs.txt')
const WS = fs.createWriteStream('./ws.txt')
// 将可读流写入可写流
RS.pipe(WS)
