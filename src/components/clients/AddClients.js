import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import InputMask from "react-input-mask";

const AddClients = () => {
  let history = useHistory();
  const [client, setClient] = useState({
  
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

  const { cnpj, nome_fantasia, razao_social, cep, endereco, numero, complemento, bairro, cidade, uf } = client;
  const onInputChange = e => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/clients", client);
    history.push("/ListagemClientes");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Crie um novo cliente</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <InputMask
              type="text"
              className="form-control form-control-lg"
              placeholder="CNPJ"
              value={cnpj}
              mask="99.999.999/9999-99"
              name="cnpj"
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nome fantasia"
              name="nome_fantasia"
              value={nome_fantasia}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Razão Social"
              name="razao_social"
              value={razao_social}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <InputMask
              type="text"
              className="form-control form-control-lg"
              placeholder="CEP"
              name="cep"
              mask="999-999-99"
              value={cep}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Endereço"
              name="endereco"
              value={endereco}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Numero"
              name="numero"
              value={numero}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Complemento"
              name="complemento"
              value={complemento}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Bairro"
              name="bairro"
              value={bairro}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Cidade"
              name="cidade"
              value={cidade}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="UF"
              name="uf"
              value={uf}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Adicione um novo cliente</button>
        </form>
      </div>
    </div>
  );
};

export default AddClients;
