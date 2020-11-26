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

Funcionalidade extra:
* Botão de checkout da API da Paypal

## Comentários sobre o código:
Cada página do site foi desenvolvida em um arquivo html diferente com seu próprio arquivo de css, também foi desenvolvido um arquivo javascript para cada página utilizando vue.js para desenvolver as funcionalidades de cada página. Cada página do site foi organizado em uma pasta diferente do projeto, dentro das pastas consta os arquivos html, css e javascript referente a ela.


## Plano de teste:
Nenhum teste automatizado foi performado. Porém foram utilizados teste de usabilidade com usuários (amigos e familiares), para melhoria do padrão de UI/UX. As correções de bugs foram feitas de acordo com o aparecimento dos mesmos nos momentos de teste.

## Resultados dos testes:
Os resultados dos testes foram bons. O programa está responsivo e cumpre com os requisitos funcionais, porém algumas funcionalidades poderão ser aperfeiçoadas quando houver um banco de dados relacionado, deixando de ficar estático.

## Procedimentos de construção:
Para rodar o site, é necessário fazer o download de nossa pasta no github, extraí-la e abrir a página home.html

## Problemas:
Um dos problemas foi o aumento do valor da compra no carrinho a partir do aumento da quantidade de um item específico.
Não foi possível redirecionar para a página de perfil do usuário a partir da página principal após fazer o login. A página principal só irá redirecionar para a página de login mesmo que ele já tenha sido efetuado.

## Commentários:
Nenhum comentário a ser feito.




