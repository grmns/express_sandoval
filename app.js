// Importa Express
const express = require('express');

// Crea una aplicación Express
const app = express();

// Define las rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación de Express!');
});

app.get('/clientes', (req, res) => {
  res.json(['Cliente 1', 'Cliente 2', 'Cliente 3']);
});

app.get('/productos', (req, res) => {
  res.json(['Producto 1', 'Producto 2', 'Producto 3']);
});

// Escucha en el puerto 13000
const PORT = 13000;ss
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
