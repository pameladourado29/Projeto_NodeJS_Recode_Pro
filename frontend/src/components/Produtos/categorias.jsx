import React from 'react';


const Categorias = () => {
    function exibir_categoria(categorias){
      let elementos = document.getElementsByClassName('box_produto');
          console.log(elementos);
          for (var i=0;i<elementos.length;i++){
              console.log(elementos[i].id);
              if (categorias == elementos[i].id){
                  elementos[i].style = "display:inline-block";
              }else {
                      elementos[i].style = "display:none";  
              }
      }
    }

      
      let exibir_todos = () => {
          let elementos = document.getElementsByClassName('box_produto');
          
          for (var i=0;i<elementos.length;i++){
          elementos[i].style = "display:inline-block";
          }      
      }
      return (

<div>
  <header>
      <h2>Produtos</h2>
  </header>

  <section className="categorias">
<div className="row text-danger m-5"  className="categorias">
  <div>
    <div className="list-group " id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action list-group-item-danger " id="list-home-list" data-toggle="list" href="#lista-home" role="tab" aria-controls="home" onClick={exibir_todos}>Todos(12)</a>
      <a className="list-group-item list-group-item-action list-group-item-danger" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile" onClick={() => exibir_categoria('geladeira')}>Geladeiras(3)</a>
      <a className="list-group-item list-group-item-action list-group-item-danger" id="list-messages-list" data-toggle="list" href="#lista-mensagens" role="tab" aria-controls="messages" onClick={ () => exibir_categoria('fogao')}>Fogões(2)</a>
      <a className="list-group-item list-group-item-action list-group-item-danger" id="list-settings-list" data-toggle="list" href="#lista-configuracoes" role="tab" aria-controls="settings" onClick={() => exibir_categoria('microondas')}>Microondas(3)</a>
      <a className="list-group-item list-group-item-action list-group-item-danger" id="list-settings-list" data-toggle="list" href="#lista-configuracoes" role="tab" aria-controls="settings"  onClick={() => exibir_categoria('lavadoura')}>Lavadoura de roupas(2)</a>
      <a className="list-group-item list-group-item-action list-group-item-danger" id="list-settings-list" data-toggle="list" href="#lista-configuracoes" role="tab" aria-controls="settings" onClick={() => exibir_categoria('lavalouca')}>Lava louças(3)</a>
    </div>
  </div>
  
</div>
</section>
</div>



 )

}


export default Categorias;