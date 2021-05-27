import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import bgImage from "../../static/images/form-bg.png"
const SignIn = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={bgImage} style={styles.image}></Image>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d0ddfb",
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
    },
    image: {
        position: 'relative',
        zIndex: 1,
        width: 365,
        height: 315
    }
});

export default SignIn;
