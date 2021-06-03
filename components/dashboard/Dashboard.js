import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.breadCrumb}>
        <Text style={styles.breadCrumbText}>Dashboard</Text>
      </View>
      <View style={styles.welcome}>
        <Text>Welcome,</Text>
        <Text style={styles.welcomeName}>Sajeel Ahmad</Text>
      </View>
      <ScrollView style={styles.dashboardExams}>
        <Text style={styles.dashboardHeading}>Trending Exams</Text>
        <View style={styles.dashboardExamsBoxes}>
          <View style={styles.dashboardExamsBox}>
            <Text style={styles.boxTitle}>Data Structures & Algorithrm</Text>
            <Text style={styles.boxAuthor}>Dr. David Gustavo</Text>
            <Text style={styles.boxPrice}>50/- USD</Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  )
}

const lightColor = '#f2f6ff'
const darkColor = '#405e87'

const breadCrumb = {
  marginTop: 20,
  alignSelf: 'flex-start',
}

const breadCrumbText = {
  fontSize: 13,
  color: darkColor,
  letterSpacing: 4,
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    color: '#405e87',
    marginLeft: 30,
  },
  breadCrumb: breadCrumb,
  breadCrumbText: breadCrumbText,
  welcome: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  welcomeName: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: darkColor,
  },
  dashboardHeading: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: darkColor,
  },
  dashboardExamsBoxes: {
    display: 'flex',
  },
  dashboardExamsBox: {
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 3,
    display: 'flex',
    flexDirection: 'column',
    width: 250,
    backgroundColor: lightColor,
    padding: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
    color: darkColor,
  },
  boxAuthor: {
    color: darkColor,
  },
  boxPrice: {
    marginTop: 20,
    fontWeight: 'bold',
    color: darkColor,
    alignSelf: 'flex-end',
  },
})

export default Dashboard
