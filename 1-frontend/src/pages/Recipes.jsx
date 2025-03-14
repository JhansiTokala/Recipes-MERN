import React, { useState } from "react";
import "./Recipes.css"; // Import CSS

const recipesData = {
  veg: [
    {
      id: 1,
      name: "Paneer Butter Masala",
      image: "panner.jpg",
      ingredients: [
        "200g Paneer",
        "2 Tomatoes (pureed)",
        "1 Onion (chopped)",
        "2 tbsp Butter",
        "1/2 cup Cream",
        "1 tsp Garam Masala",
        "1 tsp Ginger-Garlic Paste",
        "Salt to taste",
      ],
      steps: [
        "Heat butter in a pan and sauté onions until golden.",
        "Add ginger-garlic paste and tomato puree, cook for 5 minutes.",
        "Add garam masala, salt, and cream, then mix well.",
        "Add paneer cubes and simmer for 10 minutes.",
        "Serve hot with naan or rice.",
      ],
    },
    {
      id: 2,
      name: "Brinjal Curry",
      image: "b1.jpg",
      ingredients: [
        "2 Brinjals (chopped)",
        "1 Onion (chopped)",
        "2 Tomatoes (chopped)",
        "1 tsp Mustard Seeds",
        "1 tsp Turmeric Powder",
        "1 tsp Red Chili Powder",
        "1 tbsp Oil",
        "Salt to taste",
      ],
      steps: [
        "Heat oil in a pan and add mustard seeds until they pop.",
        "Add onions and sauté until soft.",
        "Mix in tomatoes and cook until they soften.",
        "Add brinjals, turmeric, chili powder, and salt. Stir well.",
        "Cover and cook for 10 minutes until brinjal is tender.",
        "Serve with rice or roti.",
      ],
    },
    {
      id: 3,
      name: "Vegetable Biryani",
      image: "v1.jpg",
      ingredients: [
        "1 cup Basmati Rice",
        "1 Carrot (chopped)",
        "1 Potato (chopped)",
        "1/2 cup Peas",
        "2 Onions (sliced)",
        "2 Tomatoes (chopped)",
        "1 tbsp Biryani Masala",
        "1 tsp Ginger-Garlic Paste",
        "2 tbsp Oil",
        "Salt to taste",
      ],
      steps: [
        "Wash and soak rice for 20 minutes.",
        "Heat oil in a pan, sauté onions until golden.",
        "Add ginger-garlic paste, tomatoes, and cook until soft.",
        "Mix in vegetables, biryani masala, and salt. Stir well.",
        "Add soaked rice and water (1:2 ratio).",
        "Cover and cook on low heat for 15 minutes.",
        "Serve hot with raita.",
      ],
    },
  ],
  nonVeg: [
    {
      id: 1,
      name: "Chicken Curry",
      image: "chicken.jpg",
      ingredients: [
        "500g Chicken (cut into pieces)",
        "2 Onions (chopped)",
        "2 Tomatoes (pureed)",
        "1 tbsp Ginger-Garlic Paste",
        "1 tsp Garam Masala",
        "1 tsp Turmeric Powder",
        "1 tsp Red Chili Powder",
        "2 tbsp Oil",
        "Salt to taste",
      ],
      steps: [
        "Heat oil in a pan and sauté onions until golden brown.",
        "Add ginger-garlic paste and cook until aromatic.",
        "Mix in tomatoes and cook until soft.",
        "Add chicken pieces, turmeric, chili powder, garam masala, and salt.",
        "Cook for 20 minutes, stirring occasionally.",
        "Serve hot with rice or chapati.",
      ],
    },
  ],
  vegSoups: [
    {
      id: 1,
      name: "Tomato Soup",
      image: "tomato.jpg",
      ingredients: [
        "4 Tomatoes (chopped)",
        "2 Garlic Cloves (chopped)",
        "1 Onion (chopped)",
        "1 tsp Black Pepper",
        "1 tbsp Butter",
        "Salt to taste",
      ],
      steps: [
        "Heat butter in a pan, add garlic and onions, sauté until soft.",
        "Add chopped tomatoes and cook until mushy.",
        "Blend the mixture into a smooth puree.",
        "Strain and bring to a boil, adding black pepper and salt.",
        "Serve hot with croutons.",
      ],
    },
  ],
  junkFood: [
    {
      id: 1,
      name: "Burger",
      image: "burger.jpg",
      ingredients: [
        "2 Burger Buns",
        "1 Veg or Chicken Patty",
        "1 Tomato (sliced)",
        "1 Onion (sliced)",
        "1 Lettuce Leaf",
        "2 tbsp Mayonnaise",
        "1 tbsp Butter",
      ],
      steps: [
        "Toast the burger buns with butter on a pan.",
        "Cook the patty according to package instructions.",
        "Spread mayonnaise on both halves of the bun.",
        "Layer lettuce, patty, tomato, and onion slices.",
        "Close the burger and serve with fries.",
      ],
    },
  ],
};

const Recipes = () => {
  const [activeCategory, setActiveCategory] = useState("veg");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="recipes-container">
      <h2 className="title">Recipe Categories</h2>

      {/* Tabs for categories */}
      <div className="category-buttons">
        {["veg", "nonVeg", "vegSoups", "junkFood"].map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(category);
              setSelectedRecipe(null);
            }}
          >
            {category.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>

      {/* Display Recipes */}
      <div className="recipe-grid">
        {recipesData[activeCategory].map((recipe) => (
          <div key={recipe.id} className="recipe-card" onClick={() => setSelectedRecipe(recipe)}>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h3 className="recipe-name">{recipe.name}</h3>
          </div>
        ))}
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedRecipe(null)}>&times;</span>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.name} className="modal-image" />
            <h3>Ingredients:</h3>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Steps:</h3>
            <ol>
              {selectedRecipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
