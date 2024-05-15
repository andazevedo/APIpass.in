# pass.in

O pass.in é uma aplicação de **gestão de participantwa em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do envento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

-[] O organizador deve poder cadatrar um novo evento;
-[] O organizador deve poder visualizar dados de um evento;
-[] O organizador deve poder visualizar a lista de participamntes;
-[] O participante deve poder se inscrever em um evento;
-[] O participante deve poder visualizar seu crachá de inscrição;
-[] O participante deve poder realizar check-in no evento;

### Regras de negócio

-[] O participante só pode se inscrever em um evento de uma única vez;
-[] O participante só pode se inscrever em eventos com vagas disponíveis;
-[] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não funcionais

-[] O check-in no evento será realizado atravéz de um QRCode;



## Amnotqações

//Métodos http: get, post, put, delete, patch, head, options....

corpo da requisição (Request Body)
Parâmetros de busca (Search Params) 'http://localhost:3333/users?name=Diego'
parametros de rota (Route Params)  -> identificação de recursos ex: ' DELETE http://localhost:3333/users/1'
cabeçalhos (Headers) -> Contexto  

semântica = significado

driver nativo / query builders / ORMs

Object relational mapping (Hibernate, Doctrine...)

JSON - Javascript Object Notation

 status codes 
 200 => sucesso
 30x=> redirecionamento
 40x => erros do client (erro em alguma informação enviada por quem está fazendo a chamada pela API)
 50x => erros do servidor (erro acontecendo INDEPENDENTE do que está sendo enviado pelo servidor)


