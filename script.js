const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const galleryItems = document.querySelectorAll('.gallery-item');
const imageGallery = document.querySelector('.image-gallery');
let currentIndex = 0;

// Function to show caption for the current image
function showCaption(index) {
    galleryItems.forEach(item => {
        const caption = item.querySelector('figcaption');
        caption.style.transform = 'translateY(100%)'; 
    });
    const currentCaption = galleryItems[index].querySelector('figcaption');
    currentCaption.style.transform = 'translateY(0)'; 
}

// Function to translate the image gallery to the specified index
function translateGallery(index) {
    const offset = -index * 100;
    imageGallery.style.transform = `translateX(${offset}%)`; 
}

// Event listener for clicking the left arrow
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        translateGallery(currentIndex);
        showCaption(currentIndex);
        rightArrow.classList.remove('disabled'); // Enable right arrow if moving left
    }
    if (currentIndex === 0) {
        leftArrow.disabled = true;
        leftArrow.classList.add('disabled'); // Add disabled style to left arrow
    }
});

// Event listener for clicking the right arrow
rightArrow.addEventListener('click', () => {
    if (currentIndex < galleryItems.length - 1) {
        currentIndex++;
        translateGallery(currentIndex);
        showCaption(currentIndex);
        leftArrow.classList.remove('disabled'); // Enable left arrow if moving right
    }
    if (currentIndex === galleryItems.length - 1) {
        rightArrow.disabled = true;
        rightArrow.classList.add('disabled'); // Add disabled style to right arrow
    }
});

// Event listener for scrolling
document.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        leftArrow.click();
    } else {
        rightArrow.click();
    }
});

// Disable left arrow when page first loads
leftArrow.disabled = true;
leftArrow.classList.add('disabled');

// Show caption for the first image
showCaption(currentIndex);



/* -------------Modal Functionality---------------- */
const modal = document.getElementById("modal");
const triggerModal = document.getElementById("trigger-modal");
const closeModal = document.getElementById("close-modal");

triggerModal.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

document.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});
