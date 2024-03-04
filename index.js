const http = require('http');
const express = require('express');
const path = require('path');
const {Server} = require('socket.io');

const app = express();
app.use(express.static(path.resolve('./public')));

const server = http.createServer(app);
const io = new Server(server);


// Socket Code
io.on('connection', (soket) => {
    console.log("new User connected", soket.id);
});


app.get('/',  (req, res)=>{
    console.log(__dirname);
    res.sendFile('/public/index.html');
});

server.listen(5000, ()=>{
    console.log("Server is Listen in 5000 port");
})