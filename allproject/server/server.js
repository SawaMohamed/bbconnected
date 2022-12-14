const path = require('path')
const express = require('express')
const db = require('./db')
const userRouter = require('./routes/usersRouter')
const addFavRouter = require('./routes/addFavRouter')
const matchesRouter = require('./routes/matchesRouter')
const loginRoutes = require('./routes/loginRoutes')
const messageRouter = require('./routes/messageRoute')
const interestUsersRouter = require('./routes/interestUsersRoute')
// const uploadRoutes = require('./routes/uploadRoutes')
const cors = require('cors')

const app = express()
app.use(cors())
db()
// here I use midleware to read eevryting from the browser then put it in Body Object
app.use(express.json())

app.use('/users', userRouter)
app.use('/addfav', addFavRouter)
app.use('/matches', matchesRouter)
app.use('/login', loginRoutes)
app.use('/messages', messageRouter)
app.use('/interest-users', interestUsersRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.listen(8000, () => {
  console.log('Listing on port 8000')
})
