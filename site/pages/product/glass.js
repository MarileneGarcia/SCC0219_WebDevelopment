var app = new Vue({
    el:"#app",
    data:{
        titulo: "Vue js",
    },
    methods: {
        change_img(param){
            document.getElementById("img").src = param;
            console.log(img.src);
        },
        change_text(param){
            b1 = document.getElementById("detalhes");
            b2 = document.getElementById("armacao");
            b3 = document.getElementById("tamanho");
            description = document.getElementById("descricao");
            
            if (param == b1.innerHTML) {
                b1.style.backgroundColor = "#F1F1F1";
                b2.style.backgroundColor = "#DCDCDC";
                b3.style.backgroundColor = "#DCDCDC";
                description.innerHTML = "Código do modelo: 1523654412<br><br>Atualmente um dos modelos de óculos de sol mais icônicos do mundo, os óculos de sol Ray-Ban Aviator Classic foram originalmente criados aos pilotos americanos em 1937.Os óculos de sol Aviator Classic são um modelo atemporal que combina o grande estilo Aviator com qualidade, desempenho e conforto excepcionais. Com a armação dourada clássica, você pode ver o mundo através de uma variedade de cores de lentes como as em cristal marrom, verde, as G-15 polarizadas e todas proporcionam um elevado nível de nitidez e 100% de proteção contra os raios UV.";
            } else if(param == b2.innerHTML){
                b1.style.backgroundColor = "#DCDCDC";
                b2.style.backgroundColor = "#F1F1F1";
                b3.style.backgroundColor = "#DCDCDC";
                description.innerHTML = "Tipo de material da armação: Acetato <br><br>Cor da armação: Preto<br><br>Lentes: Verde Clássica G-15<br><br>Lens Category: 3";
            }else if(param == b3.innerHTML){
                b1.style.backgroundColor = "#DCDCDC";
                b2.style.backgroundColor = "#DCDCDC";
                b3.style.backgroundColor = "#F1F1F1";
                description.innerHTML = "Formato: Quadrada<br><br>Tamanho da ponte lentes: 50 22<br><br>Comprimento da haste: 150";
            }

        }
    }
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