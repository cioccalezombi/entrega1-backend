Ecommerce API – Entrega Nº1

API en Node.js + Express con persistencia en archivos para gestionar Productos y Carritos. Cumple los requisitos de la Entrega Nº1: routers separados, CRUD de productos, manejo de carritos y almacenamiento en products.json / carts.json.

Tecnologías

Node.js

Express

File System (persistencia en JSON)

Nodemon (dev)

Estructura del proyecto
.
├─ data/
│  ├─ products.json
│  └─ carts.json
├─ src/
│  ├─ app.js
│  ├─ managers/
│  │  ├─ ProductManager.js
│  │  └─ CartManager.js
│  └─ routes/
│     ├─ products.router.js
│     └─ carts.router.js
├─ package.json
└─ .gitignore


