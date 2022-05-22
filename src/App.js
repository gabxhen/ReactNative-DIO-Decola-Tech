import React from 'react';
import {View, 
        Image,
        StyleSheet, 
        SafeAreaView, 
        StatusBar,
        Text,
        Pressable,
        Linking
    } from 'react-native';

const colorBack = '#0E0D0D';
const imgGit = 'https://avatars.githubusercontent.com/u/83349077?s=400&u=a0d879e2539f31020d9e80357372ae169f140e7a&v=4';
const colorGreen = "#00E432";
const urlGit  = 'https://github.com/gabxhen';

const App = () => {

    const handlePressGoGit = async () => {

        console.log("Verificando link.");
        const res = await Linking.canOpenURL(urlGit);

        if(res) {
            console.log("Link aprovado.");
            await Linking.openURL(urlGit);
        }

    }

    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorBack} barStyle={"light-content"}/>
        <View style={style.content}>
            <Image accessibilityLabel='Foto perfil de Gabriel Henrique' style={style.avatar} source={{uri:imgGit}}/>

            <Text accessibilityLabel='Nome de Gabriel Henrique' style={style.name}>Gabriel Henrique</Text>
            <Text accessibilityLabel='NickName de Gabriel Henrique' style={style.nickName}>@gabxhen</Text>
            <Text accessibilityLabel='Descrição sobre Gabriel Henrique' style={style.textColor}>Graduando em ADS na UNIT-PE (Primeiro Período). Tenho experiência em: Python, HTML, CSS, JS, JAVA e React Native.</Text>

            <Pressable onPress={handlePressGoGit}>
                <View accessibilityLabel='Botão para o GitHub' style={style.button}>
                    <Text style={style.textButton}>Open in GitHub</Text>
                </View>
            </Pressable>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorBack,
        flex: 1,
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: colorGreen,
        borderWidth: 2,
    },

    name: {
        marginTop: 20,
        color: colorGreen,
        fontSize: 25,
        fontWeight: 'bold',
    },

    nickName: {
        color: "#C0C0C0",
        fontSize: 17,
        marginBottom: 8,
    },

    textColor: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: colorGreen,
        padding: 20,
        marginTop: 20,
        borderRadius: 20,
    },

    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
});