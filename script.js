var url = "https://script.google.com/macros/s/AKfycbyK1n1uVWqGHvK6_K4EvuIQAu2_KM-UopT-ayofSgpm92hDT1oS6_RT_gnaRjhmiEYIjA/exec";

var productos = [];

fetch(url)
    .then(function(respuesta) {

        return respuesta.json();

    })
    .then(function(datos) {

        productos = datos;

        mostrarTodo();

    });

function mostrarTodo() {

    mostrarProductos(productos);

}

function mostrarBajoStock() {

    var productosFiltrados = [];

    for (var i = 0; i < productos.length; i++) {

        if (productos[i][1] <= 10) {

            productosFiltrados.push(productos[i]);

        }

    }

    mostrarProductos(productosFiltrados);

}

function mostrarProductos(lista) {

    var contenedor = document.getElementById("productos");

    contenedor.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {

        contenedor.innerHTML +=
            "<p>" +
            lista[i][0] +
            " | Stock: " +
            lista[i][1] +
            " | Precio: $" +
            lista[i][2] +
            "</p>";
    }

}