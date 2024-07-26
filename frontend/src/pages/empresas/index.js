import React, { useState, useEffect } from "react";
import axios from "axios";
import { VscEdit, VscTrash } from "react-icons/vsc";
import "./style.css";

export default function Empresas() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/get-empresas"
        );
        setEmpresas(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmpresas();
  }, []);

  const [form, setForm] = useState({
    id: null,
    razao_social: "",
    nome_fantasia: "",
    cnpj: "",
  });

  const handleEdit = (empresa) => {
    setForm({
      id: empresa.id,
      razao_social: empresa.razao_social,
      nome_fantasia: empresa.nome_fantasia,
      cnpj: empresa.cnpj,
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
        .post("http://localhost:8080/api/addEmpresa/", form)
        .then(({ data }) => {
          setEmpresas((prevEmpresas) => [...prevEmpresas, data]);
        })
        .catch((error) => {
          console.error("Erro ao adicionar empresa:", error);
        });
    } else {
      await axios
        .put("http://localhost:8080/api/updateEmpresa/" + form.id, form)
        .then(({ data }) => {
          const newArray = empresas.map((empresa) =>
            empresa.id === form.id ? data : empresa
          );
          setEmpresas(newArray);
        })
        .catch((error) => {
          console.error("Erro ao atualizar empresa:", error);
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
      .delete("http://localhost:8080/api/deleteEmpresa/" + id)
      .then(({ data }) => {
        const newArray = empresas.filter((empresa) => empresa.id !== id);
        setEmpresas(newArray);
      });
  };

  return (
    <>
      <div className="container">
        <h3>Empresas</h3>
        <form className="forms" onSubmit={handleSubmit}>
          <label>Razão social:</label>
          <input
            name="razao_social"
            type="text"
            value={form.razao_social}
            onChange={handleChange}
          />
          <label>Nome fantasia:</label>
          <input
            name="nome_fantasia"
            type="text"
            value={form.nome_fantasia}
            onChange={handleChange}
          />
          <label>CNPJ:</label>
          <input
            name="cnpj"
            type="text"
            value={form.cnpj}
            onChange={handleChange}
          />
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
              <td width="5%">
                <VscEdit cursor="pointer" onClick={() => handleEdit(empresa)} />
              </td>
              <td width="5%">
                <VscTrash
                  cursor="pointer"
                  onClick={() => handleDelete(empresa.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
