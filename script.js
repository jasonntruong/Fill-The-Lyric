const socket = io('http://localhost:8080')
const messageForm = document.getElementById('input-container')
const messageInput = document.getElementById('input')

socket.on('chat-message', data => {
    console.log(data)
})

messageForm.addEventListener("submit", e => {
    e.preventDefault()
    const message = messageInput.value
    socket.emit('send-input', message)
})
