# 🧪 Express TypeScript API

A simple RESTful API built with **Express.js** and **TypeScript**, following a clean folder structure and modular design. This project demonstrates basic CRUD operations with mock data and PostgreSQL connectivity.

---

## 🚀 Getting Started

### 📦 Installation

```bash
bun install
```

---

## 📁 Folder Structure

<details>
<summary><strong>Click to expand</strong></summary>

```
src/
├── controllers/
│   └── productController.ts
│
├── models/              # กำหนด interface
│   └── productModels.ts
│
├── routes/              # กำหนด routes
│   ├── dbtestRoutes.ts
│   ├── productRoutes.ts
│   └── testRoutes.ts
│
├── services/
│   └── productService.ts
│
├── utils/               
│   └── db.ts            # db connection
│
├── app.ts
```

</details>

---

## 🔌 API Endpoints

| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| GET    | `/api/product`   | Get all products                 |
| GET    | `/api/product/:id` | Get product by ID               |
| POST   | `/api/product`   | Add new product                  |
| GET    | `/api/testdb`    | Test DB connection               |
| GET    | `/api/test`      | Test API connection              |

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/your_database
PORT=3000
```

---

## 📦 Built With

- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pg (node-postgres)](https://node-postgres.com/)
- [bun](https://bun.sh/) or [npm](https://www.npmjs.com/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev) (optional)

---
