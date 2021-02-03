import React from 'react';
import { useState, useEffect } from 'react';
import Compras from '../../image/compras.jpg';


export default function FormCompras({ children }) {

  const [usuario, setUsuario] = useState([]);
  const [render, setRender] = useState(false);
  const [alert, setAlert] = useState(false);


  useEffect(() => {
    async function chamaApi() {
      const url = "http://localhost/PHP/backend/indexUsuario.php";
      const res = await fetch(url);
      setUsuario(await res.json());
    }
    chamaApi()
  }, [render])



  async function registerVenda(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    const url = "http://localhost/PHP/backend/registerUsuarios.php";
    fetch(url, {
      method: "POST",
      body: formData
    }).then((res) => res.json()).then((data) => {
      setRender(!render);
      setAlert(data)

      setTimeout(() => {
        setAlert(false);
      }, 3000)
    })
    

  }



  return (
    <div className="mb-4 text-light">
    <button type="button" class="btn btn-success h4">
  Código produto <span class="badge badge-light">{children}</span>
</button>
      

      {/* <!--card Imagem nav compras --> */}
      <div className="card mb-3 container">
        <img className="Compras" className="card-img-top" src={Compras} alt="compras" style={{ width: "200px", height: "200px" }}></img>
        <div className="card-body">
          <h5 className="card-title ">Comprar</h5>
        </div>
      </div>
      {/* <!--card fim imagem nav compras --> */}
<section className="container formulario">
      <form onSubmit={registerVenda} >


        <div div className="container row mx-auto ">
          <div className=" form-group col-4 ">
            <label for="idProduto" className="text text-light h4">Código do produto:</label>
            <input className="form-control" type="number" name="idprodutos" placeholder="Digíte o código do produto" id="cdigo" />
          </div>
          <div className=" form-group col-4 ">
            <label for="nome" className="text text-light h4">Nome:</label>
            <input className="form-control" type="text" name="nome" placeholder="Nome" id="nome_cliente" />
          </div>
          <div className=" form-group col-4">
            <label for="sobrenome" className="text text-light h4">Sobrenome:</label>
            <input className="form-control" type="text" name="sobrenome" placeholder="Sobrenome" id="sobrenome" />
          </div>
        </div>
        <div className="container row mx-auto">
          <div className=" form-group col-12 ">
            <label for="email" className="text text-light h4">Email:</label>
            <input className="form-control" type="text" name="email" placeholder="Digíte seu email" id="email" />
          </div>
        </div>
        <div className="container row mx-auto">
          <div className=" form-group col-4 ">
            <label for="telefone" className="text text-light h4">Telefone:</label>
            <input className="form-control" type="number" name="telefone" placeholder="Digíte seu telefone" id="telefone" />
          </div>
          <div className=" form-group col-4 ">
            <label for="cpf" className="text text-light h4">CPF:</label>
            <input className="form-control" type="number" name="cpf" placeholder="Digíte seu CPF" id="cpf" />
          </div>
          <div className=" form-group col-4">
            <label for="cep" className="text text-light h4">CEP:</label>
            <input className="form-control" type="number" name="cep" placeholder="Digíte seu CEP" id="cep" />
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <input type="reset" className="btn btn-lg btn-outline-light ml-3 mb-2" value="Apagar " />
          <button  className="btn btn-lg btn-outline-light mx-3 mb-2" >Enviar</button>
        </div>
      </form>

    </section>
    </div>



  )
}