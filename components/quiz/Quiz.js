import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {RadioButton} from 'react-native-paper'

const Quiz = () => {
  const [isChoiceOne, setIsChoiceOne] = useState(false)
  const [isChoiceTwo, setIsChoiceTwo] = useState(false)
  const [isChoiceThree, setIsChoiceThree] = useState(false)
  const [isChoiceFour, setIsChoiceFour] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.quizIntro}>EVALY</Text>
      <Text style={styles.heading}>Normal Quiz</Text>
      <View style={styles.quizContent}>
        <View style={styles.quizRow}>
          <Text style={styles.questionNumberText}>Question 1/4</Text>
        </View>
        <View style={styles.quizRow}>
          <Text style={styles.questionText}>
            Which of the following is true?
          </Text>
        </View>
        <View style={styles.quizRadioRow}>
          <View style={styles.rowLeft}>
            <RadioButton
              value={true}
              status={isChoiceOne === true ? 'checked' : 'unchecked'}
              onPress={() => {
                setIsChoiceOne(!isChoiceOne)
              }}
            />
          </View>
          <Text style={styles.rowRight}>Stack is not a heap</Text>
        </View>
        <View style={styles.quizRadioRow}>
          <View style={styles.rowLeft}>
            <RadioButton
              value={true}
              status={isChoiceTwo === true ? 'checked' : 'unchecked'}
              onPress={() => {
                setIsChoiceTwo(!isChoiceTwo)
              }}
            />
          </View>
          <Text style={styles.rowRight}>Stack is a heap</Text>
        </View>
        <View style={styles.quizRadioRow}>
          <View style={styles.rowLeft}>
            <RadioButton
              value={true}
              status={isChoiceThree === true ? 'checked' : 'unchecked'}
              onPress={() => {
                setIsChoiceThree(!isChoiceThree)
              }}
            />
          </View>
          <Text style={styles.rowRight}>Stack is a linked list</Text>
        </View>
        <View style={styles.quizRadioRow}>
          <View style={styles.rowLeft}>
            <RadioButton
              value={true}
              status={isChoiceFour === true ? 'checked' : 'unchecked'}
              onPress={() => {
                setIsChoiceFour(!isChoiceFour)
              }}
            />
          </View>
          <Text style={styles.rowRight}>Stack is not a stack</Text>
        </View>
        <View style={styles.quizRadioRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const lightColor = '#f2f6ff'
const darkColor = '#405e87'

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  quizIntro: {
    marginLeft: 30,
    color: darkColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
  heading: {
    marginLeft: 30,
    color: darkColor,
    fontSize: 15,
    marginTop: 7,
  },
  quizContent: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
  },
  quizRadioRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 20,
    padding: 5,
    width: 300,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
    backgroundColor: lightColor,
  },
  rowLeft: {
    marginLeft: 40,
  },
  rowRight: {
    color: darkColor,
  },
  questionNumberText: {
    color: darkColor,
    marginTop: 15,
    fontSize: 16,
  },
  questionText: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: darkColor,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: darkColor,
    marginTop: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: darkColor,
    width: 334,
    marginLeft: -43,
  },
  buttonText: {
    textAlign: 'center',
    color: lightColor,
  },
})

export default Quiz
