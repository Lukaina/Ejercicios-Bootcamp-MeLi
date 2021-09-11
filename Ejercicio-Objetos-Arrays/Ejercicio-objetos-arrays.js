function cuentaBancaria(nombre, numeroCuenta, apellido) {
    this.nombre = nombre;
    this.numeroCuenta = numeroCuenta;
    this.apellido = apellido;
    this.saldo = 0;
    this.movimientos = []
    this.mostrarNombre = function() {
        console.log(`El nombre completo es: ${this.nombre} ${this.apellido}`)
    }

    this.debitar = function(valor) {
        if(this.saldo < valor) {
            console.log("¡Saldo insuficiente!");
        } else {
            this.saldo += valor
            this.movimientos = [...this.movimientos, `¡Se ha debitado ${valor}!`];
            console.log(`¡Dinero debitado: ${valor}!`)
            console.log(this.saldo, this.movimientos)
        }
    }
    
    this.acreditar = function(dinero) {
        this.saldo += dinero
        this.movimientos = [...this.movimientos, `¡Se ha acreditado ${dinero}!`];
        console.log(`¡Dinero acreditado: ${dinero}!`)
        console.log(this.saldo, this.movimientos)
    }
    
    this.movimientosCuenta = function() {
        console.log(this.movimientos);
    }
    
    this.dineroCuenta = function() {
        console.log(`Su saldo en la cuenta es ${dinero}`);
    }
}


const nuevaCuentaBancaria1 = new cuentaBancaria("Verónica", "0123", "Alcaraz")
const nuevaCuentaBancaria2 = new cuentaBancaria("Juanito", "3210", "Peréz")

nuevaCuentaBancaria1.mostrarNombre()
const acreditar1 = nuevaCuentaBancaria1.acreditar(10000)
const debitar1 = nuevaCuentaBancaria1.debitar(5000)

nuevaCuentaBancaria2.mostrarNombre()
const acreditar2 = nuevaCuentaBancaria2.acreditar(30000)
const debitar2 = nuevaCuentaBancaria2.debitar(2000)

