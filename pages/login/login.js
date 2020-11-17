var app = new Vue({
    el: '#app',
    data: {
        nome: null,
        sobrenome: null,
        email: null,
        senha: null,
        confirmar_senha:null,
    },
    methods:{
        checagem_login: function(e){
            if (this.email && this.senha) {
                // enviar para o banco de dados //
                alert("Login feito com sucesso");
                window.open("../user/user_data.html", "_self");
            } else {
                alert("Por favor, preencher todos os campos");
            }
            e.preventDefault();
        },

        checagem_cadastro: function(e){
            if(this.nome && this.sobrenome && this.email && this.senha && this.confirmar_senha){
                if(this.senha == this.confirmar_senha){
                    // enviar para o banco de dados //
                alert("Conta criado com sucesso");
                window.open("../user/user_data.html", "_self");
                }else{
                    alert("As duas senhas devem ser iguais");
                }
            }else {
                alert("Por favor, preencher todos os campos");
            }
            e.preventDefault();
        }
    }

});