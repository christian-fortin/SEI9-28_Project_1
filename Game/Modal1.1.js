
// MODAL:
/////////////////////////////////////////////////////////////
// Grabbing the btn to open the modal
const openBtn = document.getElementById('about');
// Grab a modal element
const modal = document.getElementById('modal')
// Grab a close button
const close = document.getElementById('close')

// Define a function that will set modal's display to block
const openModalFunction = () => {
    modal.style.display = 'block';
}

// Event listener on the button
openBtn.addEventListener('click', openModalFunction)

// Here is the closeModal func
const closeModalFunction = () => {
    modal.style.display = 'none';
}

close.addEventListener('click', closeModalFunction)
/////////////////////////////////////////////////////////////

