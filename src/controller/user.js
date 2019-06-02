const { exec } = require('../db/mysql')

const loginCheck = (username, password) => {
  // if(username === 'taro' && password === '123') {
  //   return true
  // } else {
  //   return false
  // }

  const sql = `select username, password from users where username='${username}' and password='${password}'`
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}
module.exports = {
  loginCheck
}