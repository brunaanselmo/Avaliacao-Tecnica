import express from "express";
import { getDadosEmpresas } from "../controller/empresas.js";
import { getDadosSetores } from "../controller/setores.js";
import { getDadosRelatorio } from "../controller/relatorio.js";

const router = express.Router();

router.get("/get-empresas", getDadosEmpresas);
router.get("/get-setores", getDadosSetores);
router.get("/get-relatorio", getDadosRelatorio);

export default router;