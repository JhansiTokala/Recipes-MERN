import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/recipes");
        setRecipes(res.data);
        setLoading(false);
      } catch (error) {
        console.error("❌ Error Fetching Recipes:", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipes-container">
      <h2>All Recipes</h2>
      {loading ? <p>Loading recipes...</p> : (
        <div className="recipes-list">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="recipe-card">
              {recipe.image && <img src={recipe.image} alt={recipe.title} />}
              <h3>{recipe.title}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesList;
