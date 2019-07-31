let perimeter = (a, b) => {
  if (b == undefined) {
    return squarePerimeter(a);
  } else {
    return rectanglePerimeter(a, b);
  }
}

let rectanglePerimeter = (a, b) => 2 * (a + b);
let squarePerimeter = (a) => 4 * a;

console.log(perimeter(2, 4));
console.log(perimeter(8));

let perimeterNew = (a, b) => {

  return new Promise(function(resolve, reject) {
    if (a == undefined && b == undefined) {
      reject("No parameters");
    }
    if (b == undefined) {
      resolve(squarePerimeter(a));
    }
    resolve(rectanglePerimeter(a, b));
  });
}

perimeterNew(13, 45)
  .then(result => console.log(result))
  .catch(error => console.log(error));

perimeterNew(13)
  .then(result => console.log(result))
  .catch(error => console.log(error));
perimeterNew()
  .then(result => console.log(result))
  .catch(error => console.log(error));