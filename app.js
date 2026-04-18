// Nigerian Recipes Database
const nigerianRecipes = [
    {
        idMeal: "NG001",
        strMeal: "Jollof Rice",
        strCategory: "Nigerian",
        strArea: "Nigerian",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
        strInstructions: "1. Blend tomatoes, peppers, and onions into a smooth paste.\n2. Heat oil in a pot and fry the paste for 10 minutes.\n3. Add tomato paste, curry, thyme, and seasoning cubes.\n4. Add washed rice and stir well.\n5. Add water or stock, cover and cook on low heat for 30 minutes.\n6. Stir occasionally until rice is soft and fluffy.\n7. Serve with fried plantains and chicken.",
        strIngredient1: "Rice",
        strMeasure1: "3 cups",
        strIngredient2: "Tomatoes",
        strMeasure2: "5 large",
        strIngredient3: "Red Bell Peppers",
        strMeasure3: "3",
        strIngredient4: "Onions",
        strMeasure4: "2 large",
        strIngredient5: "Vegetable Oil",
        strMeasure5: "1/2 cup",
        strIngredient6: "Tomato Paste",
        strMeasure6: "2 tbsp",
        strIngredient7: "Curry Powder",
        strMeasure7: "1 tsp",
        strIngredient8: "Thyme",
        strMeasure8: "1 tsp",
        strIngredient9: "Seasoning Cubes",
        strMeasure9: "3",
        strIngredient10: "Salt",
        strMeasure10: "To taste"
    },
    {
        idMeal: "NG002",
        strMeal: "Egusi Soup",
        strCategory: "Nigerian",
        strArea: "Nigerian",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529445863.jpg",
        strInstructions: "1. Grind the egusi seeds into a coarse powder.\n2. Heat palm oil in a pot and fry the ground egusi for 5 minutes.\n3. Add chopped onions and fry for 2 minutes.\n4. Add stock, crayfish, and seasoning cubes.\n5. Add washed bitterleaf or spinach.\n6. Add cooked meat and fish.\n7. Simmer for 15 minutes, stirring occasionally.\n8. Serve with pounded yam or fufu.",
        strIngredient1: "Egusi Seeds",
        strMeasure1: "2 cups",
        strIngredient2: "Palm Oil",
        strMeasure2: "1/2 cup",
        strIngredient3: "Bitterleaf",
        strMeasure3: "2 cups",
        strIngredient4: "Crayfish",
        strMeasure4: "3 tbsp",
        strIngredient5: "Onions",
        strMeasure5: "1 large",
        strIngredient6: "Stock Fish",
        strMeasure6: "200g",
        strIngredient7: "Beef",
        strMeasure7: "300g",
        strIngredient8: "Seasoning Cubes",
        strMeasure8: "2",
        strIngredient9: "Salt",
        strMeasure9: "To taste",
        strIngredient10: "Pepper",
        strMeasure10: "To taste"
    },
    {
        idMeal: "NG003",
        strMeal: "Pounded Yam",
        strCategory: "Nigerian",
        strArea: "Nigerian",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
        strInstructions: "1. Peel and cut yam into small chunks.\n2. Wash thoroughly and place in a pot.\n3. Add water and boil for 20-25 minutes until soft.\n4. Drain water and transfer to a mortar.\n5. Pound with a pestle until smooth and stretchy.\n6. Add small water while pounding if too thick.\n7. Continue until no lumps remain.\n8. Serve hot with egusi soup or vegetable soup.",
        strIngredient1: "Yam",
        strMeasure1: "1kg",
        strIngredient2: "Water",
        strMeasure2: "As needed"
    },
    {
        idMeal: "NG004",
        strMeal: "Akara (Bean Cakes)",
        strCategory: "Nigerian",
        strArea: "Nigerian",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529445863.jpg",
        strInstructions: "1. Soak beans in water for 30 minutes.\n2. Peel off the skin by rubbing between hands.\n3. Blend peeled beans with peppers and onions into a smooth paste.\n4. Whisk the paste vigorously to incorporate air.\n5. Heat oil in a deep pan.\n6. Scoop paste with a spoon and fry in hot oil.\n7. Fry until golden brown on both sides.\n8. Drain on paper towels and serve with pap or bread.",
        strIngredient1: "Black Eyed Beans",
        strMeasure1: "2 cups",
        strIngredient2: "Fresh Peppers",
        strMeasure2: "2",
        strIngredient3: "Onions",
        strMeasure3: "1 medium",
        strIngredient4: "Vegetable Oil",
        strMeasure4: "For frying",
        strIngredient5: "Salt",
        strMeasure5: "To taste"
    },
    {
        idMeal: "NG005",
        strMeal: "Moi Moi (Bean Pudding)",
        strCategory: "Nigerian",
        strArea: "Nigerian",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
        strInstructions: "1. Peel beans by soaking and rubbing off skins.\n2. Blend beans with peppers, onions, and crayfish.\n3. Add vegetable oil, seasoning, and salt.\n4. Mix in chopped boiled eggs and fish.\n5. Wrap in banana leaves or foil.\n6. Steam in a pot with water for 45 minutes.\n7. Check with toothpick - should come out clean.\n8. Serve with jollof rice or custard.",
        strIngredient1: "Black Eyed Beans",
        strMeasure1: "3 cups",
        strIngredient2: "Red Peppers",
        strMeasure2: "3",
        strIngredient3: "Onions",
        strMeasure3: "2",
        strIngredient4: "Crayfish",
        strMeasure4: "2 tbsp",
        strIngredient5: "Vegetable Oil",
        strMeasure5: "1/2 cup",
        strIngredient6: "Hard Boiled Eggs",
        strMeasure6: "4",
        strIngredient7: "Fish",
        strMeasure7: "200g",
        strIngredient8: "Seasoning Cubes",
        strMeasure8: "2"
    },
    {
        idMeal: "NG006",
        strMeal: "Efo Riro (Vegetable Soup)",
        strCategory: "Nigerian",
        strArea: "Nigerian",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529445863.jpg",
        strInstructions: "1. Wash and chop spinach or ugwu leaves.\n2. Blend tomatoes, peppers, and onions.\n3. Heat palm oil and fry the blended mixture.\n4. Add locust beans (iru), crayfish, and seasoning.\n5. Add cooked meat and stock.\n6. Simmer for 10 minutes.\n7. Add chopped vegetables and stir.\n8. Cook for 5 more minutes and serve with rice or swallow.",
        strIngredient1: "Spinach",
        strMeasure1: "4 cups",
        strIngredient2: "Palm Oil",
        strMeasure2: "1/2 cup",
        strIngredient3: "Tomatoes",
        strMeasure3: "3",
        strIngredient4: "Peppers",
        strMeasure4: "3",
        strIngredient5: "Onions",
        strMeasure5: "2",
        strIngredient6: "Locust Beans (Iru)",
        strMeasure6: "2 tbsp",
        strIngredient7: "Crayfish",
        strMeasure7: "2 tbsp",
        strIngredient8: "Beef",
        strMeasure8: "300g",
        strIngredient9: "Seasoning Cubes",
        strMeasure9: "2"
    },
    {
        idMeal: "NG007",
        strMeal: "Suya (Spicy Grilled Meat)",
        strCategory: "Nigerian",
        strArea: "Nigerian",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
        strInstructions: "1. Cut beef into thin strips.\n2. Mix groundnut powder, pepper, ginger, and seasoning.\n3. Rub the spice mix all over the meat.\n4. Thread meat onto skewers.\n5. Grill over charcoal or in oven for 15-20 minutes.\n6. Turn occasionally and brush with oil.\n7. Serve hot with onions and tomatoes.",
        strIngredient1: "Beef",
        strMeasure1: "500g",
        strIngredient2: "Groundnut Powder",
        strMeasure2: "1 cup",
        strIngredient3: "Chili Pepper",
        strMeasure3: "2 tbsp",
        strIngredient4: "Ginger Powder",
        strMeasure4: "1 tsp",
        strIngredient5: "Garlic Powder",
        strMeasure5: "1 tsp",
        strIngredient6: "Onion Powder",
        strMeasure6: "1 tsp",
        strIngredient7: "Seasoning Cubes",
        strMeasure7: "2",
        strIngredient8: "Vegetable Oil",
        strMeasure8: "1/4 cup"
    },
    {
        idMeal: "NG008",
        strMeal: "Pepper Soup",
        strCategory: "Nigerian",
        strArea: "Nigerian",
        strMealThumb: "https://www.themealdb.com/images/media/meals/1529445863.jpg",
        strInstructions: "1. Wash goat meat or fish thoroughly.\n2. Put in a pot with water and bring to boil.\n3. Add pepper soup spice mix, pepper, and onions.\n4. Add seasoning cubes and salt.\n5. Simmer for 30-40 minutes until meat is tender.\n6. Add scent leaves or basil in last 5 minutes.\n7. Serve hot as appetizer or with rice.",
        strIngredient1: "Goat Meat",
        strMeasure1: "500g",
        strIngredient2: "Pepper Soup Spice",
        strMeasure2: "3 tbsp",
        strIngredient3: "Fresh Pepper",
        strMeasure3: "4",
        strIngredient4: "Onions",
        strMeasure4: "1 large",
        strIngredient5: "Scent Leaves",
        strMeasure5: "1 cup",
        strIngredient6: "Seasoning Cubes",
        strMeasure6: "2",
        strIngredient7: "Salt",
        strMeasure7: "To taste",
        strIngredient8: "Water",
        strMeasure8: "6 cups"
    }
];
// This function runs when user clicks Search button
async function searchRecipe() {
    // Get what user typed in the box
    let searchTerm = document.getElementById('searchInput').value;
    
    // Check if user typed nothing
    if (searchTerm === "") {
        alert("Please type a recipe name!");
        return;
    }
    
    console.log("Looking for:", searchTerm);
    
    try {
        // Ask the internet for recipes
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchTerm);
        
        // Convert answer to JavaScript object
        let data = await response.json();
        
        console.log("Found:", data);
        
        // Show recipes on page
        displayRecipes(data.meals);
        
    } catch (error) {
        console.log("Error:", error);
        alert("Something went wrong. Check internet!");
    }
}

// This function shows recipes on the page
function displayRecipes(meals) {
    let resultsDiv = document.getElementById('results');
    
    // Clear old results
    resultsDiv.innerHTML = "";
    
    // If no recipes found
    if (meals === null || !meals) {
        resultsDiv.innerHTML = "<p>No recipes found. Try again!</p>";
        return;
    }
    
    // For each recipe, make a card
    meals.forEach(meal => {
        let card = document.createElement('div');
        card.className = 'recipe-card';
        
        // Check if this recipe is already saved
        let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        let isSaved = savedRecipes.some(r => r.idMeal === meal.idMeal);
        let heartIcon = isSaved ? '❤️' : '🤍';
        
        card.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <p>${meal.strCategory}</p>
            <div class="card-buttons">
                <button onclick="showDetails('${meal.idMeal}')">View Recipe</button>
                <button onclick="toggleSave('${meal.idMeal}', '${meal.strMeal}', '${meal.strMealThumb}', '${meal.strCategory}')" class="save-btn" id="save-${meal.idMeal}">
                    ${heartIcon} Save
                </button>
            </div>
        `;
        
        resultsDiv.appendChild(card);
    });
}
// This function shows full recipe details
async function showDetails(id) {
    console.log("Getting details for:", id);
    
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
        let data = await response.json();
        let meal = data.meals[0];
        
        // Make ingredients list
        let ingredients = "";
        for (let i = 1; i <= 20; i++) {
            let ing = meal['strIngredient' + i];
            let meas = meal['strMeasure' + i];
            
            if (ing && ing !== "") {
                ingredients += `<li>${meas} ${ing}</li>`;
            }
        }
        
        // Show full recipe
        let resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <div class="recipe-detail">
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>Ingredients:</h3>
                <ul>${ingredients}</ul>
                <h3>How to Cook:</h3>
                <p>${meal.strInstructions}</p>
                                <button onclick="printRecipe()" class="print-btn">🖨️ Print Recipe</button>
                <button onclick="goBack()">Back to Results</button>
            </div>
        `;
        
    } catch (error) {
        console.log("Error:", error);
        alert("Could not load recipe!");
    }
}

// Go back to search results
function goBack() {
    searchRecipe();
}
// This function searches recipes by ingredient
async function searchByIngredient() {
    // Get what user typed
    let ingredient = document.getElementById('ingredientInput').value;
    
    // Check if empty
    if (ingredient === "") {
        alert("Please type an ingredient!");
        return;
    }
    
    console.log("Looking for recipes with:", ingredient);
    
    try {
        // Ask API for recipes with this ingredient
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient);
        
        let data = await response.json();
        
        console.log("Found:", data);
        
        // Show the recipes
        displayRecipes(data.meals);
        
    } catch (error) {
        console.log("Error:", error);
        alert("Something went wrong. Check internet!");
    }
}
// This function searches recipes by category
async function searchCategory(category) {
    console.log("Looking for category:", category);
    
    try {
        // Ask API for recipes in this category
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category);
        
        let data = await response.json();
        
        console.log("Found:", data);
        
        // Show the recipes
        displayRecipes(data.meals);
        
        // Scroll to results
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        console.log("Error:", error);
        alert("Could not load category. Check internet!");
    }
}
// This function shows all Nigerian recipes
function showNigerianRecipes() {
    console.log("Showing Nigerian recipes");
    
    // Use your local Nigerian recipes
    displayRecipes(nigerianRecipes);
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// This function shows details for Nigerian recipes
function showNigerianDetails(id) {
    console.log("Getting Nigerian recipe details:", id);
    
    // Find the recipe in your local database
    let meal = nigerianRecipes.find(r => r.idMeal === id);
    
    if (!meal) {
        alert("Recipe not found!");
        return;
    }
    
    // Make ingredients list
    let ingredients = "";
    for (let i = 1; i <= 20; i++) {
        let ing = meal['strIngredient' + i];
        let meas = meal['strMeasure' + i];
        
        if (ing && ing !== "") {
            ingredients += `<li>${meas} ${ing}</li>`;
        }
    }
    
    // Show full recipe
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="recipe-detail">
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>Ingredients:</h3>
            <ul>${ingredients}</ul>
            <h3>How to Cook:</h3>
            <p>${meal.strInstructions}</p>
                            <button onclick="printRecipe()" class="print-btn">🖨️ Print Recipe</button>
            <button onclick="goBackNigerian()">Back to Nigerian Recipes</button>
        </div>
    `;
}

// Go back to Nigerian recipes
function goBackNigerian() {
    showNigerianRecipes();
}
// This function saves or unsaves a recipe
function toggleSave(id, name, image, category) {
    // Get current saved recipes
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    
    // Check if already saved
    let index = savedRecipes.findIndex(r => r.idMeal === id);
    
    if (index > -1) {
        // Already saved, so remove it
        savedRecipes.splice(index, 1);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        
        // Update button appearance
        let btn = document.getElementById('save-' + id);
        if (btn) {
            btn.innerHTML = '🤍 Save';
        }
        
        alert('Recipe removed from favorites!');
    } else {
        // Not saved, so add it
        let recipe = {
            idMeal: id,
            strMeal: name,
            strMealThumb: image,
            strCategory: category
        };
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        
        // Update button appearance
        let btn = document.getElementById('save-' + id);
        if (btn) {
            btn.innerHTML = '❤️ Saved';
        }
        
        alert('Recipe saved to favorites!');
    }
}

// This function shows saved recipes
function showSavedRecipes() {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    
    if (savedRecipes.length === 0) {
        alert('No saved recipes yet!');
        return;
    }
    
    // Display saved recipes
    displayRecipes(savedRecipes);
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}
// This function shows a random recipe
async function showRandomRecipe() {
    console.log("Getting random recipe...");
    
    try {
        // Ask API for random recipe
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        
        let data = await response.json();
        let meal = data.meals[0];
        
        console.log("Random recipe:", meal);
        
        // Make ingredients list
        let ingredients = "";
        for (let i = 1; i <= 20; i++) {
            let ing = meal['strIngredient' + i];
            let meas = meal['strMeasure' + i];
            
            if (ing && ing !== "") {
                ingredients += `<li>${meas} ${ing}</li>`;
            }
        }
        
        // Show random recipe
        let resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <div class="recipe-detail">
                <h2>🎲 Random Recipe: ${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>Ingredients:</h3>
                <ul>${ingredients}</ul>
                <h3>How to Cook:</h3>
                <p>${meal.strInstructions}</p>
                                <button onclick="printRecipe()" class="print-btn">🖨️ Print Recipe</button>
                <button onclick="showRandomRecipe()">🎲 Get Another Random Recipe</button>
                <button onclick="searchRecipe()">Back to Search</button>
            </div>
        `;
        
        // Scroll to results
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        console.log("Error:", error);
        alert("Could not get random recipe!");
    }
}
// This function prints the current recipe
function printRecipe() {
    // Get the recipe detail content
    let recipeContent = document.querySelector('.recipe-detail');
    
    if (!recipeContent) {
        alert('No recipe to print!');
        return;
    }
    
    // Open new window for printing
    let printWindow = window.open('', '_blank');
    
    // Write recipe content to new window
    printWindow.document.write(`
        <html>
        <head>
            <title>Recipe Print</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    line-height: 1.6;
                }
                h2 {
                    color: #FF6B35;
                    border-bottom: 2px solid #FF6B35;
                    padding-bottom: 10px;
                }
                img {
                    max-width: 100%;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                h3 {
                    color: #333;
                    margin-top: 30px;
                }
                ul {
                    background: #f9f9f9;
                    padding: 20px;
                    border-radius: 5px;
                }
                li {
                    margin: 5px 0;
                }
                p {
                    text-align: justify;
                    background: #f9f9f9;
                    padding: 20px;
                    border-radius: 5px;
                }
                .print-date {
                    text-align: center;
                    color: #999;
                    font-size: 12px;
                    margin-top: 40px;
                    border-top: 1px solid #ddd;
                    padding-top: 20px;
                }
            </style>
        </head>
        <body>
            ${recipeContent.innerHTML}
            <div class="print-date">Printed from Recipe Finder App on ${new Date().toLocaleDateString()}</div>
            <script>
                window.onload = function() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}
