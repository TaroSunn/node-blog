const loginCheck = (username, password) => {
  if(username === 'taro' && password === '123') {
    return true
  } else {
    return false
  }
}
module.exports = {
  loginCheck
}