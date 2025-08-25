const express = require('express');
const productsRouter = require('./routes/products.router');
const cartsRouter = require('./routes/carts.router');

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

// Rutas base
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Healthcheck (opcional)
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Ecommerce API up' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
