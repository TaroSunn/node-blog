// 处理数据
const { 
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require('../controller/blog')

const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
  // 请求方式
  const method = req.method
  // id
  const id = req.query.id

  // 博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  // 博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    console.log(req.body)
    const data = getDetail(id)
    return new SuccessModel(data)
  }

  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    const data = newBlog(req.body)
    return new SuccessModel(data)
  }

  // 更新博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    const data = updateBlog(id, req.body)
    if(data) {
      return new SuccessModel()
    }else {
      return new ErrorModel('更新博客失败')
    }
  }

  // 删除博客
  if(method === 'POST' && req.path === '/api/blog/delete') {
    const data = delBlog(id, req.body)
    if(data) {
      return new SuccessModel()
    }else {
      return new ErrorModel('删除博客失败')
    }
  }
}
module.exports = handleBlogRouter