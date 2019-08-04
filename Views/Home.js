import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
    moveToLogin = () => {
        console.log("Move to film");
    };
    render() {
        return (
            <View style={styles.containerView}>
                <View style={styles.containerHeader}>
                    <Image
                        source={require('../assets/img/accueil/Logo.png')}
                        style={styles.imgLogo} />
                </View>
                <View style={styles.containerYellow}>
                    <Image source={require('../assets/img/accueil/truck_accueil.png')} />
                    <Text style={styles.welcome}>Aujourd’hui nous sommes au :</Text>
                    <Text style={styles.adress}>55 rue de La Défense,</Text>
                    <Text style={styles.adress}>92200 Nanterre</Text>
                    <Text style={styles.hour}>De 12h00 à 14h30</Text>
                    <TouchableOpacity style={styles.buttonBlue}   onPress={() => this.props.navigation.navigate('Menu')}>
                        <Text style={styles.buttonBlueText}> passez une commande </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonWhite}  onPress={() => this.props.navigation.navigate('Login')} >
                        <Text style={styles.buttonWhiteText}> Je me connecte </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    imgLogo : {
        marginTop: '13%'
    },
    containerYellow : {
        backgroundColor : '#FCBD20',
        width: '100%',
        height: '70%',
        padding: '8%',
        display: 'flex',
        alignItems : 'center',
        borderRadius: 40
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: 'white',
        fontFamily: 'Montserrat-Light'
    },
    adress: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 5,
        fontSize: 18,
        fontFamily: 'Montserrat-Medium'
    },
    hour: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'Montserrat-Medium'
    },
    buttonBlue : {
        backgroundColor: '#312783',
        width: '100%',
        marginTop: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
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
    buttonWhite : {
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    buttonWhiteText: {
        fontFamily: 'Montserrat-Bold',
        color: '#FCBD20',
        fontSize : 20,
        textTransform: 'uppercase',
    }
});
