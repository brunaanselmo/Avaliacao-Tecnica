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
        const response = await axios.get(
          "http://localhost:8080/api/get-setores"
        );
        setSetores(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSetores();
  }, []);

  const [form, setForm] = useState({
    id: null,
    descricao: "",
  });

  const handleEdit = (setor) => {
    setForm({
      id: setor.id,
      descricao: setor.descricao,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id === null) {
      await axios
        .post("http://localhost:8080/api/addSetor/", form)
        .then(({ data }) => {
          setSetores((prevSetores) => [...prevSetores, data]);
        })
        .catch((error) => {
          console.error("Erro ao adicionar setor:", error);
        });
    } else {
      await axios
        .put("http://localhost:8080/api/updateSetor/" + form.id, form)
        .then(({ data }) => {
          const newArray = setores.map((setor) =>
            setor.id === form.id ? data : setor
          );
          setSetores(newArray);
        })
        .catch((error) => {
          console.error("Erro ao atualizar setor:", error);
        });
    }

    setForm({
      id: null,
      razao_social: "",
      nome_fantasia: "",
      cnpj: "",
    });
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8080/api/deleteSetor/" + id)
      .then(({ data }) => {
        const newArray = setores.filter((setor) => setor.id !== id);
        setSetores(newArray);
      });
  };

  return (
    <>
      <div className="container2">
        <h1>Setores</h1>
        <form className="forms2" onSubmit={handleSubmit}>
          <label>Descrição: </label>
          <input
            name="descricao"
            type="text"
            value={form.descricao}
            onChange={handleChange}
          />
          <input className="btn_submit2" type="submit" value="Enviar"></input>
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
              <td width="5%">
                <VscEdit cursor="pointer" onClick={() => handleEdit(setor)} />
              </td>
              <td width="5%">
                <VscTrash
                  cursor="pointer"
                  onClick={() => handleDelete(setor.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
