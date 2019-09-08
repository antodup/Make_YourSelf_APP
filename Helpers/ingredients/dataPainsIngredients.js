const urlVignette = '../../assets/img/vignette_ingredients';
const urlIngredients = '../../assets/img/ingredients/';

export default dataPainsIngredients = [
    {
        id:101,
        name : "Pain blanc",
        vignette : require(urlVignette + "/pains/pain_blanc.jpg"),
        image_sup: require(urlIngredients + "blanc_1.png"),
        image_inf: require(urlIngredients + "blanc_2.png")
    },
    {
        id:102,
        name : "Pain céréales",
        vignette : require(urlVignette + "/pains/pain_cereales.jpg"),
        image_sup: require(urlIngredients + "cereales_1.png"),
        image_inf: require(urlIngredients + "cereales_2.png")
    },
    {
        id:103,
        name : "Pain complet",
        vignette : require(urlVignette + "/pains/pain_complet.jpg"),
        image_sup: require(urlIngredients + "complet_1.png"),
        image_inf: require(urlIngredients + "complet_2.png")
    },
    {
        id:104,
        name : "Pain sans gluten",
        vignette : require(urlVignette + "/pains/pain_sans_gluten.png"),
        image_sup: require(urlIngredients + "sans_gluten_1.png"),
        image_inf: require(urlIngredients + "sans_gluten_2.png")
    }
]