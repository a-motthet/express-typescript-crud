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

<details> <summary><strong>📁 Folder Structure</strong></summary>
src/
├── controllers/         # จัดการ logic
│   └── productController.ts
│
├── models/              # กำหนด interface
│   └── productModels.ts
│
├── routes/              # กำหนด routes
│   ├── dbtestRoutes.ts
│   ├── productRoutes.ts
│   ├── productRoutes_old.ts
│   └── testRoutes.ts
│
├── services/
│   └── productService.ts
│
├── utils/               
│   └── db.ts            # db connection
│
├── app.ts
</details>
