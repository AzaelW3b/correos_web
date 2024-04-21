import express from 'express'
import cors from 'cors'
import correo from './routes/correo.js'


const app = express()
const port = 4008


app.use( express.json({ extended: true }) )
app.use( cors() )
app.use('/api/correos',correo)

app.listen( port, () => console.log(`El servidor está funcionando en el puerto ${ port }`) )