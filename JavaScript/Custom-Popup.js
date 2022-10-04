// Get element
const modal = document.getElementById('CMPJS');
// Get buttons
const openBtn = document.getElementById('CMP-Btn');
const closeBtn = document.getElementById('CMP-CloseBtn')

// On button click executes funtion
openBtn.addEventListener('click', OpenModal )
closeBtn.addEventListener('click', CloseModal)


function OpenModal()
{
    modal.style.display = 'block';
}

function CloseModal()
{
    modal.style.display = 'none';
}