import express from 'express'
import commentRouter from './routes/comments-routes.js'
import db from './db.js'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', async (req, res) => {
    res.json({msg: `Server ejecutandose, usa una ruta!`});
})

app.use('/api/comments', commentRouter)

app.get('/api/version', async (req, res) => {
    res.json({version: `0.1.1 Todos los derechos reservados.`});
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on('error', (error) => {
    console.log('Hubo un error...')
    console.log(error)
})

export default app