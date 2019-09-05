import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import Menu from "./Menu";
import films from '../Helpers/dataIngredients'

class CreaBurger extends React.Component {
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
                    <View style={styles.container_ingredients}>
                        <Text style={styles.titleApp}>Création de votre burger</Text>
                    </View>
                     <View style={styles.container_choice_ingredient}>
                         <ScrollView horizontal={true}>
                             <View>
                                 <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                                 <Text style={{fontSize:96}}>Scroll me plz</Text>
                             </View>
                             <Text style={{fontSize:96}}>Scroll me plz</Text>
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Text style={{fontSize:96}}>If you like</Text>
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Text style={{fontSize:96}}>Scrolling down</Text>
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Text style={{fontSize:96}}>What's the best</Text>
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Text style={{fontSize:96}}>Framework around?</Text>
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                             <Text style={{fontSize:80}}>React Native</Text>
                         </ScrollView>
                        <TouchableOpacity style={styles.buttonYellow}   onPress={() => this.props.navigation.navigate('Menu')}>
                            <Text style={styles.buttonYellowText}> suivant </Text>
                        </TouchableOpacity>
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
        height: '40%'
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