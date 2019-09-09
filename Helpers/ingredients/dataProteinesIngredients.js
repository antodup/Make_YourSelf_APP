const urlVignette = '../../assets/img/vignette_ingredients';
const urlIngredients = '../../assets/img/ingredients/';

export default dataProteinesIngredients = [
    {
        id:113,
        name : "Boeuf",
        vignette : require(urlVignette + "/proteines/boeuf.jpg"),
        image: require(urlIngredients + "boeuf.png"),
    },
    {
        id:114,
        name : "Poisson",
        vignette : require(urlVignette + "/proteines/poisson.jpg"),
        image: require(urlIngredients + "poisson.png"),
    },
    {
        id:115,
        name : "Poulet",
        vignette : require(urlVignette + "/proteines/poulet_cuit.jpg"),
        image: require(urlIngredients + "poulet.png"),
    },
    {
        id:116,
        name : "Steak de soja",
        vignette : require(urlVignette + "/proteines/steak_soja.jpg"),
        image: require(urlIngredients + "soja.png"),
    }
]