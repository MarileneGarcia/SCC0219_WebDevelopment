// Os valores serão oriundos do banco de dados //

var senha_real = "00000000";
var senha_codificada = [];

for (let i in senha_real) {
    senha_codificada.push('*');
}

var app = new Vue({
    el: "#app",
    data: {
        nome: "Paulo",
        sobrenome: "da Silva",
        senha: senha_codificada.join(""),
        data: "04/10/1985",
        telefone: "(85)99006-4090",
    },

    methods: {
        alterar: function(nome, sobrenome, senha, data, telefone) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.senha_real = senha;
            this.data = data;
            this.telefone = telefone;
        },
    },
});