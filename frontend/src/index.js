// import React, {Component} from 'react';
import './global.css';
 import React from 'react';
 import ReactDOM from 'react-dom';
// globalsecoes
import Menu from './components/globalSecoes/menu.jsx';
import Footer from './components/globalSecoes/footer.jsx';
// home
 import Home from './components/index/Home.jsx';
// Lojas
import Lojas from './components/Lojas_/lojas.jsx';
//produtos
import Categorias from './components/Produtos/categorias.jsx';
import ListaProdutos from './components/Produtos/produtos.jsx';
// import FormCompras from './components/Produtos/formularioCompras.jsx';
//contatos
import Contatos from './components/contatos/contato.jsx';
import FormularioContatos from './components/contatos/formulario.jsx';

// compras
// import FormCompras from './components/Compras/compras.jsx';
import  Pedidos from './components/Compras/pedidos.jsx'



// links router diretórios
 import {BrowserRouter as Router, Route} from 'react-router-dom';
 


ReactDOM.render(
        <Router>
<React.StrictMode>

{/* menu global secoes */}
        <Route exact path="/">
        <Menu />
        <Home />
        {/* <Footer/> */}
        </Route>
{/* fim menu global secoes */}


{/* index route */}
        <Route exact path="/index.php">
        <Menu />
        <Home />
        </Route>
 {/*fim index route */}


 {/* lojas route */}
        <Route exact path="/loja.php">
        <Menu />
        <Lojas />

        </Route>
 {/* fim lojas route */}

 {/* produtos route */}
        <Route exact path="/produtos.php">
        <Menu />
        <div className=" container d-flex">
        <div className="suricatas">
        <Categorias />
        </div>
        <div className="suricatas2">
        <ListaProdutos />
        </div>
        </div>
        </Route>
 {/* fim produtos route */}

 {/* contatos route */}
        <Route exact path="/contato.php">
        <Menu />
        <Contatos />
        <FormularioContatos />
        </Route>
 {/* fim contatos route */}

 {/* compras route */}
       <Route exact path="/compras.php">
       <Menu />
 {/* <FormCompras /> */}
       <Footer />
       </Route>
{/* 
 fim compras route */}

       <Route exact path="/pedidos.php">
       <Menu />
       <Pedidos />     
       </Route>
       <Footer />
   
</React.StrictMode>
            </Router>,
            document.getElementById('root')
        
       );






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
