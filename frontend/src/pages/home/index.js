import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Avaliação técnica</h1>
          <h3>Bruna Anselmo</h3>
          <Link to="/empresas">
            <button>Cadastrar empresa</button>
          </Link>
          <Link to="/setores">
            <button>Cadastrar setor</button>
          </Link>
          <Link to="/relatorio">
            <button>Relatório - Empresas e Setores</button>
          </Link>
        </div>
      </div>
    </>
  );
}
