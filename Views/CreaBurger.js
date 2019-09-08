import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList, Button} from 'react-native'
import Menu from "./Menu";
import pains from '../Helpers/ingredients/dataPainsIngredients'
import condiments1 from '../Helpers/ingredients/dataCondiments1Ingredients'
import condiments2 from '../Helpers/ingredients/dataCondiments2Ingredients'
import proteines from '../Helpers/ingredients/dataProteinesIngredients'
import cheese from '../Helpers/ingredients/dataCheeseIngredients'



class CreaBurger extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#FCBD20',
            borderBottomWidth :0
        },
        headerTintColor: '#312783',
    };
    constructor(props) {
        super(props);
        this.state = {
            dataFlatList: pains,
            functionFlatList : '',
            pains_sup: null,
            pains_inf: null,
            condiments_1: null,
            proteines : null,
            cheese : null,
            condiments_2: null
        };

    }

    _changeStatePains = (image_sup, image_inf) => {
        this.setState({
            pains_sup : image_sup,
            pains_inf : image_inf,
        });
    };

    _changeCondiment1Pains = (image) => {
        this.setState({
            condiments_1 : image,
        });
    };

    _suivant () {
        console.log(this.state.dataFlatList);
        switch (this.state.dataFlatList) {
            case pains:
                this.state.dataFlatList = condiments1;
            case condiments1:
                this.state.dataFlatList = cheese;
            case cheese:
                this.state.dataFlatList = proteines;
            case proteines:
                this.state.dataFlatList = condiments2;
            case condiments2:
                return("TERMINER")
        }
    };

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.container_white}>
                    <View style={styles.container_ingredients}>
                        <Text style={styles.titleApp}>Création de votre burger</Text>
                        <View style={styles.container_img_ingredients}>
                            <Image source={this.state.pains_sup} style={styles.image_ingredients}/>
                            <Image source={this.state.condiments_1} style={styles.image_ingredients}/>
                            <Image source={this.state.cheese} style={styles.image_ingredients}/>
                            <Image source={this.state.proteines} style={styles.image_ingredients}/>
                            <Image source={this.state.condiments_2} style={styles.image_ingredients}/>
                            <Image source={this.state.pains_inf} style={styles.image_ingredients}/>
                        </View>
                    </View>
                     <View style={styles.container_choice_ingredient}>
                         <FlatList
                             data={this.state.dataFlatList}
                             horizontal={true}
                             keyExtractor={item => item.id.toString()}
                             renderItem={({item}) =>
                                 <TouchableOpacity onPress={() => this._changeStatePains(item.image_sup, item.image_inf)} style={styles.container_vignette}>
                                     <Image source={item.vignette} style={styles.img_vignette}/>
                                     <Text style={styles.text_ingredient}>{item.name}</Text>
                                 </TouchableOpacity>}
                         />
                        <Button title={"suivant"} style={styles.buttonYellow} onPress={() => this._suivant()}>
                        </Button>
                     </View>
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#FCBD20"
    },
    container_white : {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 45,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },
    titleApp : {
        fontFamily: 'Montserrat-Bold',
        color: "#312783",
        fontSize : 40,
        marginTop : 20,
        marginBottom : 20
    },
    txt_blue : {
        color: "#312783",
        fontFamily: 'Montserrat-Light',
        fontSize : 16,
        marginBottom: 15
    },
    container_ingredients: {
        padding : 20,
        height: '60%',
    },
    container_choice_ingredient: {
        backgroundColor: "#312783",
        borderRadius: 40,
        padding : 20,
        height: '40%',
    },

    container_img_ingredients :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img_vignette: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
    container_vignette: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    image_ingredients : {
        width: '60%',
        resizeMode: 'contain'
    },
    text_ingredient: {
      marginTop: 10,
      color: '#FFFFFF',
        fontFamily: 'Montserrat-Light',
        fontSize: 12

    },
    buttonYellow : {
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25%',
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.26,
        shadowRadius: 6.68,
        elevation: 11,
    },
    buttonYellowText: {
        fontFamily: 'Montserrat-Bold',
        color: '#FCBD20',
        fontSize : 20,
        textTransform: 'uppercase'
    },

});

export default CreaBurger;