function Computadora(ram, cpu, disco, monitor, gpu) {
    this.ram = ram,
    this.cpu = cpu,
    this.disco = disco,
    this.monitor = monitor,
    this.gpu = gpu
}

const computadoras = [];

computadoras.push(new Computadora('8GB', 'AMD RYZEN 5', '200GB SSD', 'Monitor Asus', true),
                  new Computadora('12GB', 'INTEL CORE I5', '1TB HDD', 'Monitor HP', true),
                  new Computadora('8GB', 'AMD RYZEN 3', '300GB SSD', 'Monitor Samsung', false),
                  new Computadora('16GB', 'INTEL CORE I9', '500G SSD', 'Monitor Asus', true),
                  new Computadora('8GB', 'INTEL CORE I8', '1TB HDD', 'Monitor Lenovi', false));

console.log(computadoras);

const computadorasGpu = computadoras.filter(element => element.gpu);

console.log(computadorasGpu);

// ---

const calcularLitrosNafta = kilometros => 2 * kilometros / 100; 

const litrosPorKm = calcularLitrosNafta(500)

const calcularPrecioRecorrido = (litros, precio) => litros * precio;

console.log(calcularPrecioRecorrido(litrosPorKm, 200));