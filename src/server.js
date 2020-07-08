require('dotenv').config();

const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const socketIo = require('socket.io');

const routes = require('./routes');
const cors = require('cors');

const app = express();
const http = require("http");
const server = http.createServer(app);

const io = socketIo(server);

io.on('connection', socket => {
	console.log('New user connected');
	socket.on('disconnect', () => {
		console.log('User disconnected')
	})
})

mongoose.connect(
	process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);