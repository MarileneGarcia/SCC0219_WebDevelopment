var app = new Vue({
    el:"#app",
    data:{
        titulo: "Vue js",
    },
    methods: {
        change_img(param){
            document.getElementById("img").src = param;
            console.log(img.src);
        }
    }
});