/**
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
import SignIn from './components/signin/SignIn.js'
import SignUp from './components/signup/SignUp.js'

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <Switch>
          <Route exact path='/' component={SignIn} />
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
