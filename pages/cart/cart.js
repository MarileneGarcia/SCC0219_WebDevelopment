
window.onload = (event) => {
   
}
var app = new Vue({
    el: "#app",
    data: {
        sub_total:0.7,
        cart: [
             {
                type: "Escuro",
                model: "Aviator x-10",
                price: 10.58,
                style: "",
                img: "../images/1-removebg-preview.png",
            },
             {
                type: "Grau",
                model: "Quadrado surf",
                price: 10.58,
                style: "",
                img: "../images/2-removebg-preview.png",
            },
             {
                type: "Grau",
                model: "Styled mix",
                price: 10.58,
                style: "",
                img: "../images/3-removebg-preview.png",
            },
             {
                type: "Escuro",
                model: "Retro Quadrado",
                price: 10.58,
                style: "",
                img: "../images/4-removebg-preview.png",
            },
        ],
        prices:[],
        favs: []
       
    },
    methods: {
        helo() {
            console.log(this.glasses);
        },
    removeCart(item){
        console.log('remove', item.model)
        for (let i in this.cart){
            if(item.model == this.cart[i].model){
                console.log(this.cart[i].model);
                this.cart.splice(i, 1);
            }
        }
    },
    price(glass){
        let flag= 0;
        if(this.prices.length > 0){
            
        for (let i in this.prices){
            if(this.prices[i].model != glass.model){

            }else{
               this.prices.splice(i,1); 
               flag=1;
        }
       }
       if(flag!=1){
        this.prices.push(glass);
      //  window.alert('adicionado aos favoritos');
       }else{
        //window.alert('Já está no favoritos');

       }
        console.log(this.favs);
    }else{
        console.log('else', this.favs.length);
        this.prices.push(glass);
    }
    this.sub_total=0;
    console.log(this.prices)
    for ( let j in this.prices){
        console.log(this.prices)
        this.sub_total = this.sub_total+this.prices[j].price;
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