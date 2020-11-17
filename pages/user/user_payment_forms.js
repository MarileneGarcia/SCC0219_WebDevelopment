var app = new Vue({
    el: "#app",
    data: {
        cartao: null,
        titular: null,
        cvv: null,
        data: null,
        data_inserida: "",
        data_atual: new Date().toLocaleString().split(","),
        comparar_atual: [],
        comparar_fornecida: [],
    },
    methods: {
        checagem: function(e) {

            /* Verificar se o cartao nao esta vencido */
            this.comparar_atual = [];
            this.comparar_fornecida = [];
            this.data_atual = this.data_atual[0].split("/");
            for (let i in this.data_atual) {
                this.comparar_atual.push(parseInt(this.data_atual[i]));
            }

            if (this.cartao && this.titular && this.cvv && this.data) {
                this.data_inserida = this.data.split("-");
                for (i = 0; i < 3; i++) {
                    this.comparar_fornecida.push(parseInt(this.data_inserida[i]));
                }

                if (this.comparar_atual[2] > this.comparar_fornecida[0]) { //ano invalido
                    alert("Cartão com data inválida fornecido");
                } else if (this.comparar_atual[0] > this.comparar_fornecida[1]) { //mes invalido
                    alert("Cartão com data inválida fornecido");
                } else if (this.comparar_atual[1] > this.comparar_fornecida[2]) { //dia invalido
                    alert("Cartão com data inválida fornecido");
                } else {
                    if (this.cvv.match(/.{3,}/) && this.cartao.match(/^\d{13,18}$/)) {
                        alert("Formulario Submetido");
                        window.open("user_payment.html", "_self");
                    } else {
                        alert("Por favor, verifique a quantidade de dígitos digitados no número do cartão ou no cvv");
                    }
                }
            } else {
                alert("Ocorreu um erro inesperado, por favor tente de novo")

            }
            e.preventDefault();
        }
    },
});