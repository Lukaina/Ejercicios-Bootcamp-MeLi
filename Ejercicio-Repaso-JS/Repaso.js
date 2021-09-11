/* 1. Crear una función constructora la cual vamos a llamar Computadora 
y debe contener unas propiedades: ram:string, cpu:string, disco:string,
monitor:string, gpu:boolean */

function Computadora(ram, cpu, disco, monitor, gpu) {
    this.ram = ram,
    this.cpu = cpu,
    this.disco = disco,
    this.monitor = monitor,
    this.gpu = gpu
}

/* 2. Crear 5 computadoras distintas y guardarlas (Array)
de manera que luego podamos consultar cuántas computadoras tenemos y poder mostrarlas por consola. 
Además queremos ver el detalle de cada computadora por consola. */


const computadoras = [];

computadoras.push(new Computadora('8GB', 'AMD RYZEN 5', '200GB SSD', 'Monitor Asus', true),
                  new Computadora('12GB', 'INTEL CORE I5', '1TB HDD', 'Monitor HP', true),
                  new Computadora('8GB', 'AMD RYZEN 3', '300GB SSD', 'Monitor Samsung', false),
                  new Computadora('16GB', 'INTEL CORE I9', '500G SSD', 'Monitor Asus', true),
                  new Computadora('8GB', 'INTEL CORE I8', '1TB HDD', 'Monitor Lenovi', false));

console.log(computadoras);

/* 3. Crear un nuevo Array a partir del primero, 
donde vamos a guardar solamente las computadoras con gpu. */

const computadorasGpu = computadoras.filter(element => element.gpu);

console.log(computadorasGpu);

// ---

/* 4. Crear una función que calcule cuántos litros de nafta gasta un auto
que consume 2 litros cada 100km, ingresando por parámetro la cantidad de 
kilómetros del recorrido a realizar. Luego crear una función que, 
a partir de ese dato, devuelva cuánto significa eso en pesos ingresando 
por parámetro el precio del litro de nafta. */


const calcularLitrosNafta = kilometros => 2 * kilometros / 100; 

const litrosPorKm = calcularLitrosNafta(500)

const calcularPrecioRecorrido = (litros, precio) => litros * precio;

console.log(calcularPrecioRecorrido(litrosPorKm, 200));

// ---

/* 5. Crear un array que contenga números del 1 al 10. 
Retornar un nuevo array que contenga todos los números multiplicados por dos */

const numeros = [];

for(let i = 1; i <= 100; i++) {
    numeros.push(i);
}

const numerosPorDos = numeros.map(numero => numero * 2);
console.log(numerosPorDos);

/* 6. Del array que devuelve el ejercicio número 5, 
filtrar los que sean mayores a 5 */

const numerosFiltrados = numerosPorDos.filter(numero => numero > 5);
console.log(numerosFiltrados)

/* 7. Del array que devuelve el ejercicio 6, 
buscar el primero que sea mayor a 10 */

const primerNumero = numerosFiltrados.find(numero => numero > 10);
console.log(primerNumero);

/* 8.  Dado el siguiente array filtremos a los pokémons con poder menor a 10. */

const pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
    { nombre: 'bulbasaur', poder: 6 },
    { nombre: 'charizard', poder: 19 },
    { nombre: 'squirtle', poder: 3 },
    { nombre: 'metwo', poder: 6 }, 
]

const pokemonesFiltrados = pokemones.filter(pokemon => pokemon.poder < 10);
console.log(pokemonesFiltrados);
    

