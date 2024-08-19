import express from 'express'
import session from 'express-session'
import cors from 'cors'

import { status } from './routes/status.js'
import { vouch } from './routes/vouch.js'

const app = express()

app.use(cors())
app.set('trust proxy', 1)
app.use(session({
  secret: 'chocolate milk',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

/** Routes */
app.get('/', status)
app.get('/vouch', vouch)

const port = process.env.PORT || 4000
app.listen(port).on('listening', () => {
  console.log(`Server is listening on port ${port}`)
})
