const http = require('http')

const POST = 3000

const serverHandle = require('../app')

const sever = http.createServer(serverHandle)
sever.listen(POST)