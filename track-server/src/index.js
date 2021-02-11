require('dotenv').config();
require('./models/User')
require('./models/Track')
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth');
const app = express();



app.use(express.json())
app.use(authRoutes)
app.use(trackRoutes)

const mongoUri = process.env.URI

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error', (err) => {
    console.error('Couldn\'t connect to mongo server', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email is ${req.user.email}`)
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
})