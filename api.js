const apiRoute = {
  '/api/login': (req,res) => {
    const myUrl = new URL(req.url,'http://127.0.0.1')
    const params = myUrl.searchParams
    render(res,'{"errcode":0,"errmsg":"","data":{"msg":"登陆成功"}}','application/json;charset=utf-8')
  },
  '/api/loginpost': (req,res) => {
    let postData = ''
    req.on('data',(chunks) => {
      postData+=chunks
    })
    req.on('end',() => {
      const { uname, pswd } = JSON.parse(postData)
      if(!(uname === 'mxf' && pswd === '123')) {
        return res.end('{"errcode":-1,"errmsg":该账户不存在，请核对}')
      }
      render(res,'{"errcode":0,"errmsg":"","data":{"msg":"登陆成功"}}','application/json;charset=utf-8')
    })
  },
}

const render = (res,data,type="") => {
  res.setHeader('Content-Type',`${type ? type : 'text/html;charset=utf-8'}`)
  res.write(data)
  res.end()
}

module.exports = apiRoute