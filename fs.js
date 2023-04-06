/**
 * 
 * nodeJS--fs模块练习
 */

const fs = require('fs')
const fsP = require('fs/promises')

// 创建目录
// fs.mkdir('./avatar',(err) => {
//   // console.log(err);
// })

// 重命名目录
// fs.rename('./avatar','./avatar-rn',(err) => {
//   console.log(err);
// })

// 删除目录
// fs.rmdir('./avatar',(err) => {
//   if(err && err.code === 'ENOENT') {
//     console.log('目录不存在');
//   }
// })

// 创建文件,重复使用会覆盖原内容
// fs.writeFile('./avatar-rn/w.txt','wwww',(err) => {
//   console.log(err);
// })

// 像文件中追加内容
// fs.appendFile('./avatar-rn/a.txt','我是a文件,xxxx',(err) => {
//   console.log(err);
// })

// 读文件
// fs.readFile('./avatar-rn/a.txt','utf-8',(err,content) => {
//   console.log(err);
//   console.log(content);
// })
fs.readFile('./static/login.html','utf-8',(err,content) => {
  console.log(err);
  console.log(content);
})

// 删除文件
// fs.unlink('./avatar-rn/a.txt',(err) => {
//   console.log(err);
// })

// 删除目录--必须是空目录，否则删不掉
// fs.rmdir('./avatar-rn',(err) => {
//   console.log(err);
// })

// 读目录
// fs.readdir('./avatar-rn',(err,data) => {
//   console.log(err);
//   console.log(data);
// })

// 读目录信息
// fs.stat('./avatar-rn',(err,data) => {
//   console.log('--------------------------');
//   console.log(err);
//   console.log(data);
//   console.log(data.isFile());
//   console.log(data.isDirectory());
// })

// 删除目录-test
// fs.readdir('./avatar-rn',(err,data) => {
//   console.log(data);
//   data.forEach(item => {
//     fs.unlink(`./avatar-rn/${item}`,(err) => {})
//   })
//   fs.rmdir('./avatar',(err) => {
//     console.log(err);
//   } )
// })

// 同步创建目录,但会阻塞后面的代码,可采用promise优化
// try {
  // fs.mkdirSync('./sync-avatar')
  // fs.readdir('./sync-avatar',(err,data) => {
  //   data.forEach(item => {
  //     fs.unlink(`./sync-avatar/${item}`,(err) => {console.log(err);})
  //   })
  //   fs.rmdir('./sync-avatar',(err) => {})
  // })
// } catch (error) {
  // console.log(error);
// }

// 基于promise删除文件
// fsP.readdir('./async-avatar').then(async (data) => {
//   console.log(data);
//   let delArr = []
//   data.forEach(item => {
//     delArr.push(fs.unlink(`./async-avatar/${item}`,(err) => {}))
//   })
//   await Promise.all(delArr)
//   await fsP.rmdir('./async-avatar')
// })

// 基于promise删除文件
// fsP.readdir('./avatar-rn').then(async (data) => {
//   await Promise.all(data.map(item => {fs.unlink(`./avatar-rn/${item}`,(err) => {})}))
//   await fsP.rmdir('./avatar-rn')
// })

  
// 文件拷贝
// fs.mkdir('./async-avatar',(err) => {})
// fs.copyFile('./avatar-rn/a.txt','./async-avatar/a.txt',(err) => {console.log(err);})

