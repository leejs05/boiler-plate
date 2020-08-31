const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb://junsuAdmin:wnstn05@cluster0-shard-00-00.oyj21.mongodb.net:27017,cluster0-shard-00-01.oyj21.mongodb.net:27017,cluster0-shard-00-02.oyj21.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-5qn12e-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))