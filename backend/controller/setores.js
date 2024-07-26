import { db } from "../db.js";

export const getDadosSetores = (_, res) => {
    const q = "SELECT * FROM setor";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};