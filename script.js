const socket = io('http://localhost:8080')
const messageForm = document.getElementById('input-container')
const messageInput = document.getElementById('input')

const name = prompt('What is your name?')

socket.emit('new-player', name)

socket.on('chat-message', data => {
    console.log(data)
})

socket.on('player-connected', name => {
    messageInput.value = `${name} connected`
    socket.emit('send-input', name + " connected")
    
})

messageForm.addEventListener("submit", e => {
    e.preventDefault()
    const message = messageInput.value
    socket.emit('send-input', message)
})