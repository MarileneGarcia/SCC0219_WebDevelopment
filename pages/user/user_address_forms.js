var app = new Vue({
    el: "#app",
    data: {
        errors: [],
        endereco: null,
        numero: null,
        complemento: null,
        cep: "00000-000",
        estado: null,
        cidade: null,
    },

    methods: {
        completar: function(e) {
            this.errors = [];
            if (this.cep.match(/^\d{5}-\d{3}$/)) {
                fetch('https://viacep.com.br/ws/' + this.cep + '/json/')
                    .then(response => response.json())
                    .then(data => {
                        if (data.uf != "" && data.localidade != "") {
                            this.estado = data.uf;
                            this.cidade = data.localidade;
                        }
                    });
            }
        },
        checagem: function(e) {
            if (this.endereco && this.numero && this.complemento && this.cep && this.estado && this.cidade) {
                // enviar para o banco de dados //
                alert("Formulário submetido com sucesso");
                window.open("user_address.html", "_self");
            } else {
                alert("Por favor, preencher todos os campos");
            }
            e.preventDefault();
        },
    }
});