
window.onload = (event) =>{

}
var app = new Vue({
    el: "#app",
    data:{
        glasses:{
        glass1:{
            type:"hello",
            model:"world",
            price:"R$ 3,50",
            style:"",
            img:"../images/1-removebg-preview.png",
            },
        glass2:{
            type:"hello",
            model:"world",
            price:"",
            style:"",
            img:"../images/2-removebg-preview.png",
            },
        glass3:{
            type:"hello",
            model:"world",
            price:"",
            style:"",
            img:"../images/3-removebg-preview.png",
                },
        glass4:{
            type:"hello",
            model:"world",
            price:"",
            style:"",
            img:"../images/4-removebg-preview.png",
                },    
        items: [],
        pesquisa: "",
    }},
    method:{
        helo(){
            this.glass1.type;
        }
    }
});




