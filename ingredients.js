var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//while
console.log("Ingredients:");

var i1 = 0;

while (i1 < ingredients.length) {
  console.log(ingredients[i1]);
  i1++;
}

//for
console.log("Ingredients:");

for (var i2 = 0; i2 < ingredients.length; i2++) {
  console.log(ingredients[i2]);
}

//for backwards
console.log("Ingredients:");

for (var i3 = ingredients.length - 1; i3 > -1; i3--) {
  console.log(ingredients[i3]);
}