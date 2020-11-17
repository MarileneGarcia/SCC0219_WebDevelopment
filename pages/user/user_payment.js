// Os valores serão oriundos do banco de dados //

var cartao_real = "900100000000000000";
var cartao_codificado = cartao_real.split("");
var aux = 0;
for (let i in cartao_real) {
    aux += 1;
    if (aux > 2) {
        cartao_codificado[aux] = "*";
    }
}

var cvv_real = "000";
var cvv_codificado = []
for (let i in cvv_real) {
    cvv_codificado.push("*");
}

var app = new Vue({
    el: "#app",
    data: {
        cartao: cartao_codificado.join(""),
        titular: "João da Silva",
        cvv: cvv_codificado.join(""),
        data: "04/10/1985",
    },

    methods: {
        alterar: function(nome, sobrenome, senha, data, telefone) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.senha = " ";
            this.data = data;
            this.telefone = telefone;
        }
    }
});