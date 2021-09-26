/* Ejercicio 1: Teniendo en cuenta el siguiente array, 
el objetivo es que puedas mostrar por consola la suma total de las cantidades indicadas. */
 
const price = [100, 101, 35, 20, 43, 76];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(`El total de la suma es ${price.reduce(reducer)}`);

/* Ejercicio 2: Teniendo en cuenta el siguiente array, 
debes mostrar por consola el nombre de cada persona. 
Para ello tendremos que recorrer persona por persona y obtener sólo el nombre. */

const list = [
    {name: 'Martin', edad: '23'}, {name: 'Lucas', edad: '18'}, {name: 'Egdar', edad: '33'}, {name: 'Lucía', edad: '28'}, {name: 'Florencia', edad: '25'}, {name: 'Eugenia', edad: '26'}
]

const listNames = list.map(lists => lists.name);
console.log(listNames);

/* Ejercicio 3: Usando el mismo array del ejercicio anterior:
Crear uno nuevo solo con las personas que sean mayores de 25 y devolver el nuevo array por consola. */

const listAges = list.filter(lists => lists.edad > 25);
console.log(listAges);

/* Ejercicio 4: Utilizando el mismo array del ejercicio 2, 
devolver la primer persona del array que tenga 23 años. */

const listFirstPerson = list.find(lists => lists.edad == 23);
console.log(listFirstPerson);


    