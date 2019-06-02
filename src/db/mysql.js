const mysql = require('mysql')

// 数据库配置
const { MYSQL_CONF } = require('../config/db')

// 创建链接
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 执行sql语句

function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

module.exports = {
  exec
}