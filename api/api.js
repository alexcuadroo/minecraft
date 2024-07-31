export async function fetchData() {
    try {
        const response = await fetch("https://api-rama-test.vercel.app/api/status");
        // Netlify utiliza esta, Hostinger utiliza la otra, ambas protegidas
        const data = await response.json();
        const encodedHtml = data.motd.html;
        const decodedHtml = encodedHtml.replace(
            /\\u([\dA-F]{4})/gi,
            (match, group) => {
                return String.fromCharCode(parseInt(group, 16));
            }
        );
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
        document.getElementById("motd").innerHTML = decodedHtml;
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

// Función para actualizar los datos cada 30 segundos

function updateDataPeriodically() {
    obtenerDatosParaStatus(); // Primera llamada al cargar la página
    setInterval(obtenerDatosParaStatus, 30000); // Llama a obtenerDatosParaStatus cada 30 segundos (30000 milisegundos)
}

// Iniciar la actualización periódica al cargar la página
updateDataPeriodically();