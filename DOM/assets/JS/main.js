document.getElementById("container").innerHTML = "<h1>hola mundo<h1>"

const condicion = prompt("¿quieres que te salude?")

if (condicion == "si" ) {
    document.getElementById("container").innerHTML = "<p>Hola mundo</p>"
} else {
    document.getElementById("container").innerHTML = "<p>Chau mundo</p>"
}