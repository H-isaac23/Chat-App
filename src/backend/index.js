const http = require('http')
const app = require('express')()
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const PORT = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id.substring(0, 3))

  socket.broadcast.emit(
    'user connect',
    'a user connected ' + socket.id.substring(0, 3)
  )

  socket.on('isTyping', (data) => {
    const user = data.user ? data.user : socket.id.substring(0, 3)
    data.notification = `${user} is typing`
    io.emit('typing', data)
  })

  socket.on('disconnect', () => {
    io.emit(
      'user disconnect',
      `a user with id ${socket.id.substring(0, 3)} disconnected`
    )
  })

  socket.on('chat message', (data) => {
    console.log('Message: ', data)
    data.nickname = data.nickname ? data.nickname : socket.id.substring(0, 3)
    io.emit('chat message', data)
  })
})

server.listen(PORT, () => {
  console.log('Server listening at http://localhost:3000')
})
