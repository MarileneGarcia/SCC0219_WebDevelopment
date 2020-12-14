oculos_lista = [];

window.onload = (event) => {
    fetch('http://localhost:3002/glass').
    then(function(response) {
        return response.json();
    }).then(function(response) {
        response.forEach(function(item) {
            if (item.details == "Em Promocao" || item.details == "Em promocao") {
                var nome = "../images/" + String(item.img);
                item.img = nome;
                oculos_lista.push(item);
            }
        }).catch(err => {
            console.log(err);
        })
    })
}

var app = new Vue({
    el: "#app",
    data: {
        glasses: oculos_lista,
        favs: [],
        user: localStorage.getItem("user"),
    },
    methods: {
        addCart(glass) {
            var aux = String(glass._id);
            const url = 'http://localhost:3002/User/cart/' + this.user;
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cart: aux,
                })
            }

            fetch(url, options).then(res => {
                    console.log(res);
                    return res.json();
                }).then(res => {
                    if (res == 'Cart updated!') {
                        window.alert('Adicionado ao carrinho!');
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
                /*localStorage.setItem("user", this.user);
                this.user.cart.push(oculos);
                this.delete();
                this.create();*/
        },

        helo() {
            console.log(this.glasses);
        },
        fav(glass) {
            let flag = 0;
            if (this.favs.length > 0) {
                console.log('if');
                for (let i in this.favs) {
                    if (this.favs[i].model != glass.model) {

                    } else {
                        flag = 1;
                    }
                }
                if (flag != 1) {
                    this.favs.push(glass);
                    window.alert('adicionado aos favoritos');
                } else {
                    window.alert('Já está no favoritos');
                }
                console.log(this.favs);
            } else {
                window.alert("adicionado aos favoritos");
                this.favs.push(glass);
            }
        },
        removeFav(item) {
            for (let i in this.favs) {
                if (item.model = this.favs[i].model) {
                    this.favs.splice(i, 1);
                }
            }
        },
    }
}, );

function w3_open() {
    //  document.getElementById("main").style.marginLeft = "25%";
    //document.getElementById("mySidebar").style.width = "right:0";
    //document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    // document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
    console.log('close');

    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}