const products = [
  { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
  { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
  { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
  { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
  { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
  { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];

const productosConDescuento = products.filter((product) => {
    return product.discount > 0;
});

//console.log("Productos con descuento: ", productosConDescuento);
//console.log(productosConDescuento);

const productosConPrecioFinal = products.map((product) => {
    if (product.discount > 0) {
        const priceAfterDiscount = product.price - (product.price * product.discount / 100);
        return { ...product, priceAfterDiscount: priceAfterDiscount.toFixed(2) };
    }
    return { ...product, priceAfterDiscount: product.price.toFixed(2) };
});

//console.log("Productos con precio final: ", productosConPrecioFinal);
//console.log(productosConPrecioFinal);

const productosConStockBajo = [];
products.forEach((product) => {
    if (product.stock < 5) {
        productosConStockBajo.push(product);
    }
});

//console.log("Productos con menos de 5 unidades: ", productosConStockBajo);
//console.log(productosConStockBajo);

const actualizarStock = (nombreProducto, cantidad) => {
    try {
        const producto = products.find((product) => product.name === nombreProducto);
        if (!producto) {
            throw new Error("Producto no encontrado");
        }
        producto.stock += cantidad;
        console.log(`Stock actualizado para ${nombreProducto}: ${producto.stock} unidades`);
    } catch (error) {
        console.error(error.message);
    }
}

//actualizarStock("Pan", 10);
//actualizarStock("Café", 5);

const resumenPorCategorias = () => {
  const resumen = {};
  for (const product of products) {
    if (!resumen[product.category]) {
      resumen[product.category] = 1;
    } else {
      resumen[product.category] = 1 + resumen[product.category];
    }
  }
  return resumen;
};

//console.log("Resumen por categorías: ", resumenPorCategorias());
//console.log(resumenPorCategorias());