const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

// Routes
server.get('/homework/7', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

server.post('/projects/5/submit', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  let madString = `There once was a ${req.query.noun_field_one} named ${req.query.name}.
  ${req.query.name} was very ${req.query.adj_field_one}, because the weather was
  ${req.query.adj_field_two}. ${req.query.name} decided to go to the store to buy
  some ${req.query.noun_field_two}, but they were sold out because they were too
  ${req.query.adj_field_two}.`
  res.send(madString)
})

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))


// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}

server.listen(port, () => console.log('Ready on localhost!'))
