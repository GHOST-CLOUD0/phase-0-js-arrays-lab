// Write your code here
const products = ["laptop", "phone", "headphones", "monitor"];

function logFirstProduct(){
  console.log(products[0]);
}
function updateProductName(position, newName){
  if (position >= 0 && position < products.length) {
    products[position] = newName;
    console.log(`Product at position ${position} updated to: ${newName}`);
  }
  else {
    console.log("Invalid position. Please enter a number between 0 and " + (products.length - 1));
  }
}
function removeLastProduct(){
  const removedProduct = products.pop();
  console.log(`Removed product: ${removedProduct}`);
  return removedProduct;
}
console.log("initial products array:", products);

console.log("First product:");
logFirstProduct();

updateProductName(1, "smartphone");
console.log("After updating phone to smartphone:", products);

removeLastProduct();
console.log("After removing last product:", products);

function addProduct(productName) {
    products.push(productName);
    console.log(`Added product: ${productName}`);
    console.log("Current products:", products);
}

function displayAllProducts() {
    console.log("All products in inventory:");
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product}`);
    });
}

function findProduct(productName) {
    const index = products.indexOf(productName);
    if (index !== -1) {
        console.log(`Found "${productName}" at position ${index}`);
        return index;
    } else {
        console.log(`"${productName}" not found in inventory`);
        return -1;
    }
}

function removeProductByName(productName) {
    const index = products.indexOf(productName);
    if (index !== -1) {
        const removed = products.splice(index, 1);
        console.log(`Removed product: ${removed[0]}`);
        return removed[0];
    } else {
        console.log(`"${productName}" not found in inventory`);
        return null;
    }
}

module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
