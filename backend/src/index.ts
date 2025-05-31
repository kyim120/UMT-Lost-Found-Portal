import app from './app'
import { prisma } from './config/db'

const PORT = process.env.PORT || 4000

async function startServer() {
  try {
    await prisma.$connect()
    console.log('Connected to the database')

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
