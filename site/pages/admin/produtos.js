/*let remove_button = document.getElementById("remove_button");
let input_remove = document.getElementById("remove_code");
let remove = document.getElementById("remove");

let add_button = document.getElementById("add_button");*/

var app = new Vue({
    el: "#app",
    data: {
        code: null,
        price: null,
        alias: null,
        details: null,
        format: null,
        tipo: null,
        img: null,
    },
    methods: {
        add() {
            const url = 'http://localhost:3002/glass/add';

            var formData = new FormData();
            formData.append('code', this.code);
            formData.append('price', this.price);
            formData.append('alias', this.alias);
            formData.append('details', this.details);
            formData.append('format', this.format);
            formData.append('tipo', this.tipo);
            formData.append('img', this.img, File);

            console.log(formData);

            const options = {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            fetch(url, options).then(res => {
                console.log(res);
                return 0;
            }).catch(err => {
                console.log(err);
            })
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