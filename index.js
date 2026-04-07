const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');

const progressFill = document.getElementById('progressFill');
const progressText = document.querySelector('.progress-text');

openModal.addEventListener('click', function() {
    modalOverlay.classList.add('active');
    startProgress();
});

closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    resetProgress();
});

modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        resetProgress();
    }
});


function startProgress() {
    let progress = 0;
    const duration = 3000;
    const interval = 30;
    const increment = 100 / (duration / interval);
    
    const animate = setInterval(function() {
        progress += increment;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(animate);
        }
        
        progressFill.style.width = progress + '%';
        
        const textPosition = progressText.offsetLeft;
        const fillWidth = progressFill.offsetWidth;
        
        if (textPosition < fillWidth) {
            progressText.style.color = 'white';
        } else {
            progressText.style.color = '#333';
        }
    }, interval);
}

function resetProgress() {
    progressFill.style.width = '0%';
    progressText.style.color = '#333';
}