/**
 * 
 * 路由表
 */

const fs = require('fs')

const router = {
  '/login': (req,res) => {
    render('./static/login.html',res)
  },
  '/home': (req,res) => {
    render('./static/home.html',res)
  },
  '/404': (req,res) => {
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

module.exports = router