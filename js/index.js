import { tarjetas } from '../components/data.js';
function generarInstrucciones(instrucciones) {
  return instrucciones.map(instruccion => `<li>${instruccion}</li>`).join('');
}

function generarNotas(notas) {
  return notas.map(nota => `<li>${nota}</li>`).join('');
}

function generarTarjeta(tarjeta) {
  const { fecha, instrucciones, descarga, notas, card1, card2, pastilla1, pastilla2, descargarSi, descargarNo } = tarjeta;
  const cardId = card1 || card2;
  const pastilla = pastilla1 || pastilla2;
  const boton = descargarSi || descargarNo;

  return `
    <div style="display: flex; justify-content: space-around">
      <div id="${cardId}">
        <span class="new">${pastilla}</span>
        <h2 id="fecha">${fecha}</h2>
        <ol>
          ${generarInstrucciones(instrucciones)}
        </ol>
        <a href="${descarga}" target="_blank"><button id="${boton}">Descargar</button></a>
        <br /><br /><br />
        <section>
          <span class="notes">Notas de la actualización</span>
          <ul>
            ${generarNotas(notas)}
          </ul>
        </section>
        <p style="font-size: small; font-style: italic;">
          Para ir a la carpeta de minecraft presiona el boton de <strong>Windows + R</strong> y escribe %appdata%
        </p>
      </div>
    </div>
  `;
}
function validarTarjeta(tarjeta) {
  return tarjeta.fecha && (tarjeta.card1 || tarjeta.card2) && (tarjeta.pastilla1 || tarjeta.pastilla2) && (tarjeta.descargarSi || tarjeta.descargarNo) && tarjeta.instrucciones.length > 0 && tarjeta.descarga && tarjeta.notas.length > 0;
}
const tarjetasValidadas = tarjetas.filter(validarTarjeta);
document.querySelector('main').innerHTML = tarjetasValidadas.map(generarTarjeta).join('');