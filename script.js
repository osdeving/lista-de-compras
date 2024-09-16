const checkboxInput = document.querySelector('.checkbox-input');
const checkboxCustomizado = document.querySelector('.checkbox-customizado');

checkboxCustomizado.addEventListener('click', function() {
    checkboxInput.checked = !checkboxInput.checked;
    checkboxCustomizado.classList.toggle('checked');
});
