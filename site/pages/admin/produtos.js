oculos_lista = [];

window.onload = (event) => {
    fetch('http://localhost:3002/glass').
    then(function(response) {
        return response.json();
    }).then(function(response) {
        response.forEach(function(item) {
            var nome = "../images/" + String(item.img);
            item.img = nome;
            oculos_lista.push(item);
        }).catch(err => {
            window.alert('Erro inesperado, recarregue a página');
            console.log(err);
        })
    })
}

var app = new Vue({
    el: "#app",
    data: {
        code: null,
        price: null,
        alias: null,
        details: null,
        format: null,
        tipo: null,
        code_at: null,
        price_at: null,
        alias_at: null,
        details_at: null,
        format_at: null,
        tipo_at: null,
        code_info: null,
        code_del: null,
        image: null,
        img: null,
        oculos: oculos_lista,
    },

    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
            this.img = files[0];
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        checar_dados_adicionar() {
            if (this.code == null || this.price == null || this.alias == null || this.details == null || this.format == null || this.tipo == null || this.img == null) {
                window.alert('Por favor, preencha todos os campos e tente novamente');
                return false;
            }
            return true;
        },
        add() {
            const url = 'http://localhost:3002/glass/add';
            if (this.checar_dados_adicionar()) {
                var formData = new FormData();

                var codigo = this.code.split(" ");
                formData.append('code', codigo[0]);
                formData.append('price', this.price);
                formData.append('alias', this.alias);
                formData.append('details', this.details);
                formData.append('format', this.format);
                formData.append('tipo', this.tipo);
                formData.append('img', this.img);

                const options = {
                    method: 'POST',
                    body: formData
                }

                fetch(url, options).then(res => {
                    return res.json();
                }).then(res => {
                    if (res == 'glass added') {
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
                window.location.reload();
            }
        },
        checar_dados_atualizar() {
            if (this.code_at == null || this.price_at == null || this.alias_at == null || this.details_at == null || this.format_at == null || this.tipo_at == null || this.img == null) {
                window.alert('Por favor, preencha todos os campos e tente novamente');
                return false;
            }
            return true;
        },

        atualizar() {
            const url_add = 'http://localhost:3002/glass/add';
            var url_remove = 'http://localhost:3002/glass/';
            var codigo = this.code_at.split(" ");
            var flag = false;

            this.oculos.forEach(function(item) {
                if (item.code == codigo[0]) {
                    url_remove = url_remove + item._id;
                    flag = true;
                }
            });

            if (!flag) {
                window.alert('Nao foi encontrado nenhum produto com esse codigo');
            } else if (this.checar_dados_atualizar()) {
                const options_remove = {
                    method: 'DELETE',
                }

                fetch(url_remove, options_remove).then(res => {
                    return res.json();
                }).then(res => {
                    if (res == 'glass deleted') {
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
                });

                var formData = new FormData();
                formData.append('code', codigo[0]);
                formData.append('price', this.price_at);
                formData.append('alias', this.alias_at);
                formData.append('details', this.details_at);
                formData.append('format', this.format_at);
                formData.append('tipo', this.tipo_at);
                formData.append('img', this.img);

                const options_add = {
                    method: 'POST',
                    body: formData
                }

                fetch(url_add, options_add).then(res => {
                    return res.json();
                }).then(res => {
                    if (res == 'glass added') {
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
                window.alert('Item atualizado com sucesso');
                window.location.reload();
            }
        },
        dados() {
            var codigo = null;
            if (this.code_info != null) {
                codigo = this.code_info.split(" ");
                this.oculos.forEach(function(item) {
                    if (item.code == codigo[0]) {
                        document.getElementById("nome_info").innerHTML = item.alias;
                        document.getElementById("preco_info").innerHTML = item.price;
                        document.getElementById("detalhes_info").innerHTML = item.details;
                        document.getElementById("arm_info").innerHTML = item.format;
                        document.getElementById("tipo_info").innerHTML = item.tipo;
                        document.getElementById("img_info").src = item.img;
                    }
                });
            } else {
                window.alert("Não há produtos com esse código")
            }
        },
        dados() {
            var codigo = null;
            if (this.code_info != null) {
                codigo = this.code_info.split(" ");
                this.oculos.forEach(function(item) {
                    if (item.code == codigo[0]) {
                        document.getElementById("nome_info").innerHTML = item.alias;
                        document.getElementById("preco_info").innerHTML = item.price;
                        document.getElementById("detalhes_info").innerHTML = item.details;
                        document.getElementById("arm_info").innerHTML = item.format;
                        document.getElementById("tipo_info").innerHTML = item.tipo;
                        document.getElementById("img_info").src = item.img;
                    }
                });
            } else {
                window.alert("Não há produtos com esse código")
            }
        },
        remove() {
            var url_remove = 'http://localhost:3002/glass/';
            var codigo = this.code_del.split(" ");
            var flag = false;

            this.oculos.forEach(function(item) {
                if (item.code == codigo[0]) {
                    url_remove = url_remove + item._id;
                    flag = true;
                }
            });

            if (!flag) {
                window.alert('Nao foi encontrado nenhum produto com esse codigo');
            } else {
                const options_remove = {
                    method: 'DELETE',
                }
                fetch(url_remove, options_remove).then(res => {
                    return res.json();
                }).then(res => {
                    if (res == 'glass deleted') {
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
                });
                window.alert('Item removido com sucesso');
                window.location.reload();
            }
        }
    }
});