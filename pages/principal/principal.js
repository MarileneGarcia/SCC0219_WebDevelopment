
window.onload = (event) => {
   
}
var app = new Vue({
    el: "#app",
    data: {
        glasses: {
            glass1: {
                type: "Escuro",
                model: "Aviator x-10",
                price: "R$ 3,50",
                style: "",
                img: "../images/1-removebg-preview.png",
            },
            glass2: {
                type: "Grau",
                model: "Quadrado surf",
                price: "R$ 10,50",
                style: "",
                img: "../images/2-removebg-preview.png",
            },
            glass3: {
                type: "Grau",
                model: "Styled mix",
                price: "R$ 4,65",
                style: "",
                img: "../images/3-removebg-preview.png",
            },
            glass4: {
                type: "Escuro",
                model: "Retro Quadrado",
                price: "R$ 10,58",
                style: "",
                img: "../images/4-removebg-preview.png",
            },
            glass5: {
                type: "hello",
                model: "Retro Quadrado",
                price: "R$ 10,58",
                style: "",
                img: "../images/4-removebg-preview.png",
            },
            glass6: {
                type: "hello",
                model: "Retro Quadrado",
                price: "R$ 10,58",
                style: "",
                img: "../images/4-removebg-preview.png",
            },
        },
        favs: []
       
    },
    methods: {
        addCart(){
            window.alert("Item adicionado ao Carrinho");
        },
        helo() {
            console.log(this.glasses);
        },
        fav(glass) {
            let flag= 0;
            if(this.favs.length > 0){
                console.log('if');
            for (let i in this.favs){
                if(this.favs[i].model != glass.model){

                }else{
                   flag=1;
            }
           }
           if(flag!=1){
            this.favs.push(glass);
            window.alert('adicionado aos favoritos');
           }else{
            window.alert('Já está no favoritos');
           }
            console.log(this.favs);
        }else{
            window.alert("adicionado aos favoritos");
            this.favs.push(glass);
        }
    },
    removeFav(item){
        for (let i in this.favs){
            if(item.model = this.favs[i].model){
                this.favs.splice(i, 1);
            }
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