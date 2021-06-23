import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native"
import { Link } from "react-router-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useQuery } from "urql"

const CourseDetails = () => {
  const [quizId, setQuizId] = useState(0)

  try {
    AsyncStorage.getItem("quizId").then((response) => {
      setQuizId(response)
    })
  } catch (e) {
    // error reading value
    alert(e)
  }

  const QuizQuery = `
  query {
    quizDetails(id: ${quizId}) {
      id
      title
      author
      price
      pre_req
      benefits
    }
  }
`

  const [result, reexecuteQuery] = useQuery({
    query: QuizQuery
  })

  const { data, fetching, error } = result

  if (fetching) return <Text>Loading...</Text>
  if (error) return <Text>Oh no... {error.message}</Text>

  return (
    <ScrollView style={styles.container}>
      <View style={styles.breadCrumb}>
        <Link component={TouchableOpacity} to='dashboard'>
          <Text style={styles.breadCrumbText}>Dashboard</Text>
        </Link>
        <Text style={styles.breadCrumbText}>→</Text>
        <Text style={styles.breadCrumbText}>Course Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.courseDetailWrapper}>
        {data.quizDetails.map((quiz) => (
          <ScrollView key={quiz.id}>
            <View style={styles.courseDetailRow}>
              <Text style={styles.rowHeading}>Title</Text>
              <Text style={styles.rowContent}>{quiz.title}</Text>
            </View>
            <View style={styles.courseDetailRow}>
              <Text style={styles.rowHeading}>Cost</Text>
              <Text style={styles.rowContent}>{quiz.price}/- USD</Text>
            </View>
            <View style={styles.courseDetailRow}>
              <Text style={styles.rowHeading}>Author</Text>
              <Text style={styles.rowContent}>{quiz.author}</Text>
            </View>
            <View style={styles.courseDetailRow}>
              <Text style={styles.rowHeading}>Prerequisites</Text>
              <Text style={styles.rowContent}>{quiz.pre_req}</Text>
            </View>
            <View style={styles.courseDetailRow}>
              <Text style={styles.rowHeading}>Benefits</Text>
              <Text style={styles.rowContent}>{quiz.benefits}</Text>
            </View>
          </ScrollView>
        ))}
        <Link component={TouchableOpacity} to='/payment'>
          <Text style={styles.formRow4}>PAY</Text>
        </Link>
      </ScrollView>
    </ScrollView>
  )
}
const lightColor = "#f2f6ff"
const darkColor = "#405e87"

const breadCrumb = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: 20,
  alignSelf: "flex-start",
  marginLeft: 30
}

const breadCrumbText = {
  fontSize: 13,
  color: darkColor,
  letterSpacing: 4
}

const styles = StyleSheet.create({
  breadCrumb: breadCrumb,
  breadCrumbText: breadCrumbText,
  courseDetailWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 30
  },
  courseDetailRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20
  },
  rowContent: {
    fontWeight: "bold",
    textAlign: "justify",
    marginLeft: 15,
    maxWidth: 260,
    color: darkColor
  },
  button: {
    alignSelf: "center",
    backgroundColor: darkColor,
    marginTop: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: darkColor,
    width: 350
  },
  formRow4: {
    textAlign: "center",
    marginBottom: 5,
    marginTop: 16,
    width: 320,
    alignSelf: "center",
    backgroundColor: darkColor,
    color: "white",
    paddingVertical: 10
  },
  buttonText: {
    textAlign: "center",
    color: lightColor
  }
})

export default CourseDetails
