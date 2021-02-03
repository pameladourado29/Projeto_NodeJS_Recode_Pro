// import React from 'react';

import Compras from '../../image/compras.jpg';
import formasdepagamento from '../../image/formasdepagamento.jpeg';



const  FormCompras = () => {

    const [compras,setCompras] = useState([]);
    const [render, setRender] = useState(false);
    const [email , setEmail] = useState(false);
    
    useEffect(async () => {
        const url = "http://localhost/PHP/backend/indexCompras.php";
        const response = await fetch(url);
        setCompras(await response.json());
    },[render])




    const [nome,setNome] = useState([]);
    const [render, setRender] = useState(false);
    const [email , setEmail] = useState(false);
    


    useEffect(async () => {
        const url = "http://localhost/PHP/backend/indexcompras.php";
        const response = await fetch(url);
        setCompras(await response.json());
    },[render]) 






    function registerCompras(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        const url = "http://localhost/PHP/backend/compras.php";
        fetch (url,{
            method:"POST",body:formData
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setEmail(dados);
            setTimeout(()=>{
                setEmail(false); 
            },2000);
      });
      }

    return (
 <div>
  {/* <!--card Imagem nav compras --> */}
  <div className="card mb-3 container">
    <img className="Compras" className="card-img-top" src={Compras} alt="compras" style={{width:"200px", height:"200px"}}></img>
    <div className="card-body">
      <h5 className="card-title text-danger">Minhas compras</h5>
    </div>
  </div>
  {/* <!--card fim imagem nav compras --> */}
  
  
  <div className="container text-info">

  {/* INICIO FORMULARIO */}
  <form onSubmit = {registerCompras}>
  
  <p>Escolha quantas unidades do produto</p>
    <div className="form-row align-items-center">
      <div className="col-auto my-1">
        <label className="mr-sm-2 sr-only" for="qtd_produtos_cliente"></label>
        <select className="custom-select mr-sm-2" name="qtd_produtos_cliente" id="qtd_produtos_cliente">
          <option selected>Escolher...</option>
          <option value="1">Um</option>
          <option value="2">Dois</option>
          <option value="3">Três</option>
        </select>
      </div>
  
      <span hidden id="id_produto_cliente">
      Código de meu produto
    </span>
  
      <div className="col-auto my-1">
        <div className="custom-control custom-checkbox mr-sm-2">
          <input type="checkbox" class="custom-control-input" name="qtd_produtos_cliente" id="qtd_produtos_cliente" />
        </div>
      </div>
    </div>
  
    <div className="row">
      <div className="col">
      <label for="nome_cliente">Nome</label>
        <input type="text" id="nome_cliente" name="nome_cliente" class="form-control" placeholder="Nome" />
      </div>
      <div className="col mb-4">
      <label for="inputEmail4">Sobrenome</label>
        <input type="text"   name="sobrenome_cliente" id="sobrenome_cliente" class="form-control" placeholder="Sobrenome" />
      </div>
    </div>
    <p>Genero</p>
    <div className="form-check form-check-inline mb-4">
    <input className="form-check-input" type="radio" name="genero"  id="masculino" value="masculino" />
    <label className="form-check-label" for="masculino">Masculino</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="genero" id="feminino" value="feminino" />
    <label classNames="form-check-label" for="feminino">Feminino</label>
  </div>
  <div class="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="genero"  id="outro" value="outro" />
    <label className="form-check-label" for="outro">Outro</label>
  </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control"   name="email_cliente" id="email_cliente" placeholder="Email" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputEmail4">Telefone</label>
        <input type="text" class="form-control" name="tel_cliente"   id="tel_cliente" placeholder="Telefone" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputEmail4">CPF</label>
        <input type="text" class="form-control"   name="cpf_cliente" id="cpf_cliente" placeholder="somente numeros" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputEmail4">Data de Nascimento</label>
        <input type="date" class="form-control"  name="datanasc_cliente"   id="datanasc_cliente" />
      </div>
    </div>
    <div className="form-group">
      <label for="inputAddress">Endereço</label>
      <input type="text" className="form-control" name="endereco_cliente"   id="endereco_cliente" placeholder="Rua dos Bobos, nº 0" />
    </div>
    <div className="form-group">
      <label for="inputAddress2">Complemento</label>
      <input type="text" class="form-control" name="complemento_cliente" id="complemento_cliente" placeholder="Apartamento, hotel, casa, etc." />
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputCity">Cidade</label>
        <input type="text" class="form-control" name="cidade_cliente" id="cidade_cliente" placeholder="Cidade" />
      </div>
    </div>
      <div className="form-group col-md-4">
        <label for="estado_cliente">Estado</label>
        <select  name="estado_cliente" id="estado_cliente" class="form-control">
          <option selected>Escolher...</option>
          <option>São Paulo (SP)</option>
          <option>Rio de Janeiro (RJ)</option>
          <option>Santa Catarina (SC)</option>
          <option>Acre (AC)</option>
          <option>Alagoas (AL)</option>
          <option>Amapá (AP)</option>
          <option>Amazonas (AM)</option>
          <option>Bahia (BA)</option>
          <option>Ceará (CE)</option>
          <option>Distrito Federal (DF)</option>
          <option>Espírito Santo (ES)</option>
          <option>Goiás (GO)</option>
          <option>Maranhão (MA)</option>
          <option>Mato Grosso (MT)</option>
          <option>Mato Grosso do Sul (MS)</option>
          <option>Minas Gerais (MG)</option>
          <option>Pará (PA)</option>
          <option>Paraíba (PB)</option>
          <option>Paraná (PR)</option>
          <option>Pernambuco (PE)</option>
          <option>Piauí (PI)</option>
          <option>Rio Grande do Norte (RN)</option>
          <option>Rio Grande do Sul (RS)</option>
          <option>Rondônia (RO)</option>
          <option>Roraima (RR)</option>
          <option>Sergipe (SE)</option>
          <option>Tocantins (TO)</option>
          <option>Outro</option>
        </select>
      </div>
      <div className="form-group col-md-2">
        <label for="cep_cliente">CEP</label>
        <input type="text" class="form-control mb-2" name="cep_cliente" id="cep_cliente" placeholder="CEP" />
      </div>
   {/* <!-- iframe api via cep --> */}
   {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>dica para facilitar</strong> pesquise seu cep , e pegue seu endereço!
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
   <iframe src="iframe_cep_.php"></iframe> */}
    {/* <!-- fim iframe api via cep --> */}
  
    <div className="form-check form-check-inline mb-4">
    <input className="form-check-input" type="radio" name="forma_pgmt" id="cartao_cred_cliente" value="cartao_de_credito" />
    <label className="form-check-label" for="inlineRadio1">Cartão de crédito</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="forma_pgmt_cliente" id="boleto_cliente" value="boleto" disabled />
    <label className="form-check-label" for="inlineRadio3">Boleto bancário</label>
  </div>
  
    <div className="form">
    <div className="form-group col-md-4">
        <label for="bandeira_cliente">Bandeira</label>
        <img className="formasdepagamento" src={formasdepagamento} alt="formasdepagamento" style={{width:"300px"}} ></img>
        <select name="bandeira_cliente" id="bandeira_cliente" className="form-control">
          <option selected>Escolher...</option>
          <option>Visa</option>
          <option>Mastercard</option>
          <option>Hipercard</option>
          <option>Elo</option>
          <option>American Express</option>
          </select>
      </div>
      <div className="col">Número do cartão
        <input type="number"   name="num_cartao_cliente" id="num_cartao_cliente" class="form-control" placeholder="Numero **** **** **** 0000" />
      </div>
      <div className="col">Nome do titular
        <input type="text"  name="nome_tit_cliente" id="nome_tit_cliente" class="form-control" placeholder="exatamente como esta no cartão" />
      </div>
      <div className="col">Código CVV
        <input type="password"  name="codigo_cvv_cliente"  id="codigo_cvv_cliente" class="form-control" placeholder="Código CVV de 3 dígitos" />
      </div>
    </div>
    <div className="form-group mt-4">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" for="gridCheck">
          Confirmar Compra
        </label>
      </div>
      <button className="btn btn-success" value="enviar">Comprar Produto</button>
      
  </div>
  </form>
  </div>
  
  
  
  <br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br />
  

  </div>
  )
  }

  export default FormCompras;