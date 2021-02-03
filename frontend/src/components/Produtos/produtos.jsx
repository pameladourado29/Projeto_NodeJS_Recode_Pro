import React, {useState,useEffect } from 'react';
import FormCompras from './formularioCompras.jsx';
import './produtos.css';


const ListaProdutos = () => {
    const [props, setProps] = useState([]);
    const [idprops,setIdProps] = useState(0);



    useEffect(async () => {
        const url = "http://localhost:8080/produtos";
        const res = await fetch(url);
        setProps(await res.json());
    }, [])


    let destaque = (imagem) => {
        if(imagem.target.style.width === '120px')
        imagem.target.style = 'width:240px'
        else
        imagem.target.style = 'width:120px'
    }

    function SalvarId(id) {
            setIdProps(idprops => id)
    }

    
    
    return (
        <>
        <div>
        <section className=" produtos container mt-5 mb-3 row" >
            {
                props.map(row => {
                    return (  
                        <div className="col-3  text-center pl-2">
                                <div className="card h-100 "  >
                                    <div  key={row.idproduto} style={{width:"12rem" }}>
                                            <img src={row.imagem} className="card-img-center" style={{width:"150px" }} onMouseOver={destaque}/>
                                            <div className="card-body">
                                                <h5 id={row.idproduto}className="card-title text-center text-danger h4"><strong>{row.nomeProduto}</strong></h5>
                                                <p className="card-text text-center">
                                                    <strong>{row.descricao} </strong></p>
                                                <p className="card-text text-center"><del>
                                                    {row.preco}</del></p>
                                                <p className="card-text text-center text-danger h4"><strong>
                                                {row.preco_venda} </strong></p>
                                                <a role="button" className="btn btn-danger mx-auto" onClick={ () => SalvarId(row.idproduto)}>Comprar</a>
                                            </div>
                                    </div>
                                </div>
                                
                            </div> 
                    )

                }
                ) }</section>

                 <FormCompras>
               
               {idprops}
               
               </FormCompras> 


        </div>


        </>
    )
}

export default ListaProdutos;
// export default exibir_categoria;
// export default exibir_todos;