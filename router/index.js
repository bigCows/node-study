/**
 * 
 * 路由表
 */

const fs = require('fs')
// const router = (pathName,res) => {
//   switch(pathName) {
//     case '/login':
//       res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
//       const login = fs.readFileSync('./static/login.html','utf-8')
//       res.end(login)
//       break;
//     case '/home':
//       res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
//       const home = fs.readFileSync('./static/home.html','utf-8')
//       res.end(home)
//       break;
//     case '/favicon.ico':
//       res.setHeader('Content-Type','image/png')
//       const icon = fs.readFileSync('./static/icon-apple.png')
//       res.end(icon)
//       break
//     default:
//       res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
//       const notFound = fs.readFileSync('./static/404.html','utf-8')
//       console.log(notFound);
//       res.end(notFound)
//   }
// }

const router = {
  '/login': (res) => {
    render('./static/login.html',res)
  },
  '/home': (res) => {
    render('./static/home.html',res)
  },
  '/404': (res) => {
    render('./static/404.html',res)
  },
  '/favicon.ico': (res) => {
    render('./static/icon-apple.png',res,'image/png')
  }
}

const render = (path,res,type="") => {
  res.setHeader('Content-Type',`${type ? type : 'text/html;charset=utf-8'}`)
  res.write(fs.readFileSync(path))
  res.end()
}
module.exports = router