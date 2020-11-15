var app = new Vue({
    el: "#app",
    data: {
        endereco: "Rua Nunes Valente",
        numero: "3500",
        complemento: "ap 1201",
        cep: "60125-077",
        estado: "CE",
        cidade: "Fortaleza",
    },

    methods: {
        alterar: function(endereco, numero, complemento, cep, estado, cidade) {
            this.endereco = endereco;
            this.cidade = cidade;
            this.complemento = complemento;
            this.estado = estado;
            this.cep = cep;
            this.numero = numero;
        }
    }
});