import express from 'express'
import { router } from './routes'

const app = express()
const port = 4100

app.use('/api/v1/', router)
app.listen(port, () => {
  console.clear()
  console.log(`Server on port ${port}`)
})
