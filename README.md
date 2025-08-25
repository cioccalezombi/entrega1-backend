Ecommerce API – Entrega Nº1

API en Node.js + Express con persistencia en archivos para gestionar Productos y Carritos. Cumple los requisitos de la Entrega Nº1: routers separados, CRUD de productos, manejo de carritos y almacenamiento en products.json / carts.json.

🚀 Tecnologías

Node.js

Express

File System (persistencia en JSON)

Nodemon (dev)

📁 Estructura del proyecto
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


Importante: products.json y carts.json deben existir con [] como contenido inicial.

⚙️ Instalación y uso
# 1) Instalar dependencias
npm install

# 2) Ambiente de desarrollo (con hot reload)
npm run dev

# 3) Producción
npm start


El servidor queda en: http://localhost:8080

🔒 .gitignore

Asegurate de no subir dependencias ni variables sensibles:

node_modules
.env

📦 Endpoints – Products (/api/products)
1) Listar todos

GET /api/products
200 OK

{ "status": "ok", "data": [ /* productos */ ] }

2) Obtener por id

GET /api/products/:pid
200 OK

{ "status": "ok", "data": { /* producto */ } }


404 Not Found

{ "status": "error", "message": "Producto no encontrado" }

3) Crear producto

POST /api/products
Body (JSON):

{
  "title": "Camiseta",
  "description": "Camiseta negra",
  "code": "SKU-001",
  "price": 2999,
  "status": true,
  "stock": 50,
  "category": "indumentaria",
  "thumbnails": ["/imgs/camiseta.png"]
}


Notas:

id no se envía: se autogenera.

code debe ser único (valida duplicados).

201 Created

{ "status": "ok", "data": { "id": 1, /* ... */ } }


400 Bad Request

{ "status": "error", "message": "Falta el campo requerido: X" }

4) Actualizar producto

PUT /api/products/:pid
Body (JSON – campos parciales):

{
  "price": 3499,
  "stock": 40,
  "thumbnails": ["/imgs/camiseta.png", "/imgs/camiseta2.png"]
}


200 OK

{ "status": "ok", "data": { /* producto actualizado */ } }


404 Not Found

{ "status": "error", "message": "Producto no encontrado" }

5) Eliminar producto

DELETE /api/products/:pid
200 OK

{ "status": "ok", "message": "Producto eliminado" }


404 Not Found

{ "status": "error", "message": "Producto no encontrado" }

🛒 Endpoints – Carts (/api/carts)
1) Crear carrito

POST /api/carts
201 Created

{ "status": "ok", "data": { "id": 1, "products": [] } }

2) Ver productos de un carrito

GET /api/carts/:cid
200 OK

{ "status": "ok", "data": [ { "product": 1, "quantity": 2 } ] }


404 Not Found

{ "status": "error", "message": "Carrito no encontrado" }

3) Agregar producto al carrito

POST /api/carts/:cid/product/:pid

Agrega el producto :pid al carrito :cid.

Si el producto ya existe en el carrito, incrementa quantity.

201 Created

{ "status": "ok", "data": { "id": 1, "products": [ { "product": 1, "quantity": 2 } ] } }


404 Not Found

{ "status": "error", "message": "Producto no existe" }


o

{ "status": "error", "message": "Carrito no encontrado" }

🧪 Pruebas rápidas (Postman)

POST /api/products (crear) → anotar id.

GET /api/products (listar) → debe incluir lo creado.

GET /api/products/:id (traer uno).

PUT /api/products/:id (actualizar algo).

DELETE /api/products/:id (borrar).

POST /api/carts (crear carrito) → anotar cid.

POST /api/carts/:cid/product/:pid (agregar) → repetir para ver quantity subir.

GET /api/carts/:cid (ver productos del carrito).

Tip: Si te aparece "El código \"SKU-001\" ya existe", es la validación funcionando. Usá otro code o vaciá data/products.json a [] para resetear.

🧰 cURL (opcional)

En PowerShell usá curl.exe (no curl a secas) para evitar conflictos.

Crear producto

curl.exe -X POST http://localhost:8080/api/products ^
 -H "Content-Type: application/json" ^
 -d "{\"title\":\"Camiseta\",\"description\":\"Camiseta negra\",\"code\":\"SKU-001\",\"price\":2999,\"status\":true,\"stock\":50,\"category\":\"indumentaria\",\"thumbnails\":[\"/imgs/camiseta.png\"]}"


Agregar producto al carrito 1

curl.exe -X POST http://localhost:8080/api/carts/1/product/1

🧩 Criterios cumplidos

Server Node + Express en puerto 8080 ✅

Rutas /api/products y /api/carts con router ✅

CRUD de productos con id autogenerado y code único ✅

Carritos: crear, listar y agregar productos con incremento de quantity ✅

Persistencia con products.json y carts.json ✅

Entregable listo para GitHub (sin node_modules) ✅

🛠 Troubleshooting

GET /api/products → []: aún no creaste productos.

GET /api/products/:id → 404: ese id no existe.

POST /api/products → “code ya existe”: usá otro code o eliminá el producto anterior.

POST /api/carts/:cid/product/:pid → “Producto no existe”: asegurate de crear el producto y usar su id.

JSON corrupto: dejá data/*.json como [] y reintentá.
