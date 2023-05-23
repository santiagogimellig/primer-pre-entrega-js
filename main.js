//Funcion
function obtenerNumero(mensaje) {
    let numero = prompt(mensaje);
    while (isNaN(numero)) {
        alert("Número incorrecto. Vuelva a intentarlo.");
        numero = prompt(mensaje);
    }
    return parseFloat(numero);
}

let ingreso = prompt('Bienvenido a la calculadora virtual! Si desea continuar ingrese "1", si desea salir ingrese "2".');

//Casos en los que el usuario no ingresa ni 1 ni 2.
while(ingreso != "1" && ingreso != "2"){
    alert("Vuelva a interarlo");
    ingreso = prompt('Bienvenido a la calculadora virtual! Si desea continuar ingrese "1", si desea salir ingrese "2".');
}
let numero1;
let numero2;

//Bucle while para que el usuario pueda resolver varias operaciones si lo desea
while(ingreso){    
    if(ingreso == "1"){
        alert("Ingrese por separado dos números y luego la operación que desea realizar");

        numero1 = obtenerNumero("Ingrese el primer número");
        numero2 = obtenerNumero("Ingrese el segundo número");

        let operacion = prompt('Ingrese la operación que desea realizar entre ambos números: si desea sumar ingrese “+” , si desea restar ingrese “-“, si desea multiplicar ingrese “*”, si desea dividir ingrese “/“ o “p” para promediar');
        while(operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/" && operacion != "p"){
            alert("Operación incorrecta. Vuelva a intentarlo.");
            operacion = prompt("Ingrese nuevamente la operación que desea realizar entre ambos números: si desea sumar ingrese “+”, “-“ para restar, “*” para multiplicar, “/“ para dividir o “p” para promediar'");
        }

        let solucion;
        
        switch (operacion) {
            case "+":
                solucion = numero1 + numero2;
                alert(numero1 + " + " + numero2 + " = " + solucion);
                break;
            case "-":
                solucion = numero1 - numero2;
                alert(numero1 + " - " + numero2 + " = " + solucion);
                break;
            case "*":
                solucion = numero1 * numero2;
                alert(numero1 + " * " + numero2 + " = " + solucion);
                break;
            case "/":
                if (numero2 === 0) {
                    solucion = "Math Error";
                    alert(numero1 + " / " + numero2 + " = " + solucion);
                } else if (numero2 !== 0) {
                    solucion = numero1 / numero2;
                    alert(numero1 + " / " + numero2 + " = " + solucion);
                }
                break;
            case "p":
                solucion = (numero1 + numero2) / 2;
                alert("( " + numero1 + " + " + numero2 + " ) / 2 = " + solucion);
                break;
        }
        ingreso = prompt("Si desea realizar otra operación ingrese 1, de lo contrario ingrese 2");
    }
    else if(ingreso == "2"){
        alert("Vuelva pronto!");
        break;
    }else{
        alert("Vuelva a intentarlo.");
        ingreso = prompt("Si desea realizar otra operación Ingrese 1, de lo contrario ingrese 2");
    }
}