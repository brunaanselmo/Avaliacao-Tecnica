import React, { useState, useEffect } from "react";
import axios from "axios";
import { VscEdit, VscTrash } from "react-icons/vsc";
import "./style.css";

export default function Empresas() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/get-empresas");
        setEmpresas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmpresas();
  }, []);


  return (
    <>
      <div className="container">
        <h3>Empresas</h3>
        <form className="forms">
          <label>Razão social:</label>
          <input name="razao_social" type="text" />
          <label>Nome fantasia:</label>
          <input name="nome_fantasia" type="text" />
          <label>CNPJ:</label>
          <input name="cnpj" type="text" />
          <input className="btn_submit" type="submit" value="Enviar" />
        </form>
      </div>
      <div className="divider" />

      <table>
        <thead>
          <tr>
            <th>Razão social</th>
            <th>Nome fantasia</th>
            <th>CNPJ</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa, index) => (
            <tr key={index}>
              <td>{empresa.razao_social}</td>
              <td>{empresa.nome_fantasia}</td>
              <td>{empresa.cnpj}</td>
              <td alignCenter width="5%">
                <VscEdit/>
              </td>
              <td alignCenter width="5%">
                <VscTrash/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
