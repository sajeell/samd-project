import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { RadioButton } from 'react-native-paper'
import { Link } from 'react-router-native'

const Payment = () => {
  const [isCard, setIsCard] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvc, setCVC] = useState('')
  const [validThru, setValidThru] = useState('')

  const submitForm = () => {
    if (
      name === '' ||
      email === '' ||
      cardNumber === '' ||
      cvc === '' ||
      validThru === '' ||
      isCard !== true
    ) {
      alert('Missing Inputs!')
      return
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView style={styles.paymentTop}>
        <View style={styles.paymentIntro}>
          <View style={styles.breadCrumb}>
            <Link component={TouchableOpacity} to='dashboard'>
              <Text style={styles.breadCrumbText}>Dashboard</Text>
            </Link>
            <Text style={styles.breadCrumbText}>→</Text>
            <Link component={TouchableOpacity} to='course-details'>
              <Text style={styles.breadCrumbText}>Course Details</Text>
            </Link>
            <Text style={styles.breadCrumbText}>→</Text>
            <Text style={styles.breadCrumbText}>Payment</Text>
          </View>
          <Text style={styles.title}>Checkout</Text>
          <Text style={styles.heading}>PERSONAL DETAILS</Text>
          <View style={styles.borderDiv}></View>
        </View>
        <View style={styles.personalDetails}>
          <View style={styles.inputRow}>
            <Text style={styles.inputTitle}>FULL NAME</Text>
            <TextInput
              style={styles.paymentInput}
              placeholder='e.g. Sajeel Ahmad'
              keyboardType='name-phone-pad'
              value={name}
              onChange={(e) => {
                setName(e.nativeEvent.text)
              }}
            ></TextInput>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
            <TextInput
              style={styles.paymentInput}
              placeholder='e.g. abc@abc.com'
              keyboardType='email-address'
              onChange={(e) => {
                setEmail(e.nativeEvent.text)
              }}
            ></TextInput>
          </View>
        </View>
        <Text style={styles.heading}>PAYMENT METHOD</Text>
        <View style={styles.borderDiv}></View>
        <View style={styles.paymentMethod}>
          <View style={styles.paymentMethodRow}>
            <View style={styles.paymentMethodRowLeft}>
              <RadioButton
                value={true}
                status={isCard === true ? 'checked' : 'unchecked'}
                onPress={() => {
                  setIsCard(!isCard)
                }}
              />
            </View>
            <View style={styles.paymentMethodRowRight}>
              <Text style={styles.paymentMethodRowRightTitle}>
                Debit/Credit Card
              </Text>
              <Text style={styles.paymentMethodRowRightDescription}>
                Safe and quick payment using world's leading payment system
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <ScrollView contentContainerStyle={styles.paymentBottom}>
        <Text style={styles.heading}>PERSONAL DETAILS</Text>
        <View style={styles.borderDiv}></View>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>NAME ON CARD</Text>
          <TextInput
            style={styles.paymentInput}
            placeholder='e.g. Sajeel Ahmad'
            keyboardType='name-phone-pad'
            value={name}
            onChange={(e) => {
              setName(e.nativeEvent.text)
            }}
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>CARD NUMBER</Text>
          <TextInput
            style={styles.paymentInput}
            placeholder='e.g. XXXX-XXXX-XXXX-XXXX'
            keyboardType='number-pad'
            onChange={(e) => {
              setCardNumber(e.nativeEvent.text)
            }}
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>CVC</Text>
          <TextInput
            style={styles.paymentInput}
            placeholder='e.g. XXX'
            keyboardType='number-pad'
            onChange={(e) => {
              setCVC(e.nativeEvent.text)
            }}
          ></TextInput>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>VALID THRU</Text>
          <TextInput
            style={styles.paymentInput}
            placeholder='e.g. MM/YY'
            keyboardType='number-pad'
            onChange={(e) => {
              setValidThru(e.nativeEvent.text)
            }}
          ></TextInput>
        </View>
        <View onTouchStart={submitForm}>
          <Link component={TouchableOpacity} to='/quiz'>
            <Text style={styles.formRow4}>PAY</Text>
          </Link>
        </View>
      </ScrollView>
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
  alignSelf: 'flex-start'
}

const breadCrumbText = {
  fontSize: 13,
  color: darkColor,
  letterSpacing: 4
}

const styles = StyleSheet.create({
  container: {},
  breadCrumb: breadCrumb,
  breadCrumbText: breadCrumbText,
  title: {
    marginTop: 20,
    fontSize: 17,
    color: darkColor
  },
  heading: {
    color: darkColor,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 14
  },
  paymentTop: {
    marginLeft: 30
  },
  borderDiv: {
    width: 200,
    paddingTop: 12,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  personalDetails: {},
  inputRow: {
    display: 'flex'
  },
  inputTitle: {
    color: darkColor,
    fontSize: 14,
    marginTop: 20
  },
  paymentInput: {
    color: darkColor,
    marginTop: 10,
    padding: 8,
    width: 330,
    borderWidth: 1,
    borderColor: darkColor
  },
  paymentMethod: {
    marginTop: 10
  },
  paymentMethodRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  paymentMethodRowLeft: {
    marginRight: 10
  },
  paymentMethodRowRight: {
    display: 'flex'
  },
  paymentMethodRowRightTitle: {
    color: darkColor,
    fontSize: 14,
    fontWeight: 'bold'
  },
  paymentMethodRowRightDescription: {
    fontSize: 12,
    maxWidth: 250,
    color: darkColor
  },
  paymentBottom: {
    marginLeft: 30,
    paddingBottom: 70
  },
  button: {
    alignSelf: 'center',
    backgroundColor: darkColor,
    marginTop: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: darkColor,
    width: 334,
    marginRight: 30
  },
  formRow4: {
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 26,
    width: 330,
    backgroundColor: darkColor,
    color: 'white',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: lightColor
  }
})

export default Payment
