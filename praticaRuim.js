// index.js

async function checkCPF(cpf) {
    const response = await fetch('https://exemplo.com/api/cpf/status?cpf=' + cpf);
    const data = await response.json();
    console.log(data);
}

function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length != 11) {
        return false;
    }
    return true;
}

const cpf = '123.456.789-09';
if (validateCPF(cpf)) {
    checkCPF(cpf);
} else {
    console.log('CPF inválido');
}
