import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListagemClientes = () => {
  const [clients, setClient] = useState([]);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const result = await axios.get("http://localhost:3003/clients");
    setClient(result.data.reverse());
  };

  const deleteclient = async id => {
    await axios.delete(`http://localhost:3003/clients/${id}`);
    loadClients();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Listagem de clientes</h1>
        <table class="table table-hover">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Nome fantasia</th>
              <th scope="col">Razão social</th>
              <th scope="col">CEP</th>
              <th scope="col">Endereço</th>
              <th scope="col">Numero</th>
              <th scope="col">Complemento</th>
              <th scope="col">Bairro</th>
              <th scope="col">Cidade</th>
              <th scope="col">UF</th>
              <th>Ações</th>
            </tr>
          </thead>
        
          <tbody > 
            {clients.map((client, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{client.cnpj}</td>
                <td>{client.nome_fantasia}</td>
                <td>{client.razao_social}</td>
                <td>{client.cep}</td>
                <td>{client.endereco}</td>
                <td>{client.numero}</td>
                <td>{client.complemento}</td>
                <td>{client.bairro}</td>
                <td>{client.cidade}</td>
                <td>{client.uf}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/clients/${client.id}`}>
                    Visualizar
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/clients/edit/${client.id}`}
                  >
                    Editar
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteclient(client.id)}
                  >
                    Deletar
                  </Link>
                </td>
              </tr>
            ))}
         </tbody>
       
        </table>
       
      </div>
    </div>
  );
};

export default ListagemClientes;
