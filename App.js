/**
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
import CourseDetails from './components/course-details/CourseDetails.js'
import Header from './components/header/Header.js'
import Payment from './components/payment/Payment.js'
import Quiz from './components/quiz/Quiz.js'
import Dashboard from './components/dashboard/Dashboard.js'
import SignIn from './components/signin/SignIn.js'
import SignUp from './components/signup/SignUp.js'

import { firebase } from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
// These imports load individual services into the firebase namespace.


const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="/">
            {!user ? <SignIn /> : <Dashboard />}
          </Route>
          <Route path="/dashboard">
            {!user ? <SignIn /> :
              <ScrollView>
                <Header />
                <Dashboard />
              </ScrollView>
            }
          </Route>
          <Route path="/payment">
            {!user ? <SignIn /> :
              <ScrollView>
                <Header />
                <Payment />
              </ScrollView>
            }
          </Route>
          <Route path="/course-details">
            {!user ? <SignIn /> :
              <ScrollView>
                <Header />
                <CourseDetails />
              </ScrollView>
            }
          </Route>
          <Route path="/quiz">
            {!user ? <SignIn /> :
              <ScrollView>
                <Quiz />
              </ScrollView>
            }
          </Route>
          <Route path="/signup">
            {!user ? <SignUp /> :
              <ScrollView>
                <Header />
                <Dashboard />
              </ScrollView>
            }
          </Route>
        </Switch>
      </View>
    </NativeRouter>

  )
}

const styles = StyleSheet.create({})

export default App
