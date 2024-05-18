
function colocarenpantalla(datos) {
    console.log(datos)

    document.querySelector(".ciudad") .innerHTML= " clima en " + datos.name
    document.querySelector(".grados").innerHTML = Math.floor(datos.main.temp) + '°'
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + datos.weather[0].icon + ".png"
    document.querySelector(".humedad").innerHTML =" humedad " + datos.main.humidity + "%"

}

async function buscarCidade(ciudad) {
    let datos = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric',
    ).then((resposta) => resposta.json())

    colocarenpantalla(datos)

}


function clicaboton() {
    let ciudad = document.querySelector(".buscar").value

    buscarCidade(ciudad)
}
