const { exec } = require('../db/mysql')

// 博客列表
const getList = (author, keyword) => {
  // return [
  //   {
  //     id: 1,
  //     title: 'title1',
  //     content: 'content1',
  //     createTime: 1561231231232,
  //     author: 'author1'
  //   },
  //   {
  //     id: 2,
  //     title: 'title2',
  //     content: 'content2',
  //     createTime: 1561222331233,
  //     author: 'author2'
  //   }
  // ]

  let sql = `select * from blogs where 1=1 `
  if(author) {
    sql += `and author='${author}' `
  }
  if(keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  return exec(sql)
}

// 博客列表详情
const getDetail = (id) => {
  // return {
  //   id: 1,
  //   title: 'title1',
  //   content: 'content1',
  //   createTime: 1561231231232,
  //   author: 'author1'
  // }

  const sql = `select * from blogs where id='${id}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

// 新建博客
const newBlog = (blogData = {}) => {
  // return {
  //   id: 3
  // }
  
  const { title, content, author } = blogData
  const createtime = Date.now()

  const sql = `
    insert into blogs (title, content, createtime, author) values ('${title}', '${content}', ${createtime}, '${author}')
  `
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
}

// 更新博客内容
const updateBlog = (id, blogData = {}) => {
  // return false

  const { title, content } = blogData
  const sql = `update blogs set title='${title}', content='${content}' where id=${id};`
  return exec(sql).then(updateData => {
    if(updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

// 删除博客
const delBlog = (id, author) => {
  // return false
  const sql = `delete from blogs where id='${id}' and author='${author}';`
  return exec(sql).then(delData => {
    if(delData.affectedRows > 0) {
      return true
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}