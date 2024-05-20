const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  62;
  ingredient(0.5, "teaspoon", "cumin");
};

/* The code inside the ingredient function can see the factor binding from the outer function, but its local bindings, such as unit or ingredientAmount, are not visible in the outer function.
The set of bindings visible inside a block is determined by the placeof that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope.This approach to binding visibility is called lexical scoping. */
