import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native"
import { RadioButton } from "react-native-paper"
import { Link } from "react-router-native"
import { useQuery, useMutation } from "urql"
import AsyncStorage from "@react-native-async-storage/async-storage"
import auth from "@react-native-firebase/auth"

const Quiz = () => {
  const firebaseUser = auth().currentUser
  const [isChoiceOne, setIsChoiceOne] = useState(false)
  const [isChoiceTwo, setIsChoiceTwo] = useState(false)
  const [isChoiceThree, setIsChoiceThree] = useState(false)
  const [isChoiceFour, setIsChoiceFour] = useState(false)
  const [questionId, setQuestionId] = useState(1)
  const [quizTotalMarks, setQuizTotalMarks] = useState(0)
  const [quizTotalQuestions, setQuizTotalQuestions] = useState(0)
  const [choiceIsTrue, setChoiceIsTrue] = useState(false)
  const [marksObtained, setMarksObtained] = useState(0)
  const [quizId, setQuizId] = useState(0)
  const [userId, setUserId] = useState(firebaseUser.uid)
  const [quizTitle, setQuizTitle] = useState("")
  const [quizAuthor, setQuizAuthor] = useState("")

  AsyncStorage.getItem("quizTotalMarks").then((response) => {
    setQuizTotalMarks(parseInt(response))
  })

  AsyncStorage.getItem("quizTitle").then((response) => {
    setQuizTitle(response)
  })

  AsyncStorage.getItem("quizId").then((response) => {
    setQuizId(response)
  })

  AsyncStorage.getItem("quizAuthor").then((response) => {
    setQuizAuthor(response)
  })

  AsyncStorage.getItem("quizTotalQuestions").then((response) => {
    setQuizTotalQuestions(response)
  })

  const QuestionQuery = `
      query {
        question(id: ${1}, 
        quiz_id: ${1}) 
        {
          id
          title
          choice_1 {
            id
            title
            correct
          }
          choice_2 {
            id
            title
            correct
          }
          choice_3 {
            id
            title
            correct
          }
          choice_4 {
            id
            title
            correct
          }
        }
      }
  `

  const uploadResult = `
      mutation ($userId: String, $quizTitle: String, $author: String, $marksObtained: Int, $totalMarks: Int) {
        uploadResult (data: {userId: $userId, quizTitle: $quizTitle, author: $author, marksObtained: $marksObtained, totalMarks: $totalMarks}) {
          userId
          quizTitle
          author
          marksObtained
          totalMarks
        }
      }
  `

  const [uploadResultResponse, uploadResultMutation] = useMutation(uploadResult)

  const [result, reexecuteQuery] = useQuery({
    query: QuestionQuery
  })

  const { data, fetching, error } = result

  if (fetching) return <Text>Loading...</Text>
  if (error) return <Text>Oh no... {JSON.stringify(error)}</Text>

  const MCQs = () => {
    return (
      <View style={styles.container}>
        <Link component={TouchableOpacity} to='/dashboard'>
          <Text style={styles.quizIntro}>EVALY</Text>
        </Link>
        <Text style={styles.heading}>Normal Quiz</Text>
        <View style={styles.quizContent}>
          <View style={styles.quizRow}>
            <Text style={styles.questionNumberText}>
              Question {questionId}/{quizTotalQuestions}
            </Text>
          </View>
          <View style={styles.quizRow}>
            <Text style={styles.questionText}>{data.question.title}</Text>
          </View>
          <View style={styles.quizRadioRow}>
            <View style={styles.rowLeft}>
              <RadioButton
                value={true}
                status={isChoiceOne === true ? "checked" : "unchecked"}
                onPress={() => {
                  if (isChoiceOne === false) {
                    setIsChoiceTwo(false)
                    setIsChoiceThree(false)
                    setIsChoiceFour(false)
                  }
                  setIsChoiceOne(!isChoiceOne)
                  if (data.question.choice_1.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              />
            </View>
            <Text style={styles.rowRight}>{data.question.choice_1.title}</Text>
          </View>
          <View style={styles.quizRadioRow}>
            <View style={styles.rowLeft}>
              <RadioButton
                value={true}
                status={isChoiceTwo === true ? "checked" : "unchecked"}
                onPress={() => {
                  if (isChoiceTwo === false) {
                    setIsChoiceOne(false)
                    setIsChoiceThree(false)
                    setIsChoiceFour(false)
                  }
                  setIsChoiceTwo(!isChoiceTwo)
                  if (data.question.choice_2.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              />
            </View>
            <Text style={styles.rowRight}>{data.question.choice_2.title}</Text>
          </View>
          <View style={styles.quizRadioRow}>
            <View style={styles.rowLeft}>
              <RadioButton
                value={true}
                status={isChoiceThree === true ? "checked" : "unchecked"}
                onPress={() => {
                  if (isChoiceThree === false) {
                    setIsChoiceOne(false)
                    setIsChoiceTwo(false)
                    setIsChoiceFour(false)
                  }
                  setIsChoiceThree(!isChoiceThree)
                  if (data.question.choice_3.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              />
            </View>
            <Text style={styles.rowRight}>{data.question.choice_3.title}</Text>
          </View>
          <View style={styles.quizRadioRow}>
            <View style={styles.rowLeft}>
              <RadioButton
                value={true}
                status={isChoiceFour === true ? "checked" : "unchecked"}
                onPress={() => {
                  if (isChoiceFour === false) {
                    setIsChoiceOne(false)
                    setIsChoiceTwo(false)
                    setIsChoiceThree(false)
                  }
                  setIsChoiceFour(!isChoiceFour)
                  if (data.question.choice_4.correct) {
                    setChoiceIsTrue(true)
                  } else {
                    setChoiceIsTrue(false)
                  }
                }}
              />
            </View>
            <Text style={styles.rowRight}>{data.question.choice_4.title}</Text>
          </View>
        </View>
      </View>
    )
  }

  if (questionId != quizTotalQuestions) {
    return (
      <ScrollView>
        <MCQs />
        <TouchableOpacity
          style={styles.button}
          onPress={async (e) => {
            e.persist()
            if (choiceIsTrue) {
              setMarksObtained(marksObtained + 2)
            } else {
              setMarksObtained(marksObtained)
            }
            setQuestionId(questionId + 1)
          }}
        >
          <Text style={styles.buttonText}>NEXT QUESTION</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  } else if (questionId == quizTotalQuestions) {
    {
      return (
        <ScrollView>
          <MCQs />
          <View
            style={styles.button}
            onTouchStart={async (e) => {
              {
                if (choiceIsTrue) {
                  setMarksObtained(marksObtained + 2)
                } else {
                  setMarksObtained(marksObtained)
                }
                const variables = {
                  userId: firebaseUser.uid,
                  quizTitle: quizTitle,
                  author: quizAuthor,
                  marksObtained: marksObtained,
                  totalMarks: quizTotalMarks
                }
                uploadResultMutation(variables).then(async (result) => {
                  alert("Submitted Successfully")
                  await AsyncStorage.removeItem("marksObtained")
                  await AsyncStorage.removeItem("quizTitle")
                  await AsyncStorage.removeItem("quizId")
                  await AsyncStorage.removeItem("quizAuthor")
                  await AsyncStorage.removeItem("quizTotalMarks")
                  await AsyncStorage.removeItem("quizTotalQuestions")
                })
              }
            }}
          >
            <Link to='dashboard' component={TouchableOpacity}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </Link>
          </View>
        </ScrollView>
      )
    }
  }
}
const lightColor = "#f2f6ff"
const darkColor = "#405e87"

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
  quizIntro: {
    marginLeft: 30,
    color: darkColor,
    fontWeight: "bold",
    fontSize: 18
  },
  heading: {
    marginLeft: 30,
    color: darkColor,
    fontSize: 15,
    marginTop: 7
  },
  quizContent: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 20
  },
  quizRadioRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 20,
    padding: 5,
    width: 300,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
    backgroundColor: lightColor
  },
  rowLeft: {
    marginLeft: 40
  },
  rowRight: {
    color: darkColor
  },
  questionNumberText: {
    color: darkColor,
    marginTop: 15,
    fontSize: 16
  },
  questionText: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: "bold",
    color: darkColor
  },
  button: {
    alignSelf: "center",
    backgroundColor: darkColor,
    marginTop: 30,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: darkColor,
    width: 334,
    marginLeft: -10
  },
  buttonText: {
    textAlign: "center",
    color: lightColor
  }
})

export default Quiz
