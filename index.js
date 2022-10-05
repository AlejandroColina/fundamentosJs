const getDocument = () => {

    let documents = document.getElementById("document").value

    if (documents.length != 10) return alert("La cédula debe ser de 10 caracteres")
    if (isNaN(parseInt(documents))) return alert("La cédula debe ser un valor numérico")

    let resultado = verificarCedula(documents)
    if (resultado) {
        alert("El número de documento ingresa es correcto")
    } else {
        alert("El número ingresado no es correcto")
    }
}


const verificarCedula = (cedula) => {
    if (typeof (cedula) == 'string' && cedula.length == 10 && /^\d+$/.test(cedula)) {
        var digitos = cedula.split('').map(Number);
        var codigo_provincia = digitos[0] * 10 + digitos[1];

        if (codigo_provincia >= 1 && (codigo_provincia <= 24 || codigo_provincia == 30)) {
            var digito_verificador = digitos.pop();

            var digito_calculado = digitos.reduce(
                function (valorPrevio, valorActual, indice) {
                    return valorPrevio - (valorActual * (2 - indice % 2)) % 9 - (valorActual == 9) * 9;
                }, 1000) % 10;
            return digito_calculado === digito_verificador;
        }
    }
    return false;
}