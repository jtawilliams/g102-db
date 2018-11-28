const express = require('express')
const app = express()
const queries = require('./queries')
const port = process.env.PORT || 3001


app.get('/', (req, res) => {
 	queries.getAll().then(response => res.send(response))
})

app.listen(port, () => {
 	console.log('listening on ${port}')
})
