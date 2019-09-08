const urlVignette = '../../assets/img/vignette_ingredients';
const urlIngredients = '../../assets/img/ingredients/';

export default dataCheeseIngredients = [
    {
        id:113,
        name : "Bleu",
        vignette : require(urlVignette + "/fromages/blue.jpg"),
        image: require(urlIngredients + "bleu.png"),
    },
    {
        id:114,
        name : "Emmental",
        vignette : require(urlVignette + "/fromages/emmental.jpg"),
        image: require(urlIngredients + "emmental.png"),
    },
    {
        id:115,
        name : "Chèvre",
        vignette : require(urlVignette + "/fromages/chevre.jpg"),
        image: require(urlIngredients + "chèvre.png"),
    },
    {
        id:116,
        name : "Fromage Végétal",
        vignette : require(urlVignette + "/fromages/cheese_vegetal.jpg"),
        image: require(urlIngredients + "fromage_vegetal.png"),
    }
]