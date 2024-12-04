// for(let i = 1; i<= 5 ; i++){
//     let nombre = prompt("Ingresa el nombre");
//     console.log("Nombre "+i+": "+nombre);
// }

// let i = "VICTOR";
// while (i == "VICTOR") {
//     console.log(i)
//     i == prompt("ingresa el nombre")

// }

// function saludar(nombre) {
//     console.log("hola"+nombre+"!")
// }

// saludar(" victor");
// saludar(" Dailys");

// console.log(dividir);

// function sumar(y,u) {
//     return y+u
// }

// let suma = sumar(2,5)

function dividir(a, b) {
  if (b == 0) {
    console.log("No se puede dividir por cero");
  } else {
    return a / b;
  }
}

function multiplicar(a, b) {
  return a * b;
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

let continuar = true;  // Variable para controlar el bucle

while (continuar) {
  let dato = parseInt(prompt("1: Divide   2: Multiplicación    3: Suma     4: Resta"));

  if (dato == 1) {
    let a = parseInt(prompt("Ingresa el primer número para dividir"));
    let b = parseInt(prompt("Ingresa el segundo número para dividir"));
    let resultado = dividir(a, b);
    if (resultado !== undefined) {
      console.log("El resultado de la división es: " + resultado);
    }
  } else if (dato == 2) {
    let a = parseInt(prompt("Ingresa el primer número para multiplicar"));
    let b = parseInt(prompt("Ingresa el segundo número para multiplicar"));
    let resultado = multiplicar(a, b);
    console.log("El resultado de la multiplicación es: " + resultado);
  } else if (dato == 3) {
    let a = parseInt(prompt("Ingresa el primer número para sumar"));
    let b = parseInt(prompt("Ingresa el segundo número para sumar"));
    let resultado = sumar(a, b);
    console.log("El resultado de la suma es: " + resultado);
  } else if (dato == 4) {
    let a = parseInt(prompt("Ingresa el primer número para restar"));
    let b = parseInt(prompt("Ingresa el segundo número para restar"));
    let resultado = restar(a, b);
    console.log("El resultado de la resta es: " + resultado);
  } else {
    console.log("No existe ese parámetro");
  }

  // Validación para la pregunta de salida
  let salir;
  do {
    salir = parseInt(prompt("¿Desea salir de la calculadora? 1: Sí  2: No"));
    if (salir !== 1 && salir !== 2) {
      console.log("Parámetro no existente. Por favor ingresa 1 para salir o 2 para continuar.");
    }
  } while (salir !== 1 && salir !== 2);  // Repite hasta que sea 1 o 2

  // Si el usuario ingresa '1', salir del bucle
  if (salir == 1) {
    continuar = false;
    console.log("¡Hasta luego!");
  }
}

