import formasdepagamento from '../../image/formasdepagamento.jpeg';
import formas_pagamento from '../../image/logotipo.jpeg';
import '../../global.css';


const Footer = () => {
    return (
    <footer>
        <div className="container-flouid final-flouid " src={formas_pagamento}>
          <div id="rodape">
            <p id="formas_pagamento">Formas de pagamento</p>
            <img className="formas_pag w-50" src={formasdepagamento} alt="formasdepagamento"></img>
            <p>&copy;Recode Pro</p>
            </div>
        </div>
    </footer>
   )
 
 }

 export default Footer;
 