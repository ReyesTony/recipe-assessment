import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData)
    console.log(
      formData.name,
      formData.cuisine,
      formData.photo,
      formData.ingredients,
      formData.preparation
    );
    setFormData({ ...initialState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody className="color">
          <tr>
            <td>
              <input
                onChange={handleChange}
                value={formData.name}
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                required
              />
            </td>
            <td>
              <input
                required
                id="photo"
                onChange={handleChange}
                value={formData.photo}
                type="url"
                name="photo"
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                required
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                rows="1"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                required
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                rows="1"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
