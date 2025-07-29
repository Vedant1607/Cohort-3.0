import express from 'express'

const app = express()

// route handlers
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000) // which port