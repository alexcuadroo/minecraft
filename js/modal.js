document.getElementById("ip").addEventListener("click", function () {
    let link = this.textContent; // Obtener el texto del span con id "ip"
    // Crear un elemento de entrada temporal
    let tempInput = document.createElement("input");
    tempInput.value = link;
    // Agregar el elemento temporal al DOM
    document.body.appendChild(tempInput);
    // Seleccionar y copiar el contenido del elemento temporal
    tempInput.select();navigator.clipboard.writeText(link)
        .then(() => {
            // Copia exitosa
            // Mostrar el modal de confirmación
            document.getElementById("miModal").style.display = "block";
        })
        .catch((error) => {
            // Error al copiar
            console.error('Error al copiar:', error);
        });
    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);
    // Mostrar el modal de confirmación
    document.getElementById("miModal").style.display = "block";
    setTimeout(() => {
        document.getElementById("miModal").style.display = "none";
    }, 3500);
});

// Asegúrate de que el botón de cerrar el modal tiene la clase "cerrar-modal"
document.querySelector(".cerrar-modal").addEventListener("click", function () {
    document.getElementById("miModal").style.display = "none";
});
