import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    phone: "",
    senha: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link style={{ marginBottom: 5 }} className="btn btn-primary" to="/">
        Voltar
      </Link>
      <ul className="list-group w-50">
        <li className="list-group-item">Nome: {user.nome}</li>
        <li className="list-group-item">Sobrenome: {user.sobrenome}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">Telefone: {user.phone}</li>
        <li className="list-group-item">Senha: {user.senha}</li>
      </ul>
    </div>
  );
};

export default User;
