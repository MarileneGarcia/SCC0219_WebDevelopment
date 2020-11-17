
let remove_button = document.getElementById("remove_button");
let input_remove = document.getElementById("remove_code");
let remove = document.getElementById("remove");



remove_button.addEventListener("click",function(event){
    event.preventDefault();
    let code = input_remove.value;

    if(code == ""){
        item = document.getElementById("msg_error");
        let text = "Código incorreto";
        var p = document.createElement("p");
        p.id = "msg_error";
        p.innerHTML = "Código incorreto";
        p.style = "color: rgb(255, 50, 50); font-size: 16px; font-weight:bold; position: absolute; left: 697px; top: 2330px; width:fit-content;";
        try {
            item.remove();
        } catch (error) {    
        }
        input_remove.style="top: 2275px; border-color:rgb(255, 50, 50);";
        remove.appendChild(p);
    }
    else{
        input_remove.style="top: 2275px;";
        let text = "Item adicionado com sucesso";
        item = document.getElementById("msg_error");
        try {
            item.remove();
        } catch (error) {    
        }
        window.alert(text);
    }
});

/*var app = new Vue({
    el: "#app",
    data: {
        glasses: {
            glass1: {
                code: "aa0000",
                type: "hello",
                model: "world",
                price: "R$ 3,50",
                style: "",
                img: "../images/1-removebg-preview.png",
            },
            glass2: {
                code: "aa0001",
                type: "hello",
                model: "world",
                price: "",
                style: "",
                img: "../images/2-removebg-preview.png",
            },
            glass3: {
                code: "ab0002",
                type: "hello",
                model: "world",
                price: "",
                style: "",
                img: "../images/3-removebg-preview.png",
            },
            glass4: {
                code: "ab0003",
                type: "hello",
                model: "world",
                price: "",
                style: "",
                img: "../images/4-removebg-preview.png",
            },
            items: [],
            pesquisa: "",
        }
    },
    methods: {
        helo() {
            this.glass1.type;
        }
    }
});*/
