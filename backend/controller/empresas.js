import { db } from "../db.js";

export const getDadosEmpresas = (_, res) => {
  const sql = "SELECT * FROM empresa";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addEmpresa = (req, res) => {
  const sql =
    "INSERT INTO empresa (`razao_social`, `nome_fantasia`, `cnpj`) VALUES (?)";

  const values = [req.body.razao_social, req.body.nome_fantasia, req.body.cnpj];

  db.query(sql, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário adicionado com sucesso");
  });
};

export const updateEmpresa = (req, res) => {
  const sql =
    "UPDATE empresa SET `razao_social` = ?, `nome_fantasia` = ?, `cnpj` = ? WHERE `id` = ?";

  const values = [req.body.razao_social, req.body.nome_fantasia, req.body.cnpj];

  db.query(sql, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa atualizada com sucesso.");
  });
};

export const deleteEmpresa = (req, res) => {
  const sql = "DELETE FROM empresa WHERE `id` = ?";

  db.query(sql, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa deletada com sucesso.");
  });
};
