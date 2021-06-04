import React from 'react'
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native'

const CourseDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.breadCrumb}>
        <Text style={styles.breadCrumbText}>Dashboard</Text>
        <Text style={styles.breadCrumbText}>→</Text>
        <Text style={styles.breadCrumbText}>Course Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.courseDetailWrapper}>
        <View style={styles.courseDetailRow}>
          <Text style={styles.rowHeading}>Title</Text>
          <Text style={styles.rowContent}>Data Structures & Algorithm</Text>
        </View>
        <View style={styles.courseDetailRow}>
          <Text style={styles.rowHeading}>Cost</Text>
          <Text style={styles.rowContent}>50/- USD</Text>
        </View>
        <View style={styles.courseDetailRow}>
          <Text style={styles.rowHeading}>Author</Text>
          <Text style={styles.rowContent}>Dr. David Gustavo</Text>
        </View>
        <View style={styles.courseDetailRow}>
          <Text style={styles.rowHeading}>Prerequisites</Text>
          <Text style={styles.rowContent}>Knowledge of OOP, Coding</Text>
        </View>
        <View style={styles.courseDetailRow}>
          <Text style={styles.rowHeading}>Benefits</Text>
          <Text style={styles.rowContent}>
            You may be new to Data Structure or you have already Studied and
            Implemented Data Structures but still you feel you need to learn
            more about Data Structure in detail so that it helps you solve
            challenging problems and used Data Structure efficiently. This 53
            hours of course covers each topic in greater details, every topic is
            covered on Whiteboard which will improve your Problem Solving and
            Analytical Skills. Every Data Structure is discussed, analysed and
            implemented with a Practical line-by-line coding.
          </Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>PAY</Text>
      </Pressable>
    </ScrollView>
  )
}
const lightColor = '#f2f6ff'
const darkColor = '#405e87'

const breadCrumb = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
  alignSelf: 'flex-start',
  marginLeft: 30,
}

const breadCrumbText = {
  fontSize: 13,
  color: darkColor,
  letterSpacing: 4,
}

const styles = StyleSheet.create({
  breadCrumb: breadCrumb,
  breadCrumbText: breadCrumbText,
  courseDetailWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 30,
  },
  courseDetailRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowContent: {
    fontWeight: 'bold',
    textAlign: 'justify',
    marginLeft: 15,
    maxWidth: 260,
    color: darkColor,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: darkColor,
    marginTop: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: darkColor,
    width: 350,
  },
  buttonText: {
    textAlign: 'center',
    color: lightColor,
  },
})

export default CourseDetails
