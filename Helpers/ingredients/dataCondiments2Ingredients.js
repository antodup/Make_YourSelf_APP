const urlVignette = '../../assets/img/vignette_ingredients';
const urlIngredients = '../../assets/img/ingredients/';

export default dataCondiments2Ingredients = [
    {
        id:109,
        name : "Bacon",
        vignette : require(urlVignette + "/condiments_2/bacon.jpg"),
        image: require(urlIngredients + "bacon.png"),
    },
    {
        id:110,
        name : "Courgette",
        vignette : require(urlVignette + "/condiments_2/courgette.jpg"),
        image: require(urlIngredients + "courgette.png"),
    },
    {
        id:111,
        name : "Salades",
        vignette : require(urlVignette + "/condiments_2/salade.jpg"),
        image: require(urlIngredients + "salades.png"),
    },
    {
        id:112,
        name : "Tomates",
        vignette : require(urlVignette + "/condiments_2/tomate.jpg"),
        image: require(urlIngredients + "tomates.png"),
    }
]