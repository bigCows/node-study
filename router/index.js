/**
 * 
 * 路由表
 */

const fs = require('fs')
const path = require('path')
const mime = require('mime')

const router = {
  '/': (req,res) => {
    render('./static/login.html',res)
  },
  '/login': (req,res) => {
    render('./static/login.html',res)
  },
  '/home': (req,res) => {
    render('./static/home.html',res)
  },
  '/api': (req,res) => {
    render('./static/api.html',res)
  },
  '/404': (req,res) => {
    if(readStatic(req,res)) return
    render('./static/404.html',res)
  },
  '/favicon.ico': (req,res) => {
    render('./static/icon-apple.png',res,'image/png')
  }
}

const render = (path,res,type="") => {
  res.setHeader('Content-Type',`${type ? type : 'text/html;charset=utf-8'}`)
  res.write(fs.readFileSync(path))
  res.end()
}

// 静态资源处理
const readStatic =(req,res) => {
  const myUrl = new URL(req.url,'http://127.0.0.1:3000').pathname
  const pName = path.join(path.resolve(),myUrl)
  if(fs.existsSync(pName)) {
    console.log('ininin');
    render(pName,res,mime.getType(path.extname(myUrl)))
    return true
  } else {
    return false
  }
} 

module.exports = router