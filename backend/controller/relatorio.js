import { db } from "../db.js";

export const getDadosRelatorio = (_, res) => {
  const sql =
    "SELECT empresa.nome_fantasia, setor.descricao FROM empresa JOIN empresa_setor ON empresa.id = empresa_setor.empresa_id JOIN setor ON setor.id = empresa_setor.setor_id";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};