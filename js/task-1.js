// * посчитать кол-во продуктов итого
// * через иф сравнить итого с containerSize
// * вернуть буль тру/фальс


// * вариант на основании примера из обучения
function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;
  const values = Object.values(products);
  for (const value of values) {
    totalProducts += value;
  }
  if (totalProducts <= containerSize) {
    return true;
  }
  else {
    return false;
  }
}


// * мой вариант нерабочий (на потом, разобраться на свежую голову что не так)
// function isEnoughCapacity(products, containerSize) {
//   let totalProducts = 0;
//   for (const product in products) {
//     totalProducts += Object.values(product);
//   }
//   if (totalProducts <= containerSize) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// * вариант от чата, но я не помню чтоб мы учили "if (product in products)"
// * вбудований оператор in, який перевіряє, чи є ключ прямо в об'єкті
// function isEnoughCapacity(products, containerSize) {
//   let totalProducts = 0;

//   for (const product in products) {
//     if (product in products) {
//       totalProducts += products[product];
//     }
//   }
//   if (totalProducts <= containerSize) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }



console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false