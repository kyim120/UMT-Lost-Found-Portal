import express from 'express'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import itemRoutes from './routes/item.routes'
import matchRoutes from './routes/match.routes'
import claimRoutes from './routes/claim.routes'
import chatRoutes from './routes/chat.routes'
import errorMiddleware from './middlewares/error.middleware'

const app = express()
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/items', itemRoutes)
app.use('/api/match', matchRoutes)
app.use('/api/claims', claimRoutes)
app.use('/api/chats', chatRoutes)

// Error handling middleware should be last
app.use(errorMiddleware)

export default app
