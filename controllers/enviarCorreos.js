import { transporter } from '../config/mail.js'
import { generarHtmlCorreo } from '../helpers/generarHtmlCorreo.js'
import { generarHtmlCorreoContacto } from '../helpers/generarHtmlCorreoContacto.js'

export const enviarCorreo = async (req, res) => {
    try {
        console.log(req.body)
        const { carritoFormato, direccionEntrega } = req.body
        const mailOptions = {
            from: 'imdpazgf@hotmail.com',
            to: [`${direccionEntrega?.correo}`,'imdpazgf@hotmail.com'],
            subject: 'Contacto desde la página web',
            html: generarHtmlCorreo(carritoFormato, direccionEntrega),
        }
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error)
            }
            console.log(`Mensaje enviado ${info.response}`)
        })
        res.json({ msg: 'Correo enviado de manera correcta' })
    } catch (error) {
        console.log(error)
    }

}

export const enviarCorreoContacto = async (req, res) => {
    try {
        console.log(req.body)
        const mailOptions = {
            from: 'imdpazgf@hotmail.com',
            to: [`${req?.body?.correo}`, 'imdpazgf@hotmail.com'],
            subject: 'Contacto desde la página web',
            html: generarHtmlCorreoContacto(req.body),
        }
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error)
            }
            console.log(`Mensaje enviado ${info.response}`)
        })
        res.json({ msg: 'Correo enviado de manera correcta' })
    } catch (error) {
        console.log(error)
    }
}