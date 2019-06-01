// 博客列表
const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: 'title1',
      content: 'content1',
      createTime: 1561231231232,
      author: 'author1'
    },
    {
      id: 2,
      title: 'title2',
      content: 'content2',
      createTime: 1561222331233,
      author: 'author2'
    }
  ]
}

// 博客列表详情
const getDetail = (id) => {
  return {
    id: 1,
    title: 'title1',
    content: 'content1',
    createTime: 1561231231232,
    author: 'author1'
  }
}

// 新建博客
const newBlog = (blogData = {}) => {
  return {
    id: 3
  }
}

// 更新博客内容
const updateBlog = (id, blogData = {}) => {
  return false
}

// 删除博客
const delBlog = (id) => {
  return false
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}