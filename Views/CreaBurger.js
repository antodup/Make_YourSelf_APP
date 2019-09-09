    import React from 'react'
    import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList, Modal} from 'react-native'

    /*HELPERS*/
    import pains from '../Helpers/ingredients/dataPainsIngredients'
    import condiments1 from '../Helpers/ingredients/dataCondiments1Ingredients'
    import condiments2 from '../Helpers/ingredients/dataCondiments2Ingredients'
    import proteines from '../Helpers/ingredients/dataProteinesIngredients'
    import cheese from '../Helpers/ingredients/dataCheeseIngredients'
    import sauces from '../Helpers/ingredients/dataSauceIngredients'


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
                pains_sup: null,
                pains_inf: null,
                condiments_1: null,
                proteines : null,
                cheese : null,
                condiments_2: null,
                modalVisible : false,
            };

        }

        _changeStatePains = (image_sup, image_inf) => {
            this.setState({
                pains_sup : image_sup,
                pains_inf : image_inf,
            });
        };

        _changeState = (image) => {
            if (this.state.dataFlatList == condiments1) {
                this.setState({
                    condiments_1 : image,
                });
            }
            if (this.state.dataFlatList == cheese) {
                this.setState({
                    cheese : image,
                });
            }

            if (this.state.dataFlatList == proteines) {
                this.setState({
                    proteines : image,
                });
            }

            if (this.state.dataFlatList == condiments2) {
                this.setState({
                    condiments_2 : image,
                });
            }
        };

        _suivant () {
            if (this.state.dataFlatList == pains) {
                this.setState({
                    dataFlatList : condiments1,
                });
            }
            if (this.state.dataFlatList == condiments1) {
                this.setState({
                    dataFlatList : cheese,
                });
            }

            if (this.state.dataFlatList == cheese) {
                this.setState({
                    dataFlatList : proteines,
                });
            }

            if (this.state.dataFlatList == proteines) {
                this.setState({
                    dataFlatList : condiments2,
                });
            }

            if (this.state.dataFlatList == condiments2) {
                this.setState({
                    modalVisible : true,
                });
            }
        };

        _precedent () {
            if (this.state.dataFlatList == condiments1) {
                this.setState({
                    dataFlatList : pains,
                });
            }

            if (this.state.dataFlatList == cheese) {
                this.setState({
                    dataFlatList : condiments1,
                });
            }

            if (this.state.dataFlatList == proteines) {
                this.setState({
                    dataFlatList : cheese,
                });
            }
            if (this.state.dataFlatList == condiments2) {
                this.setState({
                    dataFlatList : proteines,
                });
            }

        };

        _consigne() {
            if (this.state.dataFlatList == pains) {
                return ("Choisissez votre pain")
            }
            if (this.state.dataFlatList == condiments1) {
                return ("Choisissez votre premier condiment")
            }
            if (this.state.dataFlatList == cheese) {
                return ("Choisissez votre fromage")
            }
            if (this.state.dataFlatList == proteines) {
                return ("Choisissez votre proteines")
            }
            if (this.state.dataFlatList == condiments2) {
                return ("Choisissez votre second condiments")
            }
        };

        render() {
            return (
                <View style={styles.main_container}>
                    <View style={styles.container_white}>
                        <View style={styles.container_ingredients}>
                            <Text style={styles.titleApp}>Votre burger</Text>
                            <View style={styles.container_img_ingredients}>
                                <Image source={this.state.pains_sup} style={styles.image_ingredients_sup_pain}/>
                                <Image source={this.state.condiments_1} style={styles.image_ingredients_little}/>
                                <Image source={this.state.cheese} style={styles.image_ingredients_big}/>
                                <Image source={this.state.proteines} style={styles.image_ingredients_big}/>
                                <Image source={this.state.condiments_2} style={styles.image_ingredients_little}/>
                                <Image source={this.state.pains_inf} style={styles.image_ingredients_little}/>
                            </View>
                        </View>
                         <View style={styles.container_choice_ingredient}>
                             <View style={styles.container_entete}>
                                 <TouchableOpacity onPress={() => this._precedent()}>
                                    <Image source={require('../assets/img/chevron_white.png')}></Image>
                                 </TouchableOpacity>
                                 <Text style={styles.text_indication}>{this._consigne()}</Text>
                             </View>
                             <FlatList
                                 data={this.state.dataFlatList}
                                 horizontal={true}
                                 keyExtractor={item => item.id.toString()}
                                 renderItem={({item}) =>
                                     <TouchableOpacity onPress={() => { if (this.state.dataFlatList == pains) { this._changeStatePains(item.image_sup, item.image_inf)} else { this._changeState(item.image)}}} style={styles.container_vignette}>
                                         <Image source={item.vignette} style={styles.img_vignette}/>
                                         <Text style={styles.text_ingredient}>{item.name}</Text>
                                     </TouchableOpacity>}
                             />
                            <TouchableOpacity style={styles.buttonYellow} onPress={() => this._suivant()}>
                                <Text style={styles.buttonYellowText}>suivant</Text>
                            </TouchableOpacity>
                         </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                        >
                            <View style={styles.container_modal}>
                                <View style={styles.container_modal_txt}>
                                    <View style={styles.container_title}>
                                        <Text style={styles.title_sauce}>Les sauces</Text>
                                        <Text style={styles.cross}>&#10005;</Text>
                                    </View>
                                    <View style={styles.container_sauce}>
                                        <FlatList
                                            data={sauces}
                                            numColumns={2}
                                            keyExtractor={item => item.id.toString()}
                                            renderItem={({item}) =>
                                                <TouchableOpacity onPress={() => {}} style={styles.container_vignette}>
                                                    <Image source={item.vignette} style={styles.img_vignette_sauce}/>
                                                    <Text style={styles.text_ingredient_sauce}>{item.name}</Text>
                                                </TouchableOpacity>}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Modal>
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
        img_vignette: {
            width: 100,
            height: 100,
            borderRadius: 5
        },
        container_vignette: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10
        },
        container_img_ingredients :{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        image_ingredients : {
            width: '50%',
            height: '15%'
        },

        image_ingredients_little : {
            width: 200,
            resizeMode: 'contain',
        },

        image_ingredients_big: {
            width: 200,
            resizeMode: 'contain',
        },

        image_ingredients_sup_pain : {
            width: 200,
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
        container_entete : {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        text_indication : {
            fontFamily: 'Montserrat-Medium',
            color: '#FFFFFF',
            fontSize : 15,
            width: '100%',
            textAlign: 'center'
        },
        container_modal :  {
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        container_modal_txt: {
            backgroundColor: '#FFFFFF',
            padding : 20,
            width: '90%',
            borderRadius : 10
        },
        container_title : {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        cross: {
            color: 'rgba(0,0,0,0.5)',
            fontSize: 50,
        },
        title_sauce: {
            fontFamily: 'Montserrat-Bold',
            color: "#312783",
            fontSize :30,
        },

        img_vignette_sauce :  {
            width: 142,
            height: 142,
            borderRadius: 5
        },
        text_ingredient_sauce: {
            marginBottom: 10,
            color: '#312783',
            fontFamily: 'Montserrat-Light',
            fontSize: 15
        },
    });

    export default CreaBurger;