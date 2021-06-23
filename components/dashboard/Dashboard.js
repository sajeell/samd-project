import React from 'react'
import { Link } from 'react-router-native'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useQuery } from 'urql'
import AsyncStorage from '@react-native-async-storage/async-storage'

const QuizQuery = `
  query {
    quiz {
      id
      title
      author
      price
      total_questions
      total_marks
    }
  }
`

const Dashboard = () => {
  const [result, reexecuteQuery] = useQuery({
    query: QuizQuery
  })

  const { data, fetching, error } = result

  if (fetching) return <Text>Loading...</Text>
  if (error) return <Text>Oh no... {JSON.stringify(error)}</Text>

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
          {data.quiz.map((quiz) => (
            <ScrollView
              key={quiz.id}
              onTouchStart={async (e) => {
                e.preventDefault()
                await AsyncStorage.setItem('quizId', JSON.stringify(quiz.id))
                await AsyncStorage.setItem(
                  'quizTotalMarks',
                  JSON.stringify(quiz.total_marks)
                )
                await AsyncStorage.setItem(
                  'quizTotalQuestions',
                  JSON.stringify(quiz.total_questions)
                )
                await AsyncStorage.setItem('quizTitle', quiz.title)
                await AsyncStorage.setItem('quizAuthor', quiz.author)
              }}
            >
              <Link component={TouchableOpacity} to='course-details'>
                <View style={styles.dashboardExamsBox}>
                  <Text style={styles.boxTitle}>{quiz.title}</Text>
                  <Text style={styles.boxAuthor}>By {quiz.author}</Text>
                  <Text style={styles.boxPrice}>{quiz.price}/- USD</Text>
                </View>
              </Link>
            </ScrollView>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  )
}

const lightColor = '#f2f6ff'
const darkColor = '#405e87'

const breadCrumb = {
  marginTop: 20,
  alignSelf: 'flex-start'
}

const breadCrumbText = {
  fontSize: 13,
  color: darkColor,
  letterSpacing: 4
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    color: '#405e87',
    marginLeft: 30
  },
  breadCrumb: breadCrumb,
  breadCrumbText: breadCrumbText,
  welcome: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  welcomeName: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: darkColor
  },
  dashboardHeading: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: darkColor
  },
  dashboardExamsBoxes: {
    display: 'flex'
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  boxTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
    color: darkColor
  },
  boxAuthor: {
    color: darkColor
  },
  boxPrice: {
    marginTop: 20,
    fontWeight: 'bold',
    color: darkColor,
    alignSelf: 'flex-end'
  }
})

export default Dashboard
