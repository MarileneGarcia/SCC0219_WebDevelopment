const url = 'http://localhost:3002/user/add';

const user = {
    username: 'bobEsponja',
    password: '12345688',
    address: 'Rua aaa, 349',
    cart: '[{1,2}]',
    card_number: '1234567889561',
    cvv: '123',
    card_date: '10-12-2025'
};

const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json',
    },
}

window.onload = (event) => {
    fetch(url, options).then(res => {
        console.log(res);
        return 0;
    }).catch(err => {
        console.log(err);
    })
}

var app = new Vue({
    el: "#app",
    data: {
        glasses: {
            glass1: {
                type: "Aviator",
                model: "Aviator x-10",
                price: "R$ 3,50",
                style: "",
                img: "../images/1-removebg-preview.png",
            },
            glass2: {
                type: "hello",
                model: "Quadrado surf",
                price: "R$ 10,50",
                style: "",
                img: "../images/2-removebg-preview.png",
            },
            glass3: {
                type: "hello",
                model: "Styled mix",
                price: "R$ 4,65",
                style: "",
                img: "../images/3-removebg-preview.png",
            },
            glass4: {
                type: "hello",
                model: "Retro Quadrado",
                price: "R$ 9,52",
                style: "",
                img: "../images/4-removebg-preview.png",
            },
            glass5: {
                type: "hello",
                model: "Retro Circular",
                price: "R$ 10,00",
                style: "",
                img: "../images/5-removebg-preview.png",
            },
            glass6: {
                type: "hello",
                model: "Quadrado Y-4",
                price: "R$ 5,56",
                style: "",
                img: "../images/6-removebg-preview.png",
            },
        },
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