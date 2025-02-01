const form = document.querySelector('form');
const resp = document.querySelector('#resp');

form.addEventListener("submit", (e) => { 
    e.preventDefault();

    const customerName = form.customerName.value;
    const height = parseFloat(form.heightNum.value);
    
    // Ensure gender radio buttons are selected correctly
    const sexFem = document.getElementById('checkFem').checked;
    const sexMasc = document.getElementById('checkMasc').checked;

    // Check if one of the genders is selected
    if (!sexFem && !sexMasc) {
        resp.innerText = "Por favor, selecione seu gênero.";
        return;
    }

    const imcMen = Number(21) * height * height;
    const imcWomen = Number(22) * height * height;

    if (sexFem) {
        resp.innerText = `${customerName}, seu peso ideal deve ser igual a ${imcWomen.toFixed(2)} kg`;
    } else if (sexMasc) {
        resp.innerText = `${customerName}, seu peso ideal deve ser igual a ${imcMen.toFixed(2)} kg`;
    }
});

function removeChecked() {
    const ele = document.querySelectorAll('#gender input[type="radio"]');
    ele.forEach(input => input.checked = false);
}