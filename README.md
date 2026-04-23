# API - Calculo de idade baseado em nome e país

## 1. Introdução
**Padrão:** ISO/IEC/IEEE 29148:2018
**Versão Python:** 3.14.3
**Autor:** Bárbara de O. Cruz

---

### 1.1 Prospósito
Neste documento foi realizado um código com uma API do site agify.io. A funcionalidade desta API é especular a idade de uma pessoa através do primeiro nome e país dessa pessoa. 

Também tem como fazer apenas com o nome, porém, só o nome acaba ficando muito amplo, então optei por utilizar com o País também, já que a demografia pode influenciar na idade. 

### 1.2 Como Funciona 
Como dito anteriormente, a API vai especular quantos anos a pessoa tem. Há algumas formas de fazer, sendo pelo nome, nome e país e ver de várias pessoas ao mesmo tempo. Abaixo está as URLs da API e uma breve explicação de cada uma delas

**Obs**: O "count" estará nas três, já que é uma contagem de quantas pessoas a API analisou (que tinha o mesmo nome digitado no input) que tinham a mesma idade e, por cima dessa quantidade, ela fará uma média e vai imprimir o resultado.

- Para ver só do nome, a URL da API seria: https://api.agify.io?name=michael - Com apenas seu nome, ela irá especular sua idade. 

- Para ver com nome e país a URL da API  seria: https://api.agify.io?name=michael&country_id=US - Como já dito, somente o nome deixa abrangente. Com o país junto, a demografia influencia na hora de calcular a idade. 

- Para ver de város nomes a URL da API seria: https://api.agify.io?name[]=michael&name[]=matthew&name[]=jane - Neste caso vamos ter somente nomes.




