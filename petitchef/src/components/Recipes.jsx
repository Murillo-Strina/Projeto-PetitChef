import React, { useEffect, useState } from 'react';
import UnsplashGallery from './UnsplashGallery';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          setRecipes(data.meals);
        }
      })
      .catch(error => console.error('Erro ao buscar receitas:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Receitas (TheMealDB)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {recipes.map(meal => (
          <div
            key={meal.idMeal}
            style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}
          >
            <h4>{meal.strMeal}</h4>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{ width: '100%' }}
            />
            <p>{meal.strInstructions.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
      <UnsplashGallery />
    </div>
  );
}

export default Recipes;
