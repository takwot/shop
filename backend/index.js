const express = require('express')
const cors = require('cors')
const client = require('./db')

const app = express()


app.use(express.json({}))
app.use(cors())


client.query('select * from items').then(res => {
    console.log(res.rows)
})

app.listen(5000, ()=>{
    console.log('Server is running')
})