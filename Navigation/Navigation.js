import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Views/Home'
import Login from "../Views/Login"
import Menu from "../Views/Menu"
import CreaBurger from "../Views/CreaBurger"

import {Text} from "react-native";
import React from "react";

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
            headerBackTitle: "Retour",
        }
    },
    Login: {
        screen: Login,
       /* navigationOptions: {
             headerRight : (
               <Text>Profil</Text>
            )
        }*/
    },
    Menu: {
        screen: Menu
    },
    CreaBurger: {
        screen: CreaBurger,
        navigationOptions: {
            headerBackTitle: "Retour",
        }
    }
});

export default createAppContainer(HomeStackNavigator);