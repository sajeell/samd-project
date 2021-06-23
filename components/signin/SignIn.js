import React, { useState } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native"
import { Link } from "react-router-native"
import auth from "@react-native-firebase/auth"
// These imports load individual services into the firebase namespace.

import bgImage from "../../static/images/form-bg.png"
const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          // ToastAndroid.show("Signed In!", ToastAndroid.SHORT);
          alert("Signed In")
        })
        .catch((error) => {
          // ToastAndroid.show(JSON.stringify(error.message), ToastAndroid.SHORT);
          alert(JSON.stringify(error.message))
        })
    } catch (error) {
      alert(error)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={bgImage} style={styles.image}></Image>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formRow1}>Sign In</Text>
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
            secureTextEntry={true}
            style={styles.inputField}
            onChange={(e) => {
              setPassword(e.nativeEvent.text)
            }}
          />
        </View>
        <View>
          <TouchableOpacity onPress={signIn}>
            <Text style={styles.formRow4}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formRow5}>
          <Link component={TouchableOpacity} to='/signup'>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Link>
          <Text>here</Text>
        </View>
      </View>
    </View>
  )
}

const lightColor = "#f2f6ff"
const darkColor = "#405e87"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d0ddfb",
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {},
  formContainer: {
    zIndex: 100,
    position: "absolute",
    backgroundColor: "#f2f6ff",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 60
  },
  image: {
    position: "relative",
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
    backgroundColor: "white",
    paddingHorizontal: 60,
    borderRadius: 10,
    width: 250
  },
  formRow3: {
    marginBottom: 5,
    backgroundColor: "white",
    paddingHorizontal: 70,
    borderRadius: 10,
    width: 250
  },
  formRow4: {
    textAlign: "center",
    marginBottom: 5,
    marginTop: 16,
    width: 150,
    backgroundColor: darkColor,
    color: "white",
    paddingVertical: 10
  },
  formRow5: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 8,
    marginTop: 10,
    fontSize: 12
  },
  signUpText: {
    marginRight: 5
  }
})

export default SignIn
