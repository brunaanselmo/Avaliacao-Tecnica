import express from "express";
import {
  getDadosEmpresas,
  addEmpresa,
  updateEmpresa,
  deleteEmpresa,
} from "../controller/empresas.js";
import {
  getDadosSetores,
  addSetor,
  updateSetor,
  deleteSetor,
} from "../controller/setores.js";
import { getDadosRelatorio } from "../controller/relatorio.js";

const router = express.Router();

router.get("/get-empresas", getDadosEmpresas);
router.get("/get-setores", getDadosSetores);
router.get("/get-relatorio", getDadosRelatorio);

router.post("/addEmpresa/", addEmpresa);
router.post("/addSetor/", addSetor);

router.put("/updateEmpresa/:id", updateEmpresa);
router.put("/updateSetor/:id", updateSetor);

router.delete("/deleteEmpresa/:id", deleteEmpresa);
router.delete("/deleteSetor/:id", deleteSetor);

export default router;
