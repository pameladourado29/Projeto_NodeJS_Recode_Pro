import img_contatos from '../../image/contact.jpg';
import './contatos.css';



const Contatos = () => {
    return (
<div>
          <div className="container">
            <header>
              <h2>Contato</h2>
              <hr />
            </header>
          </div>
        
        
          <div className="container">
          <div className="row">
            <div className="col">
              <div className="imagememail">
            <img className="img_contatos" src={img_contatos} alt="imagem_contato" />
            
            
        
              <div className="col">
            <div className="row ">
            <b class="text-light">contato@Fullstackeletro.com</b>
            </div>
            <div className="row">
            <b class="text-light">(11) 99999-9999</b>
            <div className="alert alert-danger" role="alert">

            </div>
            </div>
          </div>
          </div>
          <br /><br />
          
       
        </div>
        
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
        
    </div>
    </div> 
  </div>   
  

    )

}

export default Contatos;
