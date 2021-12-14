const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

server.post('/projects/5/submit', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  let madString = `There once was a ${req.query.noun1} named ${req.query.name}.
  ${req.query.name} was very ${req.query.adj1}, because the weather was
  ${req.query.adj2}. ${req.query.name} decided to go to the store to buy
  some ${req.query.noun2}, but they were sold out because they were too
  ${req.query.adj2}.`
  res.send(madString)
})

  const publicServedFilesPath = path.join(__dirname, 'public')
  server.use(express.static(publicServedFilesPath))

  let port = 80
  if (process.argv[2] === 'local') {
    port = 8080
  }

  server.listen(port, () => console.log('Ready on localhost!'))
