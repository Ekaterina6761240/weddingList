require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const sessionParser = require('./middlewares/sessionMiddle');
const guestRouter = require('./routes/apiGuestRouter');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({ credentials: true, origin: true }));

app.use(sessionParser);

app.use('/api/guest', guestRouter);
const server = http.createServer(app);
// server.on('upgrade', upgradeCb);
// wss.on('connection', connectionCb);
server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
