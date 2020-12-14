//banco de dados vai implementar essa parte

var app = new Vue({
    el: '#app',
    data: {
        nome: null,
        sobrenome: null,
        email: null,
        endereco: null,
        senha: null,
        confirmar_senha: null,
        email_login: null,
        senha_login: null,
    },
    methods: {
        checagem_login: function() {
            if (this.email_login == 'admin' && this.senha_login == 'admin') {
                // enviar para o banco de dados //
                alert("Login feito como admin");
                window.open("../admin/admin_dados.html", "_self");
                return true;
            } else {
                return false;
            }
        },

        checagem_cadastro() {
            if (this.nome && this.sobrenome && this.email && this.email && this.senha && this.confirmar_senha) {
                if (this.senha == this.confirmar_senha) {
                    return true;
                } else {
                    alert("As duas senhas devem ser iguais");
                    return false;
                }
            } else {
                alert("Por favor, preencher todos os campos");
                return false;
            }
        },

        create() {
            const url = 'http://localhost:3002/User/add';
            if (this.checagem_cadastro()) {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.email,
                        password: this.senha,
                        address: this.endereco,
                        card_number: 1234123412341234,
                        cvv: 123,
                        card_date: "2025-10-12T03:00:00.000Z"

                    })
                }

                fetch(url, options).then(res => {
                    console.log(res);
                    return res.json();
                }).then(res => {
                    if (res == 'User added!') {
                        window.alert('Cadastro feito com Sucesso!');
                        return true;
                    } else {
                        return false;
                    }
                }).then(res => {
                    if (!res) {
                        window.alert("Erro inesperado, por favor repita a operação novamente mais tarde");
                    }
                }).catch(err => {
                    console.log(err);
                })

                window.alert('Item adicionado com sucesso');
                //window.location.reload();
            }
        },

        entrar() {

            if (this.checagem_login()) {
                return true;
            } else {
                const url = 'http://localhost:3002/User/';
                const option_get = {
                    method: 'GET',
                }

                const username = this.email_login;
                const password = this.senha_login;
                fetch(url, option_get).then(res => {
                    return res.json();
                }).then(res => {
                    res.forEach(function(item) {
                        if (username == item.username && password == item.password) {
                            window.alert("Login efetuado");
                            window.open("../categories/category_everyglass1.html", "_self");
                            return true;
                        }
                    });
                    if (res) {
                        window.alert("Usuário não cadastrado");
                    }
                }).catch(err => {
                    console.log(err);
                })
            }


        }
    }

});


function w3_open() {
    //  document.getElementById("main").style.marginLeft = "25%";
    //document.getElementById("mySidebar").style.width = "right:0";
    //document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    // document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
    console.log('close');

    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}