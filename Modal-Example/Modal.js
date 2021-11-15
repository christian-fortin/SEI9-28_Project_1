// Grabbing the btn to open the modal
const openBtn = document.getElementById('openModal');
// Same thing in jQuery
// const openBtn = $('#openModal')

// Grab a modal element
const modal = document.getElementById('modal')
// jQuery
// const modal = $('#modal')

// We are going to define a function that will set modal's display to block
const openModalFunction = () => {
    modal.style.display = 'block';
}

// Geab a close button
const close = document.getElementById('close')
// jQuery
// const close = $('#close')

// Let's set an evwnt listener on the button
openBtn.addEventListener('click', openModalFunction)

// In jQuery
// $('#openModal').on('click', function() {
//     $('#modal').css('display', 'block');
// })


// Here is the closeModal func
const closeModalFunction = () => {
    modal.style.display = 'none';
}

// Attach a listener to close the modal
close.addEventListener('click', closeModalFunction)

// in jQuery
// $('#close').on('click', function() {
//     $('#modal').css('display', 'none');
// })

// Let's look at setTimeout functions
// MAGIC
// setTimeout(openModalFunction, 5000);
// setTimeout(closeModalFunction, 6000);