import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";

export default function Setores() {
  const [setores, setSetores] = useState([]);

  useEffect(() => {
    const fetchSetores = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/get-setores");
        setSetores(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSetores();
  }, []);

  return (
    <>
      <div className="container2">
        <h1>Setores</h1>
        <form className="forms2">
          <label>Descrição: </label>
          <input name="descricao" type="text" />
          <input class="btn_submit2" type="submit" value="Enviar"></input>
        </form>
      </div>
      <div className="divider2" />

      <table>
        <thead>
          <tr>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
        {setores.map((setor, index) => (
          <tr key={index}>
            <td>{setor.descricao}</td>
            <td alignCenter width="5%">
              <VscEdit />
            </td>
            <td alignCenter width="5%">
              <VscTrash  />
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
