# 🛒 MERN Products App

> **Maincrafts Technology – MERN Stack Internship | Task 1**

A full-stack **MERN** application that displays and manages products using a **React** frontend connected to an **Express + MongoDB** backend REST API.

---

## 📸 Features

- ✅ View all products from MongoDB in a responsive card grid
- ✅ Add new products with name, price, description, category & stock status
- ✅ Delete products
- ✅ Full CRUD REST API (`GET`, `POST`, `PUT`, `DELETE`)
- ✅ MongoDB Atlas cloud database via Mongoose
- ✅ React with props, state, and `axios` for API calls
- ✅ Proxy setup so frontend talks to backend seamlessly

---

## 🗂 Project Structure

```
mern-products-app/
├── backend/
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   ├── models/
│   │   └── Product.js       # Mongoose schema
│   ├── routes/
│   │   └── productRoutes.js # CRUD API routes
│   ├── server.js            # Express entry point
│   ├── .env.example         # Environment variable template
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.js    # Displays a single product
│   │   │   └── AddProductForm.js # Form to add a product
│   │   ├── App.js               # Root component
│   │   ├── index.js             # React entry point
│   │   └── index.css            # Global styles
│   └── package.json
├── .gitignore
├── package.json             # Root: run both with concurrently
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free account (or local MongoDB)
- [Git](https://git-scm.com/)

---

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/mern-products-app.git
cd mern-products-app
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```bash
cp .env.example .env
```

Edit `.env` and paste your **MongoDB Atlas connection string**:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mern-products?retryWrites=true&w=majority
```

> 💡 Get your connection string from [MongoDB Atlas](https://cloud.mongodb.com) → Clusters → Connect → Drivers

### 3. Set up the Frontend

```bash
cd ../frontend
npm install
```

### 4. Run the App

**Option A – Run both together from root:**

```bash
cd ..
npm install          # installs concurrently
npm run dev          # starts backend + frontend simultaneously
```

**Option B – Run separately:**

```bash
# Terminal 1 – Backend
cd backend
npm run dev          # runs on http://localhost:5000

# Terminal 2 – Frontend
cd frontend
npm start            # runs on http://localhost:3000
```

Open **http://localhost:3000** in your browser.

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000/api`

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/products`        | Get all products    |
| GET    | `/products/:id`    | Get single product  |
| POST   | `/products`        | Create a product    |
| PUT    | `/products/:id`    | Update a product    |
| DELETE | `/products/:id`    | Delete a product    |

### Sample POST body

```json
{
  "name": "Wireless Headphones",
  "price": 49.99,
  "description": "Noise-cancelling over-ear headphones",
  "category": "Electronics",
  "inStock": true
}
```

You can test endpoints with [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/).

---

## 🛠 Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React 18, Axios, CSS    |
| Backend   | Node.js, Express 4      |
| Database  | MongoDB, Mongoose       |
| Dev Tools | Nodemon, Concurrently   |

---

## 📚 Skills Demonstrated

- [x] React components, props, and state (`useState`, `useEffect`)
- [x] REST API design with Express
- [x] MongoDB schema design with Mongoose
- [x] Connecting React frontend to Express backend
- [x] Environment variable management with `dotenv`
- [x] CORS configuration
- [x] Error handling on both client and server

---

## 🤝 Acknowledgements

Built as **Task 1** of the [Maincrafts Technology](https://www.maincrafts.com) MERN Stack Internship.
