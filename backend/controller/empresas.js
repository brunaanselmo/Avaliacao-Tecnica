import { db } from "../db.js";

export const getDadosEmpresas = (_, res) => {
    const sql = "SELECT * FROM empresa";

    db.query(sql, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};