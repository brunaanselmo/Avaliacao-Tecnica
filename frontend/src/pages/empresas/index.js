import React from "react";
import "./style.css";
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";

export default function Empresas() {
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
          <input class="btn_submit" type="submit" value="Enviar"></input>
        </form>
      </div>
      <div className="divider" />

      <table>
        <thead>
          <tr>
            <th>Razão social</th>
            <th>Nome fantasia</th>
            <th>CNPJ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td alignCenter width="5%">
              <VscEdit />
            </td>
            <td alignCenter width="5%">
              <VscTrash />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
