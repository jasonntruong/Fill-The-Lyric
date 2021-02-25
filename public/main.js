const socket = io("http://localhost:8080");

socket.on('connection', socket=> {
    console.log("Hello");
});