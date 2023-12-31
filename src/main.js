"use strict";
const costumers = [
    { id: 100312, firstname: "Mario", lastname: "Rossi", age: 27, email: "Mario.Rossi@gmail.com", phone: 3245522654, locale: "Italia", billingAddress: { street: "Via dei Tulipani", city: "Milano", state: "Italia", postalCode: 20019 }, shippingAddress: { street: "Via dei Tulipani", city: "Milano", state: "Italia", postalCode: 20019 } },
    { id: 214122, firstname: "Antonio", lastname: "Verdi", age: 47, email: "Antonio.Verdi@gmail.com", phone: 3285643876, locale: "Italia", billingAddress: { street: "Via delle Rose", city: "Torino", state: "Italia", postalCode: 58741 }, shippingAddress: { street: "Via delle Rose", city: "Torino", state: "Italia", postalCode: 58741 } }
];
const avaibleProducts = [
    { code: "A1", name: "Prodotto 1", variants: ["Variante 1", "Variante 2"], description: "Prodotto 1 ........", price: 100, retailer: "Retailer 1" },
    { code: "A2", name: "Prodotto 2", variants: ["Variante 1", "Variante 2", "Variante 3"], description: "Prodotto 2 ........", price: 120, retailer: "Retailer 2" },
    { code: "A3", name: "Prodotto 3", variants: ["Variante 1",], description: "Prodotto 3 ........", price: 60, retailer: "Retailer 3" },
    { code: "A4", name: "Prodotto 4", variants: ["Variante 1", "Variante 2", "Variante 3", "Variante 4"], description: "Prodotto 4 ........", price: 40, retailer: "Retailer 4" },
    { code: "A5", name: "Prodotto 5", variants: ["Variante 1",], description: "Prodotto 5 ........", price: 21, retailer: "Retailer 5" },
];
let selectedProducts;
// Funzione per aggiungere un prodotto
function addSelectedProduct(product, quantity) {
    const lineItemId = selectedProducts.length + 1;
    const orderLineItem = {
        id: lineItemId,
        product,
        amount: product.price * quantity,
        quantity
    };
    selectedProducts.push(orderLineItem);
}
function removeSelectedProduct(lineItemId) {
    selectedProducts = selectedProducts.filter(item => item.id !== lineItemId);
}
function updateSelectedProductQuantity(lineItemId, quantity) {
    selectedProducts = selectedProducts.map(item => {
        if (item.id === lineItemId) {
            item.quantity = quantity;
            item.amount = item.product.price * quantity;
        }
        return item;
    });
}
