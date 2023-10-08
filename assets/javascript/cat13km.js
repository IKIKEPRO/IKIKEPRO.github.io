// Función para mostrar u ocultar los detalles
/*function mostrarDetalles(index) {
    var detalles = document.querySelectorAll('.detalles')[index]; // Encuentra la fila de detalles correspondiente

    // Verifica si los detalles están ocultos
    if (detalles.style.display === '' || detalles.style.display === 'none') {
        detalles.style.display = 'table-row'; // Muestra los detalles
    } else {
        detalles.style.display = 'none'; // Oculta los detalles
    }
}

// Obtén todas las filas de corredores y detalles
var filasCorredores = document.querySelectorAll('.corredor');
var filasDetalles = document.querySelectorAll('.detalles');

// Agrega eventos de clic a las filas de corredores
filasCorredores.forEach(function (fila, index) {
    fila.addEventListener('click', function () {
        // Oculta todos los detalles
        filasDetalles.forEach(function (detalles) {
            detalles.style.display = 'none';
        });

        // Muestra los detalles de la fila seleccionada
        filasDetalles[index].style.display = 'table-row';
    });
}); */





// ORDEN POR TIEMPO TOTAL (función para ordenar la tabla por tiempo total)
document.addEventListener('DOMContentLoaded', function () {
    function compararTiempos(a, b) {
        const tiempoA = a.querySelector('.tiempo-total').textContent;
        const tiempoB = b.querySelector('.tiempo-total').textContent;

        // Convierte los tiempos en segundos para que se puedan comparar
        const tiempoASegundos = convertirTiempoASegundos(tiempoA);
        const tiempoBSegundos = convertirTiempoASegundos(tiempoB);

        return tiempoASegundos - tiempoBSegundos;
    }

    function convertirTiempoASegundos(tiempo) {
        const partesTiempo = tiempo.split(':');
        const horas = parseInt(partesTiempo[0]);
        const minutos = parseInt(partesTiempo[1]);
        const segundos = parseInt(partesTiempo[2]);

        return horas * 3600 + minutos * 60 + segundos;
    }

    function ordenarTabla() {
        const tabla = document.getElementById('categoria-todas');
        const tbody = tabla.querySelector('tbody');
        const filas = Array.from(tbody.querySelectorAll('.corredor'));

        // Ordena las filas utilizando la función de comparación
        filas.sort(compararTiempos);

        // Elimina las filas de la tabla
        filas.forEach((fila) => tbody.removeChild(fila));

        // Agrega las filas ordenadas nuevamente
        filas.forEach((fila) => tbody.appendChild(fila));
    }

    // Agrega un evento de clic al encabezado de la columna de Tiempo Total para ordenar la tabla
    const encabezadoTiempoTotal = document.querySelector('#categoria-todas th:nth-child(6)');
    encabezadoTiempoTotal.addEventListener('click', ordenarTabla);

    // Llama a la función para ordenar la tabla al cargar el documento
    ordenarTabla();
});


