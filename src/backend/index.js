const http = require('http')
const app = require('express')()
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

server.listen('5000', () => {
  console.log('Listening on http://localhost:5000')
})
