# Projeto da Disciplina SCC0219
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://raw.githubusercontent.com/Brunohelou/scc-0219-devweb-glassesStore/master/pages/images/logo_size.jpg">
    <img src="https://raw.githubusercontent.com/Brunohelou/scc-0219-devweb-glassesStore/master/pages/images/logo_size.jpg" alt="Logo" width="300" height="300">
  </a>

  <h3 align="center">Loja de Óculos 017</h3>

  <p align="center">
    Disciplina SCC0219 - Desenvolvimento Web
  </p>
</p>

Alunos: <br>
[Bruno Helou](https://github.com/Brunohelou) <br>
[Marilene Andrade Garcia](https://github.com/MarileneGarcia) <br>
[Rafael Farias Pinho](https://github.com/rafaelfpinho)

Obs. <br>
[Acesse o Mockup](https://www.figma.com/file/90M9GNbrUwnLGpIPAdX5Nn/Glasses-Store?node-id=0%3A1)





<!-- TABLE OF CONTENTS -->
## Informações sobre o projeto

* [Descrição do projeto](descricao_projeto.pdf)
* [Mockup das telas](https://www.figma.com/file/90M9GNbrUwnLGpIPAdX5Nn/Glasses-Store?node-id=0%3A1)<br>
  *[Imagem de uma versão da Tela Principal](https://raw.githubusercontent.com/Brunohelou/scc-0219-devweb-glassesStore/master/mockup_telas/Imagens_telas/Tela%20Principal%20(versao%202).png)
* [Diagrama do Projeto](https://miro.com/app/board/o9J_kiP_Um8=/)
* Requisitos
* Descrição do Projeto
* Comentários sobre o código
* Plano de teste
* Resultados dos testes
* Procedimentos de construção
* Problemas
* Commentários



<!-- ABOUT THE PROJECT -->
## Mockup das Telas

Disponível no [Figma](https://www.figma.com/file/90M9GNbrUwnLGpIPAdX5Nn/Glasses-Store?node-id=0%3A1)

Mas também em [pdf](mockup_telas/Loja_Oculos017.pdf)


## Diagrama do Projeto

Disponível no [Miro](https://miro.com/welcomeonboard/xw6MOhSIZFKC840hfqLhsjpporNo4MoD8CBYwSJWc3FkZGGucrW8RAW1t1NuX386)

### Exemplo tela
![Tela Principal](https://raw.githubusercontent.com/Brunohelou/scc-0219-devweb-glassesStore/master/mockup_telas/Imagens_telas/Tela%20Principal%20(versao%202).png)


## Requisitos:
* Checkout da Paypal
* Adicionar quantidade de produtos do produto no carrinho
* Cadastrar usuário
* Logar usuário/admin
* Galeria para cada categoria de óculos
* Lista de desejos (Favoritos)

## Descrição do Projeto:
O projeto consiste de um site de uma loja de óculos, que possui as seguintes funcionalidades:
* Escolher se deseja ver os modelos de óculos de sol, de grau ou everglasses.
* Escolher, dentro de um desses modelos, se deseja visualizar os essenciais, os mais vendidos ou os premiun.
* Adicionar o óculos escolhido a lista de favoritos, ou ao carrinho ou clicar na imagem do óculos para ver mais informações sobre ele.
* Passar os óculos favoritos para o carrinho e efetuar a compra.
* Há funcionalidades para o login dos usuários cadastrados ou para cadastrar novos usuários.

Além dos seguintes requisitos:
* O sistema deve conseguir adicionar e excluir óculos no carrinho.
* O sistema deve conseguir adicionar e excluir óculos nos favoritos.
* O sistema deve conseguir efetuar as compras do carrinho.
* O sistema deve possuir uma galeria de óculos na página principal.
* O sistema deve mostrar os óculos de acordo com as categorias selecionadas.
* O sistema deve conseguir adicionar, remover ou editar produtos.
* O sistema deve conseguir autentificar os logins.
* O sistema deve conseguir realizarr o cadastro de usuários.

Funcionalidade extra:
* Botão de checkout da API da Paypal

## Comentários sobre o código:
Todas as páginas do projeto estão dentro da pasta pages, dentro desta, as páginas são dividias em novas pastas de acordo com sua funcionalidade. Em cada pasta consta seu arquivo html, css e javascript. O arquivo que executo o servidor está dentro da pasta bin, os arquivos glass.model.js e user.model.js determinam os dados que devem estar presentes no banco de dados dos produtos e dos usuários respectivamente e os arquivos glass.route.js e user.route.js determinam as requisições dos produto e usuários.


## Plano de teste:
Nenhum teste automatizado foi performado. Porém foram utilizados teste de usabilidade com usuários (amigos e familiares), para melhoria do padrão de UI/UX. As correções de bugs foram feitas de acordo com o aparecimento dos mesmos nos momentos de teste. Foram feitos os seguintes testes das funcionalidades:
* Teste de login de usuário.
* Teste de cadastro de usuário.
* Teste de cadastro com senha menor que 8 digitos.
* Teste de cadstro de usuário já existente.
* Teste de adicionar/deletar novos itens como admin.

## Resultados dos testes:
Os resultados dos testes foram bons. O programa está responsivo e cumpre com os requisitos funcionais, além de se comunicar corretamente com o banco de dados remoto do atlas permitindo que seja acessado os items a venda e usuários cadastrados de qualquer máquina.

## Procedimentos rodar o projeto:
Para rodar o projeto, é necessário baixar o projeto do github extraí-lo e utilizar o seguinte comando dentro do diretório *site* para incializar o servidor:
* node ./bin/www

Após efetuado o comando o servior estará rodando na porta 3002. Para acessar a página incial do site é necessário entrar na url: http://localhost:3002/principal/principal.html

## Problemas:
Um dos problemas foi o aumento do valor da compra no carrinho a partir do aumento da quantidade de um item específico.
Não foi possível redirecionar para a página de perfil do usuário a partir da página principal após fazer o login. A página principal só irá redirecionar para a página de login mesmo que ele já tenha sido efetuado.
Após efetuar o login, ao tentar acessar a página de dados do usuário, não é possível ver os dados do usuário que fez o login.

## Comentários:
Para fazer acesso como administrador é necessário efetuar o login com o usuário admin e senha admin, não é possível fazer cadastro como administrador.




