create database fseletro 

-- CHAMANDO O DB PARA USAR
   use fseletro  

   create table produtos(  -- TABELA PRODUTOS CRIADA
   idproduto int auto_increment primary key,
   categoria varchar(100),
   imagem varchar(100),
   descricao varchar(500),
   preco float,
   preco_venda float
   );
   
    
    insert into produtos (categoria,imagem,descricao,preco,preco_venda) -- INSERINDO OS ELEMENTOS DE MINHA TABELA
    /* categoria geladerira*/
    values ("geladeira" ,"Image/geladeira4.jpeg","Geladeira Frost Free Brastemp Side Inverse 540 litros",6839.00, 5019.00),
   	("geladeira" ,"Image/geladeira3.jpeg","Geladeira Frost Free Brastemp branca 375 litros",2068.60, 1910.90),
    ("geladeira" ,"Image/geladeira2.png","Geladeira Frost Free Brastemp Consul prata 340 litros",2169.00, 2069.00),
    /* categoria fogao*/
    ("fogao" ,"Image/fogao2.jpeg","Fogão 4 Bocas Consul Inox com Mesa de Vidro",1200.00, 1129.00),
    ("fogao" ,"Image/fogao1.jpeg","Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático",600.00, 519.70),
    /* categoria microondas*/
    ("mircoondas" ,"Image/microondas3.jpeg","Micro-ondas Consul 32 litros inox 220V",580.00, 409.88),
    ("microondas" ,"Image/microondas2.jpeg","Micro-ondas 25L espelhado Philco 220V",508.70, 463.53),
    ("microondas" ,"Image/microondas1.jpeg","Forno de Micro-ondas Eletrolux 20L branco",459.00, 436.05),
    /*categoria lava-louça*/
    ("lavalouca" ,"Image/filtro.jpeg","Lava-louça Eletrolux Inox com 10 serviços,06 programas de lavagem,e painel Blue Touch",3500.00, 2799.00),
    /*categoria lavadoura*/
    ("lavadoura" ,"Image/lavadora3.jpeg","Lavadoura de roupas Philco Inverter 12kg",2399.00, 2179.90),
    ("lavadoura" ,"Image/maquinadelavar2.jpeg","Lavadoura de roupas Brastemp 11kg com turbo performance Branca",1699.00, 1214.10),
    ("lavadoura" ,"Image/maquinadelavar1.jpeg","Lavadoura de roupas Philco Inverter 12kg",2399.00, 2179.90);
    

    create table `comentarios`(
id int auto_increment,
nome varchar(100),
msg varchar(300),
data datetime default now(),
primary key (id)
);


create table clientes (
    idUsuarios int PRIMARY KEY AUTO_INCREMENT,
    idprodutos INT NOT NULL,
    nome VARCHAR(25)NOT NULL,
    sobrenome VARCHAR(25) NOT NULL,
    cpf VARCHAR(25) NOT NULL,
    cep BIGINT(50) NOT NULL,
    telefone BIGINT(50),
    email VARCHAR(50) NOT NULL,
    FOREIGN KEY (idProdutos) REFERENCES produtos(idproduto)

);

ALTER TABLE clientes
	ADD COLUMN cep BIGINT(50) AFTER cpf;  

    ALTER TABLE clientes
	MODIFY COLUMN cep BIGINT(50) NOT NULL; 




INSERT INTO clientes(idprodutos,nome,sobrenome,cpf,telefone,email)
 VALUES (10,"Felipe","Suricata","123456789",1190267248,"felipesuricatas@gmail.com");

 INSERT INTO clientes(idprodutos,nome,sobrenome,cpf,telefone,email)
 VALUES (3,"Sabrina","Simon","87892499002",11964502894,"sabrinasimon@hotmail.com");

 INSERT INTO clientes(idprodutos,nome,sobrenome,cpf,telefone,email)
 VALUES (10,"Gabriel","Lessa","123456789",1190267248,"gabriel_lessa@outlook.com");

INSERT INTO clientes(idprodutos,nome,sobrenome,cpf,telefone,email)
 VALUES (12,"Ghost9--","xxx","640392281",9648267438,"ghost_losgrandes@gmail.com");

INSERT INTO clientes(idprodutos,nome,sobrenome,cpf,telefone,email)
 VALUES (5,"Alessandra","Maze","90473292",957249244,"alemaze@gmail.com");



 SELECT * FROM clientes;

 
 SELECT p.categoria AS Categoria, p.imagem AS imagem, p.preco_venda as Total, u.nome as Nome, u.sobrenome as Sobrenome ,  u.email as Email
 FROM produtos AS p
 JOIN clientes AS u
 ON p.idproduto = u.idprodutos;

SELECT p.categoria , p.imagem ,
         p.preco_venda , u.nome ,
          u.sobrenome ,  u.email 
        FROM produtos AS p
        JOIN clientes AS u
        ON p.idproduto = u.idprodutos;
