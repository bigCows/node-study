const apiRoute = {
  '/api/login': (res) => {
    render(res,'{key:123}','application/json;charset=utf-8')
  }
}

const render = (res,data,type="") => {
  res.setHeader('Content-Type',`${type ? type : 'text/html;charset=utf-8'}`)
  res.write(data)
  res.end()
}

module.exports = apiRoute