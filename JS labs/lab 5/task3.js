function manageStock(currentStock, orderedProducts) {
    const stock = {};

    for (let i = 0; i < currentStock.length; i += 2) {
      const product = currentStock[i];
      const quantity = parseInt(currentStock[i + 1]);
      stock[product] = quantity;
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
      const product = orderedProducts[i];
      const quantity = parseInt(orderedProducts[i + 1]);
  
      if (stock.hasOwnProperty(product)) {
        stock[product] += quantity;
      } else {
        stock[product] = quantity;
      }
    }

    for (const product in stock) {
      if (stock.hasOwnProperty(product)) {
        console.log(`${product} -> ${stock[product]}`);
      }
    }
  }

const currentStock = ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"];
const orderedProducts = ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"];

manageStock(currentStock, orderedProducts);
