//解析query
const querystring = require('querystring')
// 引入路由
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

// 处理post 请求

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if(req.method !== 'POST' || req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if(!postData){
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
}

const serverHandle = (req,res) => {
  // 设置返回格式JSON
  res.setHeader('content-type', 'application/json')
  // 处理路径
  req.path = req.url.split('?')[0]
  // 处理query
  req.query = querystring.parse(req.url.split('?')[1])
  // 处理post 
  getPostData(req).then(postData => {
    req.body = postData
    // 处理路由
    const blogResult = handleBlogRouter(req, res)
    if(blogResult) {
      blogResult.then(blogData => {
        res.end(JSON.stringify(blogData))
      })
      return
    }
    
    const userResult = handleUserRouter(req,res)
    if(userResult) {
      userResult.then(userData => {
        res.end(JSON.stringify(userData))
      })
      return
    }

    // 404
    res.writeHead(404, {'content-type': 'text/plain'})
    res.write('404 Not Found \n')
    res.end()
  })
}
module.exports = serverHandle