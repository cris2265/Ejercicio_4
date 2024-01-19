let nombres_colores = document.querySelector(".cajap");

function cambiar_color() {
    nombres_colores.innerHTML = '<div class = colores_1>Color Azul</div>'
}

let btn_1 = document.querySelector (".color_1");

btn_1.addEventListener("click", cambiar_color)







let nombres_colores_2 = document.querySelector(".cajap");

function cambiar_color_2() {
    nombres_colores_2.innerHTML = '<div class = colores_2>Color Verde</div>'
}

let btn_2 = document.querySelector (".color_2");

btn_2.addEventListener("click", cambiar_color_2)