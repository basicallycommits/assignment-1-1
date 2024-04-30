const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

function showImage(index) {
    galleryItems.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Function to show caption for the currently displayed image
function showCaption(index) {
    // Hide all captions
    galleryItems.forEach(item => {
        const caption = item.querySelector('figcaption');
        caption.style.display = 'none';
    });
    // Show caption for the current image
    const currentCaption = galleryItems[index].querySelector('figcaption');
    currentCaption.style.display = 'block';
}


// Initially, show the caption for the first image
showCaption(0);

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
    showCaption(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
    showCaption(currentIndex);
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
