// 处理数据
const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req,res) => {
  const method = req.method
  

  // 登陆
  if(method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    // const data = loginCheck(username, password)
    // if(data) {
    //   return new SuccessModel()
    // }else {
    //   return new ErrorModel('登陆失败')
    // }

    const result = loginCheck(username, password)
    return result.then(val => {
      if(val.username) {
        return new SuccessModel()
      }
      return new ErrorModel('登陆失败')
    })
  }
}
module.exports = handleUserRouter