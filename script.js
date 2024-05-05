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

// Function to update tabindex attributes for images
function updateTabIndices() {
    galleryItems.forEach((item, index) => {
        const image = item.querySelector('img');
        const figcaption = item.querySelector('figcaption');
        if (index === currentIndex) {
            image.tabIndex = 11; // Set tabindex to 8 for the current image
            figcaption.tabIndex = -1; // Set tabindex to -1 for the current figcaption
        } else {
            image.tabIndex = -1; // Set tabindex to -1 for other images
            figcaption.tabIndex = -1; // Set tabindex to -1 for other figcaptions
        }
    });
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
        updateTabIndices(); // Update tabindex attributes
        showCaption(currentIndex);
        rightArrow.classList.remove('disabled'); // Enable right arrow if moving left
        rightArrow.removeAttribute('aria-disabled');
    }
    if (currentIndex === 0) {
        leftArrow.disabled = true;
        leftArrow.classList.add('disabled'); // Add disabled style to left arrow
        leftArrow.setAttribute('aria-disabled', 'true');
    }
});

// Event listener for clicking the right arrow
rightArrow.addEventListener('click', () => {
    if (currentIndex < galleryItems.length - 1) {
        currentIndex++;
        translateGallery(currentIndex);
        updateTabIndices(); // Update tabindex attributes
        showCaption(currentIndex);
        leftArrow.classList.remove('disabled'); // Enable left arrow if moving right
        leftArrow.removeAttribute('aria-disabled');
    }
    if (currentIndex === galleryItems.length - 1) {
        rightArrow.disabled = true;
        rightArrow.classList.add('disabled'); // Add disabled style to right arrow
        rightArrow.setAttribute('aria-disabled', 'true');
    }
});

// Event listener for scrolling only when hovering over the banner
document.querySelector('.banner').addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        leftArrow.click();
    } else {
        rightArrow.click();
    }
});

// Event listener for changing image when left/right arrow keys are pressed
document.addEventListener('keydown', event => {
    if (event.key === "ArrowLeft") {
        leftArrow.click();
    } else if (event.key === "ArrowRight") {
        rightArrow.click();
    }
});


// Disable left arrow when page first loads
leftArrow.disabled = true;
leftArrow.classList.add('disabled');
leftArrow.setAttribute('aria-disabled', 'true');

// Show caption for the first image
showCaption(currentIndex);

// Update tabindex attributes for the first image
updateTabIndices(); // Update tabindex attributes


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


/* -------------Responsiveness Features---------------- */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.querySelector('.menu').classList.toggle('active');
    });
});

// Function to handle screen width changes
function handleScreenWidthChange() {
    if (window.innerWidth < 1024) {
        document.querySelector('.menu-toggle').tabIndex = 1;
    }
}

// Event listener for screen width changes
window.addEventListener('resize', handleScreenWidthChange);