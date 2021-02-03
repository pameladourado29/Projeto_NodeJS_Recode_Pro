import React from 'react';
//teste

const Lojas = () => {
    return (
    <div>
        <div className="container">
        <header>
          <h2>Lojas</h2>
          
        </header>
      </div>
    
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-danger" scope="col ">São Paulo</th>
              <th className="text-danger" scope="col ">Rio de Janeiro</th>
              <th className="text-danger" scope="col">Santa Catarina</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avenida Paulista, 985
                <p>3 &ordm; andar</p>
                <p>Jardins</p>
              </td>
              <td>Avenida Presidente Vargas, 5000
                <p>10 &ordm; andar</p>
                <p>Centro</p>
              </td>
              <td>
                <p>Rua Major Ávila, 370</p>
                <p>Vila Mariana</p>
              </td>
    
            </tr>
            <tr>
              <td>(11) 4444-9999</td>
              <td>(21) 3333-3333</td>
              <td>(47) 5555-5555</td>
             </tr>
          </tbody>
        </table>
      </div>
    </div>
   )
 
 }

 export default Lojas;
 