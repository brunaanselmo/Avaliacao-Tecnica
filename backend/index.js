import express from "express";
import empresasRoutes from "./routes/routes.js";
import setoresRoutes from "./routes/routes.js";
import relatoriosRoutes from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", empresasRoutes);
app.use("/api", setoresRoutes);
app.use("/api", relatoriosRoutes);


app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});