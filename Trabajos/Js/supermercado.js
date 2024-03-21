class Product {
    constructor(code, name, price, category) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CashRegister {
    constructor(id) {
        this.id = id;
        this.totalSales = 0;
    }

    registerProduct(product, quantity) {
        let total = product.price * quantity;
        if (product.code === supermarket.specialDiscountProductCode) {
            total *= 0.9; // 10% de descuento
        }
        this.totalSales += total;
        return total * 1.19; // Incluyendo el IVA
    }

    close() {
        console.log(`Total ventas en caja ${this.id}: ${this.totalSales}`);
    }
}

class Supermarket {
    constructor() {
        this.products = [];
        this.cashRegisters = [new CashRegister(1), new CashRegister(2), new CashRegister(3)];
        this.specialDiscountProductCode = null;
    }

    addProduct(product) {
        this.products.push(product);
    }

    setSpecialDiscountProduct(code) {
        this.specialDiscountProductCode = code;
    }

    close() {
        let totalSales = 0;
        for (let cashRegister of this.cashRegisters) {
            cashRegister.close();
            totalSales += cashRegister.totalSales;
        }
        console.log(`Total ventas del supermercado: ${totalSales}`);
    }
}

let supermarket = new Supermarket();
supermarket.addProduct(new Product(1, 'Manzanas', 1000, 'Frutas'));
supermarket.addProduct(new Product(2, 'Leche', 2000, 'Lácteos'));
supermarket.setSpecialDiscountProduct(1);

let totalToPay = supermarket.cashRegisters[0].registerProduct(supermarket.products[0], 5);
console.log(`Total a pagar: ${totalToPay}`);

supermarket.close();