/**
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
// import CourseDetails from './components/course-details/CourseDetails.js'
// import Header from './components/header/Header.js'
// import Payment from './components/payment/Payment.js'
import Quiz from './components/quiz/Quiz.js'
// import Dashboard from './components/dashboard/Dashboard.js'
// import SignIn from './components/signin/SignIn.js'
import SignUp from './components/signup/SignUp.js'

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <Switch>
          <Route exact path='/'>
            {/* <Header /> */}
            {/* <Payment /> */}
            <Quiz />
            {/* <CourseDetails /> */}
            {/* <Dashboard /> */}
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </SafeAreaView>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({})

export default App
