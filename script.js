function openModal(element) {
    if (!element) {
        console.error('No element provided to openModal');
        return;
    }

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.querySelector('.modal-caption');
    const img = element.querySelector('img');

    if (!modal || !modalImg || !caption || !img) {
        console.error('Required elements not found');
        return;
    }

    modalImg.src = img.src;
    modalImg.alt = img.alt;
    caption.textContent = img.alt;
    modal.classList.add('show');
    modal.style.display = 'flex';

    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    modal.classList.remove('show');
    modal.style.display = 'none';
    
    // Restore body scrolling
    document.body.style.overflow = '';
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Add keyboard support for closing
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        
        if (img.complete) {
            // Image is already loaded (probably from cache)
            item.classList.add('loaded');
        } else {
            // Wait for image to load
            img.onload = () => {
                item.classList.add('loaded');
            };
        }
    });
});