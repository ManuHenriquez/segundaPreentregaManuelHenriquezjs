import { generarBotonContraseñas } from "./generadorPassword";

function generadorPassword() {
    alert("Bienvenido al generador de contrasenia");
    alert("Vamos a establecer tu nueva contrasenia");
    alert("expertos aseguran que una longitud entre 12 a 18 caracteres es lo ideal");


    let nuevaContrasenia = true
    let contadorCiclos = 0
    while (nuevaContrasenia == true) {

        let nombre
        if (contadorCiclos === 0) {
            nombre = prompt("Ingresa tu nombre (la primera letra debe estar en mayuscula");
        } else {
            nombre = prompt("Ingresa tu nombre de nuevo (la primera letra debe estar en mayuscula");

        }

        let fecha = prompt("Ingresa tu fecha de nacimiento ")
        let caracterEspecial = prompt("Ingresa un caracter especial (,| . | $ | ; por ejemplo)")
        let nFavorito = prompt("ingresa tu numero favorito")


        passwordNueva=fecha+nombre+caracterEspecial+nFavorito

        console.log(passwordNueva)

        alert("Tu nueva contraseña es" + passwordNueva)
        
        let respuesta = prompt("¿Quieres crear otra contraseña? (si/no)").toLocaleUpperCase();
        if (respuesta !== 'si') {
            nuevaContrasenia =false;
        }
        contadorCiclos- contadorCiclos + 1
    }

    alert("Gracias por utilizar el generador de contrasenia")
}

generadorPassword();
function constructorPassword8(_nombre, _fecha, _caracter, _numero, Contrasenias) {

    for (let i = 0; i < Contrasenias.length; i++) {
        if (Contrasenias[i].nombre) {
            Contrasenias[i] = Contrasenias[i].nombre + Contrasenias[i].fecha + Contrasenias[i].caracter + Contrasenias[i].numero;
            console.log("La contraseña " + i + " es: " + Contrasenias[i]);
        } else {
            continue;
        }
    }
    let DivPassword = document.getElementById("generadorPassword");
    // DivPassword.innerHTML = "Tu contraseña Nro " + contadorCiclos + " es " + password;
    // DivPassword.className = "text-danger";
    DivPassword.innerHTML = "Se genero tu contraseña correctamente!";
    DivPassword.className = "text-success";
    generarBotonContraseñas(Contrasenias);


}
