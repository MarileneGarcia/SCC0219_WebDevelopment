var oculos_mv = [];
var oculos_e = [];
var oculos_p = [];

window.onload = (event) => {
    fetch('http://localhost:3002/glass').
    then(function(response) {
        return response.json();
    }).then(function(response) {
        response.forEach(function(item) {
            if (item.tipo == "sun") {
                console.log("entrou aq");
                var nome = "../images/" + String(item.img);
                if (item.details == "Em Promocao" || item.details == "Em promocao" || item.details == "Novidade" || item.details == "novidade") {
                    item.img = nome;
                    oculos_mv.push(item);
                } else if (item.details == "Simples" || item.details == "simples" || item.details == "Em promocao" || item.details == "Em Promocao") {
                    item.img = nome;
                    oculos_e.push(item);
                } else if (item.details == "Prime" || item.details == "prime") {
                    item.img = nome;
                    oculos_p.push(item);
                }
            }
        }).catch(err => {
            window.alert('Erro inesperado, recarregue a página');
            console.log(err);
        })
    })
}

var app = new Vue({
    el: "#app",
    data: {
        glasses_mv: oculos_mv,
        glasses_e: oculos_e,
        glasses_p: oculos_p,
        favs: []

    },
    methods: {
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
                console.log('else', this.favs.length);
                this.favs.push(glass);
            }
        }
    },

});

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