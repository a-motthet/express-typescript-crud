# express-typescript

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.9. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

File structure

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
