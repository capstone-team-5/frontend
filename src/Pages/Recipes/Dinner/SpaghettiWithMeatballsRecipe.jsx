//Spaghetti With Meatballs Recipe Page

import SpaghettiWithMeatballsRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/SpaghettiWithMeatballsRecipeComponent";

const SpaghettiWithMeatballsRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <SpaghettiWithMeatballsRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default SpaghettiWithMeatballsRecipe;
