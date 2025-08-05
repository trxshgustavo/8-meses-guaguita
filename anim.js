// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  var audio = document.querySelector("audio");
  var lyrics = document.querySelector("#lyrics");
  var abrirCartaBtn = document.getElementById("abrirCartaBtn");
  var titulo = document.querySelector(".titulo"); // Asegúrate de tener esta variable si la usas
  var saludoSuperior = document.querySelector(".saludo-superior"); // Asegúrate de tener esta variable si la usas

  // --- NUEVAS REFERENCIAS A LOS ELEMENTOS DEL MENSAJE SIMPLE ---
  var mensajeTextoDiv = document.getElementById("mensajeTextoDiv");
  var cerrarMensajeBtn = document.getElementById("cerrarMensajeBtn");
  // --- FIN NUEVAS REFERENCIAS ---

  // Array de objetos que contiene cada línea y su tiempo de aparición en segundos
  var lyricsData = [
    { text: "Entre tu boca y la mia", time: 12 },
    { text: "Hay un cuento de hadas que siempre acaba bien", time: 14 },
    { text: "Entre las sabanas frias", time: 19 },
    { text: "me pierdo a solas pensando en tu piel", time: 20 },
    { text: "Que curiosa la vida", time: 24 },
    { text: "Que de pronto sorprende con este loco amor", time: 26 },
    { text: "y es que todo de acaba", time: 31 },
    { text: "y termina si dejo de ser lo que soy", time: 32 },
    { text: "Bésame, no dudes ni un segundo de mi alma", time: 36 },
    { text: "Alteras mis sentidos, liberas mis alas", time: 43 },
    { text: "No cabe tanto amor en esta cama", time: 48 },
    { text: "Si me dejaras", time: 52 },
    { text: "Qué bueno es sentir que suspiro de nuevo", time: 55 },
    { text: "Que tu roce y mi roce juntos forman fuego", time: 60 },
    { text: "Delicada llama", time: 64 },
    { text: "Que nunca se apaga", time: 66 },
    { text: "Sin ti yo me pierdo", time: 70 },
    { text: "Sin ti me vuelvo veneno", time: 72 },
    { text: "No entiendo el despertar sin un beso de esos", time: 74 },
    { text: "Sin tu aliento en mi cuello", time: 79 },
    { text: "Sin ti yo me pierdo", time: 82 },
    { text: "Sin ti me vuelvo veneno", time: 84 },
    { text: "No entiendo el despertar sin un beso de esos", time: 86 },
    { text: "Sin tu aliento en mi cuello", time: 91 },
    { text: "Qué futuro más bello", time: 94 },
    { text: "Qué plan más perfecto presiento", time: 96 },
    { text: "No tendremos que estar batallando", time: 101 },
    { text: "Buscando siempre el momento", time: 103 },
    { text: "Por dar pasos de cero", time: 105 },
    { text: "Y un camino certero de sueños", time: 108 },
    { text: "Liberamos el llanto vacío que tanto provocan los miedos", time: 113 },
    { text: "Bésame, no dudes ni un segundo de mi alma", time: 118 },
    { text: "Alteras mis sentidos, liberas mis alas", time: 124 },
    { text: "No cabe tanto amor en esta cama", time: 129 },
    { text: "Si me dejaras", time: 133 },
    { text: "Qué bueno es sentir que suspiro de nuevo", time: 136 },
    { text: "Que tu roce y mi roce juntos forman fuego", time: 141 },
    { text: "Delicada llama", time: 146 },
    { text: "Que nunca se apaga", time: 148 },
    { text: "Sin ti yo me pierdo", time: 151 },
    { text: "Sin ti me vuelvo veneno", time: 153 },
    { text: "No entiendo el despertar sin un beso de esos", time: 156 },
    { text: "Sin tu aliento en mi cuello", time: 160 },
    { text: "Sin ti yo me pierdo", time: 163 },
    { text: "Sin ti me vuelvo veneno", time: 166 },
    { text: "No entiendo el despertar sin un beso de esos", time: 168 },
    { text: "Sin tu aliento en mi cuello", time: 173 },
    { text: " ", time: 176 },
    { text: "Sin ti yo me pierdo", time: 199 },
    { text: "Sin ti me vuelvo veneno", time: 201 },
    { text: "No entiendo el despertar sin un beso de esos", time: 204 },
    { text: "Sin tu aliento en mi cuello", time: 209 },
    { text: "Sin ti yo me pierdo", time: 211},
    { text: "Sin ti me vuelvo veneno", time: 213 },
    { text: "No entiendo el despertar sin un beso de esos", time: 216 },
    { text: "Sin tu aliento en mi cuello", time: 220 },
    { text: " ", time: 223 },
    { text: "Te amo mi vida te mereces lo mejor <3", time: 226 },
  ];

  // Animar las letras
  function updateLyrics() {
    var time = audio.currentTime;

    // Encuentra la última línea cuyo tiempo es <= tiempo actual
    var currentLine = null;
    for (var i = lyricsData.length - 1; i >= 0; i--) {
      if (time >= lyricsData[i].time) {
        currentLine = lyricsData[i];
        break;
      }
    }

    if (currentLine) {
      // Si la línea ha cambiado, actualiza y haz la transición
      if (lyrics.innerHTML !== currentLine.text) {
        lyrics.style.opacity = 0; // Oculta para la transición
        setTimeout(() => {
          lyrics.innerHTML = currentLine.text;
          lyrics.style.opacity = 1; // Muestra suavemente
        }, 300); // Pequeño retraso para la transición (ajusta si es necesario)
      }
    } else {
      lyrics.style.opacity = 0;
      lyrics.innerHTML = "";
    }
  }

  function loop() {
    updateLyrics();
    requestAnimationFrame(loop);
  }
  loop();

  setTimeout(() => {
    if (titulo) {
      titulo.style.opacity = 1;
      titulo.classList.add("fade-out");
      setTimeout(() => {
        titulo.classList.add("hidden");
      }, 3000);
    }
  }, 10000);

  // Función para ocultar el título y saludo después de 216 segundos (o cuando la música termina)
  function ocultarElementosFinales() {
    // Asegúrate de que los elementos estén visibles antes de intentar desvanecerlos
    if (titulo) {
      titulo.style.opacity = 1;
      titulo.classList.add("fade-out");
      setTimeout(() => {
        titulo.classList.add("hidden");
      }, 3000); // Coincide con la duración de la transición en CSS
    }

    if (saludoSuperior) {
      saludoSuperior.style.opacity = 1;
      saludoSuperior.classList.add("fade-out");
      setTimeout(() => {
        saludoSuperior.classList.add("hidden");
      }, 3000); // Coincide con la duración de la transición en CSS
    }

    // También ocultamos las letras de la canción
    lyrics.classList.add("fade-out"); // Añade fade-out para las letras también
    setTimeout(() => {
        lyrics.classList.add("hidden");
    }, 3000);

    // Muestra el botón de la carta después de que los elementos desaparezcan
    setTimeout(() => {
      mostrarBotonCarta();
    }, 3000); // Espera a que los fades terminen
  }


  function mostrarBotonCarta() {
    if (abrirCartaBtn.classList.contains("hidden")) {
      abrirCartaBtn.classList.remove("hidden");
      setTimeout(() => {
        abrirCartaBtn.classList.add("visible");
      }, 10);
    }
  }

  // Escuchar cuando la música termina
  audio.addEventListener("ended", () => {
    ocultarElementosFinales(); // Llama a la función para ocultar todo y mostrar el botón
  });

  // Listener para el botón de abrir la carta
  abrirCartaBtn.addEventListener("click", () => {
    abrirCartaBtn.classList.remove("visible");
    abrirCartaBtn.classList.add("hidden"); // Ocultar el botón después de clic

    // --- CAMBIO CLAVE AQUÍ ---
    // Muestra el nuevo div con el texto del mensaje
    mensajeTextoDiv.classList.remove("hidden");
    mensajeTextoDiv.classList.add("visible"); // Para aplicar la transición de opacidad
    // --- FIN CAMBIO CLAVE ---
  });

  // --- NUEVO LISTENER PARA CERRAR EL MENSAJE ---
  cerrarMensajeBtn.addEventListener("click", () => {
    mensajeTextoDiv.classList.remove("visible");
    // Opcional: añade un pequeño retraso para que la transición de opacidad se complete antes de hidden
    setTimeout(() => {
      mensajeTextoDiv.classList.add("hidden");
    }, 500); // 500ms, igual que la transición CSS
    // Si quieres que el botón "Abrir Carta" reaparezca al cerrar el mensaje:
    // abrirCartaBtn.classList.remove("hidden");
    // abrirCartaBtn.classList.add("visible");
  });
  // --- FIN NUEVO LISTENER ---

});

// Este script ya existía y es para el autoplay del audio con el primer clic/toque
// Es importante que esté fuera del DOMContentLoaded si lo quieres escuchar al inicio del script,
// o dentro si lo quieres ejecutar solo después de que el DOM esté listo.
// Mantendré la forma que tenías, pero asegúrate de no tener dos 'DOMContentLoaded' listeners si los fusionas.
window.addEventListener("DOMContentLoaded", () => {
  const musica = document.getElementById("musica");

  const iniciarAudio = () => {
    musica
      .play()
      .then(() => {
        console.log("🎵 Música reproduciéndose");
      })
      .catch((err) => {
        console.warn("Autoplay bloqueado:", err);
      });

    document.removeEventListener("click", iniciarAudio);
    document.removeEventListener("touchstart", iniciarAudio);
  };

  document.addEventListener("click", iniciarAudio);
  document.addEventListener("touchstart", iniciarAudio);
});