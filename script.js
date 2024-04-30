const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const galleryItems = document.querySelectorAll('.gallery-item');
const imageGallery = document.querySelector('.image-gallery');
let currentIndex = 0;

function showCaption(index) {
    galleryItems.forEach(item => {
        const caption = item.querySelector('figcaption');
        caption.style.transform = 'translateY(100%)'; 
    });
    const currentCaption = galleryItems[index].querySelector('figcaption');
    currentCaption.style.transform = 'translateY(0)'; 
}

showCaption(0);

function translateGallery(index) {
    const offset = -index * 100;
    imageGallery.style.transform = `translateX(${offset}%)`; 
}

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


// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var triggerModal = document.getElementById("trigger-modal");

// Get the close button
var closeModal = document.getElementById("close-modal");

// When the user clicks the button, open the modal
triggerModal.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
