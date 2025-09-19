# Recipes API

A simple CRUD API for managing recipes, built with Node.js, Express.js, and Mongoose (MongoDB).

## Features

- Create, Read, Update, and Delete (CRUD) recipe entries.
- Follows MVC (Model-View-Controller) architectural pattern.
- Integrates with MongoDB using Mongoose.
- Basic error handling and validation.

## Tech Stack

- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- Dotenv (for environment variables)

## Setup and Installation
  **Install dependencies:**
    ```bash
    npm install
    "dotenv": "^17.2.2",
    "express": "^5.1.0",
    "mongoose": "^8.18.1"   
     "nodemon": "^3.1.10"
    ```

**Create a `.env` file:**
    In the root directory, create a `.env` file and add your MongoDB connection string and desired port:
    ```DB connection```
All endpoints are prefixed with `/api/recipes`.

### 1. Create a New Recipe

-   **Method:** `POST`
-   **URL:** `/api/recipes`
-   **Body (raw JSON):**
    ```json
{
  "name": "Palak Paneer",
  "ingredients": [
    "Paneer",
    "Spinach",
    "Onion",
    "Garlic",
    "Ginger",
    "Green Chilies",
    "Tomato",
    "Cumin Seeds",
    "Turmeric Powder",
    "Garam Masala",
    "Cream",
    "Salt",
    "Oil",
    "Cilantro"
  ],
  "instructions": "Blanch spinach and grind into puree. Sauté cumin seeds, onion, garlic, ginger, then add tomatoes and spices. Add spinach puree and cook. Add paneer. Finish with cream and garnish with cilantro. Serve hot.",
  "cookingTime": 30,
  "servings": 4
}```
-   **Success Response (201 Created):**

```json
{
    "message": "Recipe Plan Created",
    "recipe": {
        "name": "Palak Paneer",
        "ingredients": [
            "Paneer",
            "Spinach",
            "Onion",
            "Garlic",
            "Ginger",
            "Green Chilies",
            "Tomato",
            "Cumin Seeds",
            "Turmeric Powder",
            "Garam Masala",
            "Cream",
            "Salt",
            "Oil",
            "Cilantro"
        ],
        "instructions": "Blanch spinach and grind into puree. Sauté cumin seeds, onion, garlic, ginger, then add tomatoes and spices. Add spinach puree and cook. Add paneer. Finish with cream and garnish with cilantro. Serve hot.",
        "cookingTime": 30,
        "servings": 4,
        "_id": "68cd4d2cac77401177aff394",
        "createdAt": "2025-09-19T12:31:40.640Z",
        "updatedAt": "2025-09-19T12:31:40.640Z",
        "__v": 0
    }
}```
-   **Error Response (400 Bad Request):**
    ```json
    {
        "message": "Please enter all required fields: name, description, ingredients, instructions"
    }
    ```
    Or if `name` is not unique:
    ```json
    {
        "message": "A recipe with this name already exists."
    }
    ```
### 2. Get All Recipes

-   **Method:** `GET`
-   **URL:** `/api/recipes`
-   **Success Response (200 OK):**
    ```json
    {
    "recipe": [
        {
            "_id": "68ccdea2ec0bf412354cf47e",
            "name": "Spaghetti Carbonara",
            "ingredients": [
                "Spaghetti",
                "Boiled Eggs",
                "Pancetta",
                "Pecorino Romano",
                "Black Pepper",
                "Salt",
                "Onion",
                "Mint"
            ],
            "instructions": "Cook spaghetti. Fry pancetta. Mix eggs, cheese, pepper. Combine all. Serve hot.",
            "cookingTime": 20,
            "servings": 3,
            "createdAt": "2025-09-19T04:40:02.729Z",
            "updatedAt": "2025-09-19T12:25:51.054Z"
        },
        {
            "_id": "68cce02962f42c04ee10cef9",
            "name": "Chicken Tikka Masala",
            "ingredients": [
                "Chicken",
                "Yogurt",
                "Tomato Puree",
                "Onion",
                "Garlic",
                "Ginger",
                "Garama Masala",
                "Chili Powder",
                "Cream",
                "Cilantro"
            ],
            "instructions": "Marinate chicken in yogurt and spices. Grill until browned. Sauté onion, garlic, ginger. Add tomato puree and spices. Simmer. Stir in cream. Add chicken. Garnish with cilantro. Serve with naan or rice.",
            "cookingTime": 45,
            "servings": 4,
            "createdAt": "2025-09-19T04:46:33.683Z",
            "updatedAt": "2025-09-19T04:46:33.683Z"
        },
        {
            "_id": "68cd4d22ac77401177aff392",
            "name": "Paneer Butter Masala",
            "ingredients": [
                "Paneer",
                "Butter",
                "Tomato Puree",
                "Onion",
                "Garlic",
                "Ginger",
                "Cashew Paste",
                "Garam Masala",
                "Kashmiri Red Chili Powder",
                "Cream",
                "Kasuri Methi",
                "Salt",
                "Sugar",
                "Cilantro"
            ],
            "instructions": "Sauté onions, garlic and ginger in butter. Add tomato puree, cashew paste, and spices. Simmer. Add paneer cubes. Stir in cream. Garnish with kasuri methi and cilantro. Serve hot with naan or rice.",
            "cookingTime": 35,
            "servings": 4,
            "createdAt": "2025-09-19T12:31:30.436Z",
            "updatedAt": "2025-09-19T12:31:30.436Z"
        }
    ]
}

### 3. Get Recipe by ID

-   **Method:** `GET`
-   **URL:** `/api/recipes/:id` (Replace `:id` with an actual recipe ID, e.g., `/api/recipes/65b5d1e4c7d0a2b3c4e5f6g7`)
-   **Success Response (200 OK):**
Example:http://localhost:8001/recipe/68ccdea2ec0bf412354cf47e
    ```json
    {
    "recipe": {
        "_id": "68ccdea2ec0bf412354cf47e",
        "name": "Spaghetti Carbonara",
        "ingredients": [
            "Spaghetti",
            "Boiled Eggs",
            "Pancetta",
            "Pecorino Romano",
            "Black Pepper",
            "Salt",
            "Onion",
            "Mint"
        ],
        "instructions": "Cook spaghetti. Fry pancetta. Mix eggs, cheese, pepper. Combine all. Serve hot.",
        "cookingTime": 20,
        "servings": 3,
        "createdAt": "2025-09-19T04:40:02.729Z",
        "updatedAt": "2025-09-19T12:25:51.054Z"
    }
}
    ```
-   **Error Response (404 Not Found):**
    ```json
    {
        "message": "Recipe not found"
    }
    ```
-   **Error Response (400 Bad Request):**
    ```json
    {
        "message": "Invalid recipe ID"
    }
    ```
    ### 4. Update Recipe by ID

-   **Method:** `PUT`
-   **URL:** `/api/recipes/:id` (Replace `:id` with an actual recipe ID)
-   **Body (raw JSON - send only fields you want to update):**
    ```json
    Example:http://localhost:8001/recipe/68ccdea2ec0bf412354cf47e
    #body request :{
    "ingredients": [
            "Spaghetti",
            "Boiled Eggs",
            "Pancetta",
            "Pecorino Romano",
            "Black Pepper",
            "Salt",
            "Onion",
            "Mint"
        ],
        "cookingTime": 20,
        "servings": 3

    }
      **Success Response (200 OK):**
    ```json
    {
    "message": "Recipe Details Updated",
    "recipe": {
        "_id": "68ccdea2ec0bf412354cf47e",
        "name": "Spaghetti Carbonara",
        "ingredients": [
            "Spaghetti",
            "Boiled Eggs",
            "Pancetta",
            "Pecorino Romano",
            "Black Pepper",
            "Salt",
            "Onion",
            "Mint"
        ],
        "instructions": "Cook spaghetti. Fry pancetta. Mix eggs, cheese, pepper. Combine all. Serve hot.",
        "cookingTime": 20,
        "servings": 3,
        "createdAt": "2025-09-19T04:40:02.729Z",
        "updatedAt": "2025-09-19T12:37:16.974Z",
        "__v": 0
    }
}

    ```
-   **Error Response (404 Not Found):**
    ```json
    {
        "message": "Recipe not found"
    }
    ```
-   **Error Response (400 Bad Request):**
    ```json
    {
        "message": "Invalid recipe ID"
    }
    ```
    Or if `name` is updated to an existing one:
    ```json
    {
        "message": "A recipe with this name already exists."
    }
    ```
    ### 5. Delete Recipe by ID

-   **Method:** `DELETE`
-   **URL:** `/api/recipes/:id` (Replace `:id` with an actual recipe ID)
-   **Success Response (200 OK):**
    ```json
    {
        "message": "Recipe removed"
    }
    ```
-   **Error Response (404 Not Found):**
    ```json
    {
        "message": "Recipe not found"
    }
    ```
-   **Error Response (400 Bad Request):**
    ```json
    {
        "message": "Invalid recipe ID"
    }
    ```


 Postman Document
 https://documenter.getpostman.com/view/41728894/2sB3HroJqv



