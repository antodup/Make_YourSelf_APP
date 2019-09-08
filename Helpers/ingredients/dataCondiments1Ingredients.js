const urlVignette = '../../assets/img/vignette_ingredients';
const urlIngredients = '../../assets/img/ingredients/';

export default dataCondiments1Ingredients = [
    {
        id:105,
        name : "Bacon",
        vignette : require(urlVignette + "/condiments_1/bacon.jpg"),
        image: require(urlIngredients + "bacon.png"),
    },
    {
        id:106,
        name : "Oignon",
        vignette : require(urlVignette + "/condiments_1/onion.jpg"),
        image: require(urlIngredients + "onion.png"),
    },
    {
        id:107,
        name : "Salades",
        vignette : require(urlVignette + "/condiments_1/salade.jpg"),
        image: require(urlIngredients + "salades.png"),
    },
    {
        id:108,
        name : "Tomates",
        vignette : require(urlVignette + "/condiments_1/tomate.jpg"),
        image: require(urlIngredients + "tomates.png"),
    }
]