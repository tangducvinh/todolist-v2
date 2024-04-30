import express from 'express'
import cors from 'cors'

import initRoutes from './routers'

const app = express()
const port = 7777

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

initRoutes(app)

app.listen(port, () => {
    return console.log(`Experss is listening at port: ${port}`)
})