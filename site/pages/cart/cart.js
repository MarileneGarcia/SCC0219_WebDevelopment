oculos_lista = [];
cart = [];
user = localStorage.getItem("user");
valor = [];
valor_aux = 0;

window.onload = (event) => {
    const url = 'http://localhost:3002/User/' + this.user;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(url, options).then(res => {
        console.log(res);
        return res.json();
    }).then(res => {
        console.log(res);
        cart = res.cart;
        console.log(cart);
        console.log(res.cart);
    }).catch(err => {
        console.log(err);
    })


    fetch('http://localhost:3002/glass').
    then(function(response) {
        return response.json();
    }).then(function(response) {
        response.forEach(function(item) {
            if (cart.includes(item._id)) {
                var nome = "../images/" + String(item.img);
                item.img = nome;
                valor_aux = valor_aux + Number(item.price);
                oculos_lista.push(item);
                valor.push(valor_aux);
                console.log(valor);
            }
        }).catch(err => {
            window.alert('Erro inesperado, recarregue a página');
            console.log(err);
        })
    })
    console.log(oculos_lista);
}

var app = new Vue({
    el: "#app",
    data: {
        sub_total: valor,
        prices: [],
        favs: [],
        carts: [],
        oculos: oculos_lista,
    },
    methods: {
        helo() {
            console.log(this.glasses);
        },
        removeCart(item) {
            console.log('remove', item.model)
            for (let i in this.cart) {
                if (item.model == this.cart[i].model) {
                    console.log(this.cart[i].model);
                    this.cart.splice(i, 1);
                }
            }
        },
    },

});

function w3_open() {;
    document.getElementById("mySidebar").style.display = "block";

}

function w3_close() {
    console.log('close');

    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}