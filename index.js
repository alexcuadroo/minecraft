const tarjetas = [
  {
    fecha: "10 de mayo de 2024 - IP nueva: enx-cirion-2.enx.host:10052",
    card1: "actual",
    pastilla1: "Nuevo",
    descargarSi: "si",
    instrucciones: [
      "Borra todos los mods de la carpeta mods",
      "Descomprime la carpeta descargada y agrega los nuevos mods"
    ],
    descarga: "../data-mc/mods mayo.zip",
    notas: [
      "Se ha agregado el mod biggerstacks que estaba en la versión anterior",
      "Nueva ip: enx-cirion-2.enx.host:10052",
      "Nos mudamos a Brasil"
    ],
  },
  {
    fecha: "5 de mayo de 2024",
    card1: "pasado",
    pastilla1: "Antiguo",
    descargarSi: "no",
    instrucciones: [
      "Borra todos los mods de la carpeta mods",
      "Descomprime la carpeta descargada y agrega los nuevos mods",
    ],
    descarga: "#",
    notas: [
      "Se han actualizado todos los mods",
      "Se han borrado mods no usados e incorporado +4 de estructuras",
      "Se ha regenerado el mapa explorado",
    ],
  },
  {
    fecha: "1 de mayo de 2024",
    card2: "pasado",
    pastilla2: "Antiguo",
    descargarNo: "no",
    instrucciones: [
      "Borra el mod de player music y uteam core",
      "Coloca después de descomprimir los descargados",
    ],
    descarga: "#",
    notas: [
      "Se corrige error del mod actualizando dos versiones",
    ],
  },
];
function generarTarjeta(tarjeta) {
  const { card1, card2, pastilla1, pastilla2, descargarSi, descargarNo, fecha, instrucciones, descarga, notas } = tarjeta;
  const cardId = tarjeta.card1 ? tarjeta.card1 : tarjeta.card2;
  const pastilla = tarjeta.pastilla1 ? tarjeta.pastilla1 : tarjeta.pastilla2;
  const boton = tarjeta.descargarSi ? tarjeta.descargarSi : tarjeta.descargarNo;

  return `
      <div style="display: flex; justify-content: space-around">
        <div id="${cardId}">
          <span class="new">${pastilla}</span>
          <h2 id="fecha">${fecha}</h2>
          <ol>
            ${instrucciones.map(instruccion => `<li>${instruccion}</li>`).join('')}
          </ol>
          <a href="${descarga}" target="_blank"><button id="${boton}">Descargar</button></a>
          <br /><br /><br />
          <section>
            <span class="notes">Notas de la actualización</span>
            <ul>
              ${notas.map(nota => `<li>${nota}</li>`).join('')}
            </ul>
          </section>
          <p style="font-size: small; font-style: italic;">
            Para ir a la carpeta de minecraft presiona el boton de <strong>Windows + R</strong> y escribe %appdata%
          </p>
        </div>
      </div>
    `;
}


const tarjetasValidadas = tarjetas.filter(tarjeta => {
  return tarjeta.fecha && (tarjeta.card1 || tarjeta.card2) && (tarjeta.pastilla1 || tarjeta.pastilla2) && (tarjeta.descargarSi || tarjeta.descargarNo) && tarjeta.instrucciones.length > 0 && tarjeta.descarga && tarjeta.notas.length > 0;
});

document.querySelector('main').innerHTML = tarjetasValidadas.map(generarTarjeta).join('');