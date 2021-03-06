import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import InputMask from "react-input-mask";


const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",  
    phone: "",
    senha: ""
  });

  const { nome, sobrenome, email, phone, senha } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Crie um novo usuário</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nome"
              name="nome"
              value={nome}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Sobrenome"
              name="sobrenome"
              value={sobrenome}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <InputMask
              type="text"
              className="form-control form-control-lg"
              placeholder="Telefone"
              name="phone"
              mask="(99)-99999-9999"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Sua senha"
              name="senha"
              value={senha}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Adicione um novo usuário</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
