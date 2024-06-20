async function fetchData() {
    try {
        const response = await fetch("https://api-mc.vercel.app/api/status"); // Ajusta la ruta según donde esté desplegada tu API
        const data = await response.json();

        // Actualizar los elementos HTML con los datos obtenidos, importante el orden
        document.getElementById("status").textContent = data.online
            ? "En línea"
            : "Apagado";
        document.getElementById("players").textContent =
            data.players;
        document.getElementById("player-list").textContent =
            data.playerNames.join(", ");
        document.getElementById("version").textContent =
            data.version.name_clean;
        document.getElementById("players-max").textContent =
            data.maxPlayers;
        document.getElementById("protocol").textContent =
            data.version.protocol;
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

// Función para actualizar los datos cada 30 segundos
function updateDataPeriodically() {
    fetchData(); // Primera llamada al cargar la página
    setInterval(fetchData, 30000); // Llama a fetchData cada 30 segundos (30000 milisegundos)
}

// Iniciar la actualización periódica al cargar la página
updateDataPeriodically();