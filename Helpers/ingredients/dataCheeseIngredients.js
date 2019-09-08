const urlVignette = '../../assets/img/vignette_ingredients';
const urlIngredients = '../../assets/img/ingredients/';

export default dataCheeseIngredients = [
    {
        id:113,
        name : 'Bleu',
        vignette : require(urlVignette + '/fromages/bleu.jpg'),
        image: require(urlIngredients + 'blue.png'),
    },
    {
        id:114,
        name : 'Emmental',
        vignette : require(urlVignette + '/fromages/emmental.jpg'),
        image: require(urlIngredients + 'emmental.png'),
    },
    {
        id:115,
        name : 'Chèvre',
        vignette : require(urlVignette + '/fromages/chèvre.jpg'),
        image: require(urlIngredients + 'chevre.png'),
    },
    {
        id:116,
        name : 'Fromage Végétal',
        vignette : require(urlVignette + '/fromages/fromage_vegetal.png'),
        image: require(urlIngredients + 'cheese_vegetal.png'),
    }
]