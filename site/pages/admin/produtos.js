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
                formData.append('code', this.code);
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
                    console.log(res);
                    return 0;
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
            var codigo = this.code_at;

            if (this.checar_dados_atualizar()) {
                const options_remove = {
                    method: 'DELETE',
                }

                this.oculos.forEach(function(item) {
                    if (item.code == codigo) {
                        url_remove = url_remove + item._id;
                    }
                });

                fetch(url_remove, options_remove).then(res => {
                    console.log(res);
                    return 0;
                }).catch(err => {
                    console.log(err);
                });

                var formData = new FormData();
                formData.append('code', this.code_at);
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
                    console.log(res);
                    return 0;
                }).catch(err => {
                    console.log(err);
                })
                window.alert('Item atualizado com sucesso');
                window.location.reload();

            }
        }

    }
});



/*

remove_button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log('this.code');
    let code = input_remove.value;

    if (code == "") {
        item = document.getElementById("msg_error");
        let text = "Código incorreto";
        var p = document.createElement("p");
        p.id = "msg_error";
        p.innerHTML = "Código incorreto";
        p.style = "color: rgb(255, 50, 50); font-size: 16px; font-weight:bold; position: absolute; left: 697px; top: 2330px; width:fit-content;";
        try {
            item.remove();
        } catch (error) {}
        input_remove.style = "top: 2275px; border-color:rgb(255, 50, 50);";
        remove.appendChild(p);
    } else {
        input_remove.style = "top: 2275px;";
        let text = "Item adicionado com sucesso";
        item = document.getElementById("msg_error");
        try {
            item.remove();
        } catch (error) {}
        window.alert(text);
    }
});*/