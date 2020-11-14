function encontrarcep(cep) {
    return 'https://viacep.com.br/ws/' + cep + '/json/';
}

var app = new Vue({
            el: "#app",
            data: {
                errors: [],
                endereco: null,
                numero: null,
                complemento: null,
                cep: null,
                estado: null,
                cidade: null,
            },
            methods: {
                checagem: function(e) {
                    this.errors = []
                    if (this.endereco && this.numero && this.complemento && this.cep && this.estado && this.cidade) {
                        //if (!/^\d{5}\-\d{3}$)
                        //}
                        else {
                            if (!this.endereco)
                                this.errors.push("\n Por favor, insira um endereço")
                            if (!this.numero)
                                this.errors.push("\n Por favor, insira um numero")
                            if (!this.complemento)
                                this.errors.push("\n Por favor, insira um complemento")
                            if (!this.cep)
                                this.errors.push("\n Por favor, insira um cep")
                            if (!this.estado)
                                this.errors.push("\n Por favor, insira um estado")
                            if (!this.cidade)
                                this.errors.push("\n Por favor, insira uma cidade")
                        }

                        e.preventDefault();
                        alert(this.errors);
                    },
                }
            });