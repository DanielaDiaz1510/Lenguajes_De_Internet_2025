const abrirModalBtn = document.getElementById('abrirModalBtn');
const cerrarModalBtn = document.getElementById('cerrarModalBtn');
const modalOverlay = document.getElementById('modalOverlay');


abrirModalBtn.addEventListener('click', function() {
    modalOverlay.classList.add('visible');
});


cerrarModalBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('visible');
});


modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('visible');
    }
});