import React from 'react';
import { useState, useEffect } from 'react';


export default function Pedidos() {

  const [usuario, setUsuario] = useState([]);
  const [render, setRender] = useState(false);
 


  useEffect(() => {
    async function chamaApi() {
      const url = "http://localhost/PHP/backend/indexUsuario.php";
      const res = await fetch(url);
      setUsuario(await res.json());
    }
    chamaApi()
  }, [render])



  



  return (
    <div>

    {
            usuario.map(row => {
              return (
    
                <div classNameName="col-3 my-2 bg-danger">
    
                  <div key={row.idprodutos} classNameName="box_produto card border border-2" style={{ width: "12rem" }} id={row.categoria}>
    
                    <img className="card-img-top" src={row.imagem} alt="imagem" img-fluid />
                    <br />
                    <div className="card-body">
                      <p className="card-text">{row.categoria}</p>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{row.nome}</p>
                    </div>
                    <hr />
                    <div className="card-body">
                      <p className="card-text text-center">{row.sobrenome}</p>
                    </div>
                    <div>
                      <p className="card-text text-center"> <strong>{row.email}</strong> </p>
                    </div>
                    <div>
                      <p className="card-text text-center text-light"> <strong>{row.preco_venda}</strong> </p>
                    </div>
                  </div>
    
                </div>
              )
            })
          }
    
        </div>
  )
    
}