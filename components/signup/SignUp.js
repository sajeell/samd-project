import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'
import { Link } from 'react-router-native'

import auth from '@react-native-firebase/auth'

import bgImage from '../../static/images/form-bg.png'
const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (e) => {
    alert(1)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('User account created & signed in!')
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          aler('That email address is already in use!')
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!')
        }

        alert(error)
      })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={bgImage} style={styles.image}></Image>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formRow1}>Sign Up</Text>
        <View style={styles.formRow2}>
          <TextInput
            placeholder='Email Address'
            keyboardType='email-address'
            style={styles.inputField}
            onChange={(e) => {
              setEmail(e.nativeEvent.text)
            }}
          />
        </View>
        <View style={styles.formRow3}>
          <TextInput
            placeholder='Password'
            passwordRules='required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;'
            secureTextEntry={true}
            style={styles.inputField}
            onChange={(e) => {
              setPassword(e.nativeEvent.text)
            }}
          />
        </View>
        <View>
          <TouchableOpacity onPress={signUp}>
            <Text style={styles.button}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formRow5}>
          <Link component={TouchableOpacity} to='/'>
            <Text style={styles.signInText}>Sign In</Text>
          </Link>
          <Text>here</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const lightColor = '#f2f6ff'
const darkColor = '#405e87'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d0ddfb',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
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
    padding: 60
  },
  image: {
    position: 'relative',
    zIndex: 1,
    width: 365,
    height: 315
  },
  formRow1: {
    fontSize: 18,
    marginBottom: 20
  },
  formRow2: {
    marginBottom: 20,
    backgroundColor: 'white',
    paddingHorizontal: 60,
    borderRadius: 10,
    width: 250
  },
  formRow3: {
    marginBottom: 5,
    backgroundColor: 'white',
    paddingHorizontal: 70,
    borderRadius: 10,
    width: 250
  },
  formRow4: {
    marginBottom: 5,
    marginTop: 16,
    width: 150,
    borderRadius: 10
  },
  button: {
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 16,
    width: 150,
    backgroundColor: darkColor,
    color: 'white',
    paddingVertical: 10
  },
  formRow5: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 10,
    fontSize: 12
  },
  signInText: {
    marginRight: 5
  }
})

export default SignUp
