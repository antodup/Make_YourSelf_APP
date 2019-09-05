import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'



class Menu extends React.Component {
    //STYLE HEADEAR NAVIGATION
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#FCBD20',
            borderBottomWidth :0
        },
        headerTintColor: '#312783',
    };


    render() {

        return (
            <View style={styles.main_container}>
                <View style={styles.container_white}>
                    <Text style={styles.titleApp}>Votre menu</Text>
                    <Text style={styles.txt_blue}>Bienvenue dans VOTRE espace de création, en cliquant sur « C’est parti ! » vous pourrez créer votre burger et choisir si vous avez envie d’une boisson ou d’un dessert alors :
                    </Text>
                    <Text style={styles.txt_yellowBold}>Burger ? Burger et Boisson ? Peut-être Burger et Dessert ? Ou encore mieux les 3 ! A vous de choisir !</Text>
                    <View style={styles.container_picto}>
                        <Image source={require('../assets/img/menu/picto_burgerfrite.png')} style={styles.picto_menu} />
                        <View style={styles.container_text_picto}>
                            <Text style={styles.txt_description }>Un burger à votre façon avec frites !</Text>
                            <Text style={styles.txt_price}>9€</Text>
                        </View>
                    </View>
                    <View style={styles.container_picto}>
                        <Image source={require('../assets/img/menu/picto_boisson.png')} style={styles.picto_menu} />
                        <View style={styles.container_text_picto}>
                            <Text style={styles.txt_description }>Une boisson</Text>
                            <Text style={styles.txt_price}>1.50€</Text>
                        </View>
                    </View>
                    <View style={styles.container_picto}>
                        <Image source={require('../assets/img/menu/picto_dessert.png')} style={styles.picto_menu} />
                        <View style={styles.container_text_picto}>
                            <Text style={styles.txt_description }>Un dessert</Text>
                            <Text style={styles.txt_price}>3€</Text>
                        </View>
                    </View>
                    <Text style={[styles.txt_yellowBold, styles.big_yellowTxt]}>Le menu = 12€</Text>
                    <TouchableOpacity style={styles.buttonBlue}   onPress={() => this.props.navigation.navigate('CreaBurger')}>
                        <Text style={styles.buttonBlueText}> c'est partit ! </Text>
                    </TouchableOpacity>

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
        borderRadius: 40,
        padding : 20,
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

    txt_yellowBold : {
        color: "#FCBD20",
        fontFamily: 'Montserrat-Bold',
        fontSize : 20,
        marginBottom: 20

    },
    container_picto: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    container_text_picto : {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft : 15,
    },
    txt_description : {
        color: "#312783",
        fontFamily: 'Montserrat-Light',
        fontSize : 18,
    },
    txt_price : {
        color: "#312783",
        fontFamily: 'Montserrat-Bold',
        fontSize : 18,
    },
    big_yellowTxt : {
        fontSize : 25
    },
    buttonBlue : {
        backgroundColor: '#312783',
        width: '100%',
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        borderRadius: 20,
        shadowColor: "#312783",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    buttonBlueText: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        fontSize : 20,
        textTransform: 'uppercase'
    },

});

export default Menu