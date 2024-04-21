import express from 'express'
import { enviarCorreo, enviarCorreoContacto } from '../controllers/enviarCorreos.js'

const router = express.Router()

router.post('/', enviarCorreo)
router.post('/contacto', enviarCorreoContacto)


export default router