import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Clients = () => {
  const [client, setclient] = useState({
    cnpj: "",
    nome_fantasia: "",
    razao_social: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/clients/${id}`);
    setclient(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <ul className="list-group w-50">
        <li className="list-group-item">Nome: {client.cnpj}</li>
        <li className="list-group-item">Sobrenome: {client.nome_fantasia}</li>
        <li className="list-group-item">email: {client.razao_social}</li>
        <li className="list-group-item">Telefone: {client.cep}</li>
        <li className="list-group-item">Senha: {client.endereco}</li>
        <li className="list-group-item">Nome: {client.numero}</li>
        <li className="list-group-item">Sobrenome: {client.complemento}</li>
        <li className="list-group-item">email: {client.bairro}</li>
        <li className="list-group-item">Telefone: {client.cidade}</li>
        <li className="list-group-item">Senha: {client.uf}</li>
      </ul>
    </div>
  );
};

export default Clients;
