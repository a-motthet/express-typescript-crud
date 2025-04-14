# 🧪 Express TypeScript API

A simple RESTful API built with **Express.js** and **TypeScript**, following a clean folder structure and modular design. This project demonstrates basic CRUD operations with mock data and PostgreSQL connectivity.

---

## 🚀 Getting Started

### 📦 Installation

```bash
bun install
```

or if you're using npm:

```bash
npm install
```

### ▶️ Run the Project

```bash
bun run dev
```

or with nodemon:

```bash
npx nodemon
```

---

## 📁 Folder Structure

<details>
<summary><strong>Click to expand</strong></summary>

```
src/
├── controllers/         # จัดการ logic ที่ตอบสนองต่อ HTTP requests
│   └── productController.ts
│
├── models/              # กำหนด interface หรือ type สำหรับข้อมูล (TypeScript types)
│   └── productModels.ts
│
├── routes/              # กำหนดเส้นทาง (routes) ของ API
│   ├── dbtestRoutes.ts        # สำหรับทดสอบการเชื่อมต่อฐานข้อมูล
│   ├── productRoutes.ts       # เส้นทางสำหรับจัดการสินค้า
│   ├── productRoutes_old.ts   # ไฟล์เวอร์ชันเก่า (ควรถูก ignore แล้ว)
│   └── testRoutes.ts          # เส้นทางสำหรับทดสอบเบื้องต้น
│
├── services/            # จัดการ business logic หรือเชื่อมต่อฐานข้อมูล
│   └── productService.ts
│
├── utils/               # utility functions ที่ใช้ร่วมกัน เช่น db connection
│   └── db.ts
│
├── app.ts               # จุดเริ่มต้นของแอป Express (entry point)
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
