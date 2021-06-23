import React, { useState, useEffect } from "react"
import { StyleSheet, View, ScrollView } from "react-native"
import { devtoolsExchange } from "@urql/devtools"
import { NativeRouter, Switch, Route } from "react-router-native"
import CourseDetails from "./components/course-details/CourseDetails.js"
import Header from "./components/header/Header.js"
import Payment from "./components/payment/Payment.js"
import Quiz from "./components/quiz/Quiz.js"
import Dashboard from "./components/dashboard/Dashboard.js"
import SignIn from "./components/signin/SignIn.js"
import SignUp from "./components/signup/SignUp.js"
import AsyncStorage from "@react-native-async-storage/async-storage"

import auth from "@react-native-firebase/auth"
import { createClient, Provider, defaultExchanges } from "urql"
// These imports load individual services into the firebase namespace.

const client = createClient({
  url: "http://192.168.232.107:4000/",
  exchanges: [devtoolsExchange, ...defaultExchanges]
})

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  // Handle user state changes
  async function onAuthStateChanged(user) {
    setUser(user)
    if (user) {
      await AsyncStorage.setItem("userId", user.uid)
    }
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  if (initializing) return null

  return (
    <NativeRouter>
      <Provider value={client}>
        <View>
          <Switch>
            <Route exact path='/'>
              {!user ? (
                <SignIn />
              ) : (
                <ScrollView>
                  <Header />
                  <Dashboard />
                </ScrollView>
              )}
            </Route>
            <Route path='/dashboard'>
              {!user ? (
                <SignIn />
              ) : (
                <ScrollView>
                  <Header />
                  <Dashboard />
                </ScrollView>
              )}
            </Route>
            <Route path='/payment'>
              {!user ? (
                <SignIn />
              ) : (
                <ScrollView>
                  <Header />
                  <Payment />
                </ScrollView>
              )}
            </Route>
            <Route path='/course-details'>
              {!user ? (
                <SignIn />
              ) : (
                <ScrollView>
                  <Header />
                  <CourseDetails />
                </ScrollView>
              )}
            </Route>
            <Route path='/quiz'>
              {!user ? (
                <SignIn />
              ) : (
                <ScrollView>
                  <Quiz />
                </ScrollView>
              )}
            </Route>
            <Route path='/signup'>
              {!user ? (
                <SignUp />
              ) : (
                <ScrollView>
                  <Header />
                  <Dashboard />
                </ScrollView>
              )}
            </Route>
          </Switch>
        </View>
      </Provider>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({})

export default App
