// Función para obtener datos de la API
export async function fetchData() {
    try {
      const response = await fetch("https://api-rama-test.vercel.app/api/status");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener datos:", error);
      throw error; // Re-lanzar el error para manejarlo fuera
    }
  }
  
  // Función para actualizar los elementos HTML con los datos obtenidos
  async function obtenerDatosParaStatus() {
    try {
      const data = await fetchData();
  
      const encodedHtml = data.motd.html;
      const decodedHtml = encodedHtml.replace(/\\u([\dA-F]{4})/gi, (_match, group) => {
        return String.fromCharCode(parseInt(group, 16));
      });
  
      document.getElementById("status").textContent = data.online ? "En línea" : "Apagado";
      document.getElementById("players").textContent = data.players;
      document.getElementById("player-list").textContent = data.playerNames.join(", ");
      document.getElementById("version").textContent = data.version.name_clean;
      document.getElementById("players-max").textContent = data.maxPlayers;
      document.getElementById("motd").innerHTML = decodedHtml;
    } catch (error) {
      console.error("Error al actualizar el estado:", error);
    }
  }
  
  // Función para actualizar los datos cada 30 segundos
  export function updateDataPeriodically() {
    obtenerDatosParaStatus(); // Primera llamada al cargar la página
    setInterval(obtenerDatosParaStatus, 30000); // Llama a obtenerDatosParaStatus cada 30 segundos (30000 milisegundos)
  }
  
  // Iniciar la actualización periódica al cargar la página
  updateDataPeriodically();
  