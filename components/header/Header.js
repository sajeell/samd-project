import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from 'react-native'
import { Link } from 'react-router-native'
import auth from '@react-native-firebase/auth'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handeIsMobile = (e) => {
    e.preventDefault()
    setIsMobile(!isMobile)
  }
  if (!isMobile) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Link component={TouchableOpacity} to='/dashboard'>
            <Text style={styles.title}>EVALY</Text>
          </Link>
          <View style={styles.headerDotsContainer}>
            <Pressable onPress={handeIsMobile}>
              <Text style={styles.headerDots}>᎒</Text>
            </Pressable>
          </View>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Link component={TouchableOpacity} to='/dashboard'>
            <Text style={styles.title}>EVALY</Text>
          </Link>
          <View style={styles.headerDotsContainer}>
            <Pressable onPress={handeIsMobile}>
              <Text style={styles.headerDots}>᎒</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.headerMenu}>
          <Text style={styles.headerMenuItem}>HELP</Text>
          <TouchableOpacity
            onPress={(e) => {
              e.preventDefault()
              auth()
                .signOut()
                .then(() => alert('Signed out!'))
            }}
          >
            <Text style={styles.headerMenuItem}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const lightColor = '#f2f6ff'
const darkColor = '#405e87'

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    height: 50,
    width: '100%',
    backgroundColor: lightColor
  },
  title: {
    marginLeft: 30,
    letterSpacing: 5,
    fontWeight: 'bold',
    color: darkColor
  },
  headerDots: {
    color: darkColor,
    fontWeight: 'bold',
    marginRight: 30,
    fontSize: 20
  },
  headerMenu: {
    alignSelf: 'flex-end',
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: lightColor
  },
  headerMenuItem: {
    letterSpacing: 2,
    marginVertical: 5,
    color: darkColor
  }
})

export default Header
