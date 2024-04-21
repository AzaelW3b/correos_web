export const generarHtmlCorreo = (carrito, direccionEntrega) => {
    const productosHTML = carrito.map(producto => `
        <tr>
            <td>${producto.nombreProducto}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.total}</td>
        </tr>
    `).join('');

    const direccionHTML = `
        <div class="direccion">
            <h2>Dirección de Entrega:</h2>
            <p><strong>Nombre:</strong> ${direccionEntrega.nombre}</p>
            <p><strong>Dirección:</strong> ${direccionEntrega.calle}, ${direccionEntrega.numeroExterior}, ${direccionEntrega.municpio}, ${direccionEntrega.estado}, ${direccionEntrega.codigoPostal}</p>
            <p><strong>Correo Electrónico:</strong> ${direccionEntrega.correo}</p>
            <p><strong>Teléfono:</strong> ${direccionEntrega.telefono}</p>
        </div>
    `;

    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmación de Compra</title>
            <style>
                /* Estilos para la tabla */
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
                /* Estilos para la dirección */
                .direccion {
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 5px;
                    margin-bottom: 20px;
                }
                .direccion h2 {
                    margin-top: 0;
                }
            </style>
        </head>
        <body>

            <h1>¡Gracias por tu compra!</h1>

            <h2>Detalles del Pedido:</h2>

            <table>
                <tr>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
                ${productosHTML}
            </table>

            ${direccionHTML}

            <p>Si tienes alguna pregunta sobre tu pedido, no dudes en ponerte en contacto con nosotros.</p>

            <p>¡Gracias de nuevo y que tengas un excelente día!</p>

        </body>
        </html>
    `
}