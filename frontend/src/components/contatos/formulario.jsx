import React, {useState,useEffect } from 'react';

 const FormularioContatos = () => {

const [comentarios,setComentarios] = useState([]);
const [render, setRender] = useState(false);
const [msg , setMsg] = useState(false);
const [nome, setNome] = useState('')
const [mensagem, setMensagem] = useState('')

useEffect (() => {
    async function fetchData() {
    const url = "http://localhost:8080/msg";
    const response = await fetch(url);
    setComentarios(await response.json());
}
fetchData();
 },[render])




function registerComentarios(event) {
    event.preventDefault();
    const url = "http://localhost:8080/msg";
    let form = {
        nome: nome,
        msg: mensagem,
    }

    fetch (url,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form)
    }).then((response) => response.json()).then((dados) => {
        setRender(!render);
        setMsg(dados);
        setTimeout(() => {
            setMsg(false); 
        },2000);
});
}
    return (

<div className="container">

<form onSubmit = {registerComentarios} >
<h3 class="text-light">Dúvidas,Elogios ou Sugestões:</h3><br />
<div className="form-group">
  Nome :<br />
  <input type="text" name="nome" value={nome} onChange={event => setNome(event.target.value)} class="form-control" aria-describedby="nome" placeholder="Digite seu nome" />
  <small id="nome"className="form-text text-muted">Identificação não obrigatória.</small><br />
  Deixe sua mensagem :
  <textarea type="text" className="form-control" name="msg" value={mensagem} onChange={event => setMensagem(event.target.value)} placeholder="Dúvidas,Elogios ou Sugestões" ></textarea><br />
  <input type="checkbox" className="form-check-input" id="exampleCheck1"  />
  <label className="form-check-label" for="exampleCheck1">Autorizo a publicação de meu comentário no site da Full Stack Eletro LTDA.</label><br /><br />
  <button  className="btn btn-dark"  value="Enviar" >Enviar</button>
</div>
</form>

{/* //aquiii */}

{ msg && <div class="alert alert-success mx-auto mt-4 w-75" role="alert">
Cadastro efetuado com sucesso!
</div>
}

{comentarios.map((element)=> {
    return (
        <div key={element.id} className="card w-50 mx-auto mt-3 mb-5">
        <div className="card-header">
           Nome: {element.nome}
        </div>
        <div className="cardy-body ">
            Mensagem: {element.msg}
        </div>
    </div>
    )
}).reverse()

}


</div>
)
}

 export default FormularioContatos;
