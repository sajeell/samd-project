import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';

const SignIn = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d0ddfb",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SignIn;
