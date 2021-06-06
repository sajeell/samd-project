/**
 * @format
 * @flow strict-local
 */

import React from 'react'
import {StyleSheet, View} from 'react-native'
import {NativeRouter, Switch, Route} from 'react-router-native'
import CourseDetails from './components/course-details/CourseDetails.js'
import Header from './components/header/Header.js'
import Payment from './components/payment/Payment.js'
import Quiz from './components/quiz/Quiz.js'
import Dashboard from './components/dashboard/Dashboard.js'
import SignIn from './components/signin/SignIn.js'
import SignUp from './components/signup/SignUp.js'

const App = () => {
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <Header />
            <Dashboard />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/course-details">
            <Header />
            <CourseDetails />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({})

export default App
