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
