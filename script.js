let currentAudio = null;

// Función para crear la lluvia de corazones
function crearCorazones() {
    for (let i = 0; i < 15; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon';
        corazon.innerHTML = '❤️';
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.bottom = "-5vh";
        corazon.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(corazon);
        setTimeout(() => corazon.remove(), 3000);
    }
}

// Función para reproducir música y mostrar foto ampliada
function playSong(audioPath, imgPath, titulo, mensaje) {
    if (currentAudio) currentAudio.pause();
    
    currentAudio = new Audio(audioPath);
    currentAudio.play().catch(() => console.log("Audio esperando interacción"));

    crearCorazones();

    document.getElementById('imagen-ampliada').src = imgPath;
    document.getElementById('titulo-recuerdo').innerText = titulo;
    document.getElementById('mensaje-recuerdo').innerText = mensaje;
    document.getElementById('player-overlay').classList.remove('hidden');
}

function stopSong() {
    if (currentAudio) currentAudio.pause();
    document.getElementById('player-overlay').classList.add('hidden');
}

// Funciones para la Carta Final
function abrirCarta() {
    crearCorazones();
    document.getElementById('carta-overlay').classList.remove('hidden');
}

function cerrarCarta() {
    document.getElementById('carta-overlay').classList.add('hidden');
}