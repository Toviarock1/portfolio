const label = document.querySelector('label');
const checkbox = document.querySelector('#toggle');

label.addEventListener('click', () => {
    if (checkbox.checked){
        label.innerHTML = '&#9776;'
    } else if(!checkbox.checked){
        label.innerHTML = '&times;'
    }
});