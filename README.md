# 🛒 MERN Products App

A full-stack **MERN** application to manage products using a **React** frontend connected to an **Express + MongoDB** backend REST API.

---

## ✅ Features

- View all products in a responsive card grid
- Add products with name, price, description, category & stock status
- Delete products
- Full CRUD REST API (GET, POST, PUT, DELETE)

---

## 🗂 Project Structure

```
mern-products-app/
├── backend/
│   ├── config/db.js
│   ├── models/Product.js
│   ├── routes/productRoutes.js
│   ├── server.js
│   └── .env.example
├── frontend/
│   ├── public/index.html
│   └── src/
│       ├── components/ProductCard.js
│       ├── components/AddProductForm.js
│       ├── App.js
│       └── index.css
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Akshat-1618/mern-products-app.git
cd mern-products-app
```

### 2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` with your MongoDB connection string:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productStore
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

### 4. Run the App

```bash
# Terminal 1 – Backend (http://localhost:5000)
cd backend && npm run dev

# Terminal 2 – Frontend (http://localhost:3000)
cd frontend && npm start
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Axios |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Dev Tools | Nodemon, Concurrently |
