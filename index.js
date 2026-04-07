const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');

openModal.addEventListener('click', function() {
    modalOverlay.classList.add('active');
});

closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});