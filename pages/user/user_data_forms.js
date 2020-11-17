var app = new Vue({
    el: "#app",
    data: {
        nome: null,
        sobrenome: null,
        senha: "",
        data: null,
        telefone: "(dd)00000-0000",
    },

    methods: {
        checagem: function(e) {
            if (this.nome && this.sobrenome && this.senha && this.data && this.telefone && this.senha.match(/.{8,}/)) {
                if (this.telefone.match(/^[(]\d{2}[)]\d{5}-\d{4}\s*$/) || this.telefone.match(/^[(]\d{2}[)]\d{4}-\d{4}\s*$/)) {
                    // enviar para o banco de dados //
                    alert("Formulário submetido com sucesso");
                    window.open("user_data.html", "_self");
                } else {
                    alert("Formato incorreto de telefone:\nInsira apenas números, no formatos:\n(dd)xxxxx-xxxx ou (dd)xxxx-xxxx");
                }
            } else {
                alert("Por favor, insira uma senha de pelo menos 8 caracteres");
            }
            e.preventDefault();
        },

        mostrarSenha: function(e) {
            if (senha.type === "password") {
                senha.type = "text";
            } else {
                senha.type = "password";
            }
        },
    }
});