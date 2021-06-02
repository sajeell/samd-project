import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
} from 'react-native'
import {Link} from 'react-router-native'

import bgImage from '../../static/images/form-bg.png'
const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={bgImage} style={styles.image}></Image>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formRow1}>Sign Up</Text>
        <View style={styles.formRow2}>
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            style={styles.inputField}
          />
        </View>
        <View style={styles.formRow3}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputField}
          />
        </View>
        <View>
          <Pressable style={styles.formRow4}>
            <Button title="Submit" color="#405e87" />
          </Pressable>
        </View>
        <View style={styles.formRow5}>
          <Link to="/">
              <Text>Sign In</Text>
            </Link>
          <Text>here</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d0ddfb',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {},
  formContainer: {
    zIndex: 100,
    position: 'absolute',
    backgroundColor: '#f2f6ff',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 60,
  },
  image: {
    position: 'relative',
    zIndex: 1,
    width: 365,
    height: 315,
  },
  formRow1: {
    fontSize: 18,
    marginBottom: 20,
  },
  formRow2: {
    marginBottom: 20,
    backgroundColor: 'white',
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  formRow3: {
    marginBottom: 5,
    backgroundColor: 'white',
    paddingHorizontal: 70,
    borderRadius: 10,
  },
  formRow4: {
    marginBottom: 5,
    marginTop: 16,
    width: 150,
    borderRadius: 10,
  },
  formRow5: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginLeft: 8,
    marginTop: 10,
    fontSize: 12,
  },
})

export default SignUp
