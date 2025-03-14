import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(""); // Optional
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/recipes", {
        title,
        ingredients,
        instructions,
        image,
      });

      console.log("✅ Recipe Added:", res.data);
      navigate("/recipes"); // Redirect to recipes list
    } catch (error) {
      console.error("❌ Error Adding Recipe:", error);
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    textarea: {
      width: "100%",
      height: "100px",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
      resize: "vertical",
    },
    button: {
      backgroundColor: "#ff5722",
      color: "white",
      padding: "12px",
      fontSize: "18px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#e64a19",
    },
    errorMessage: {
      color: "red",
      marginBottom: "10px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a New Recipe</h2>
      {error && <p style={styles.errorMessage}>{error}</p>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          style={styles.textarea}
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
          style={styles.textarea}
        />
        <input
          type="text"
          placeholder="Image URL (Optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
