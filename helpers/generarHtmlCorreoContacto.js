export const generarHtmlCorreoContacto = (contacto) => {
    const { nombre, apellido, correo, telefono, mensaje } = contacto
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contacto</title>
            <style>
                /* Estilos generales */
                body {
                    font-family: Arial, sans-serif;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                /* Estilos para los campos de contacto */
                .campo {
                    margin-bottom: 20px;
                }
                .campo label {
                    display: block;
                    font-weight: bold;
                }
                .campo span {
                    font-weight: normal;
                }
            </style>
        </head>
        <body>

            <div class="container">
                <h1>¡Nuevo mensaje de contacto!</h1>
                <div class="campo">
                    <label>Nombre:</label>
                    <span>${nombre} ${apellido}</span>
                </div>
                <div class="campo">
                    <label>Correo Electrónico:</label>
                    <span>${correo}</span>
                </div>
                <div class="campo">
                    <label>Teléfono:</label>
                    <span>${telefono}</span>
                </div>
                <div class="campo">
                    <label>Mensaje:</label>
                    <span>${mensaje}</span>
                </div>
            </div>

        </body>
        </html>
    `
}
