import { db } from "../db.js";

export const getDadosSetores = (_, res) => {
  const sql = "SELECT * FROM setor";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addSetor = (req, res) => {
  const sql = "INSERT INTO setor (`descricao`) VALUES (?)";

  const values = [req.body.descricao];

  db.query(sql, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Setor adicionado com sucesso");
  });
};

export const updateSetor = (req, res) => {
  const sql = "UPDATE setor SET `descricao` = ? WHERE `id` = ?";

  const values = [req.body.descricao];

  db.query(sql, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Setor atualizado com sucesso.");
  });
};

export const deleteSetor = (req, res) => {
  const sql = "DELETE FROM setor WHERE `id` = ?";

  db.query(sql, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Setor deletado com sucesso.");
  });
};
