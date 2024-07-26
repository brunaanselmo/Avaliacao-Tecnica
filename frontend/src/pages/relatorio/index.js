import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export default function Setores() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/get-relatorio");
        setDados(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDados();
  }, []);

  return (
    <>
      <div className="container3">
        <h1>Relatório</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Setores</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome_fantasia}</td>
              <td>{item.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
