const http = require('http')
const app = require('express')()
const server = http.createServer(app)
const cors = require('cors')
const { Server } = require('socket.io')
const io = new Server(server)

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen('5000', () => {
  console.log('Listening on http://localhost:5000')
})
