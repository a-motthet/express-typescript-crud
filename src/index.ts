import express from "express";

import testRoutes from "./routes/testRoutes";
import productRoutes from "./routes/productRoutes";
import dbtestRoutes from "./routes/dbtestRoutes";

const app = express();
app.use(express.json()); // ใช้สำหรับการ parse JSON body

app.use("/api", testRoutes);
app.use("/api", productRoutes);
app.use("/api", dbtestRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

export default app;
