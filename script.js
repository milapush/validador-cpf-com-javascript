console.log('javascript carregado');

function validaCFP(cpf) {
    console.log(cpf.length)
    if(cpf.length != 11) {
        return false;
    } else {
        return true;
    }
}

function validacao() {
    console.log('iniciando validacao CPF');

    const cpf = document.getElementById('cpf_digitado').value
    console.log(cpf)

    const resultadoValidacao = validaCFP(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block'
    }
}