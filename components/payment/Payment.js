import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, Pressable} from 'react-native'
import {RadioButton} from 'react-native-paper'

const Payment = () => {
  const [isCard, setIsCard] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paymentTop}>
        <View style={styles.paymentIntro}>
          <View style={styles.breadCrumb}>
            <Text style={styles.breadCrumbText}>Dashboard</Text>
            <Text style={styles.breadCrumbText}>→</Text>
            <Text style={styles.breadCrumbText}>Course Details</Text>
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
              placeholder="e.g. Sajeel Ahmad"
              keyboardType="name-phone-pad"></TextInput>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
            <TextInput
              style={styles.paymentInput}
              placeholder="e.g. abc@abc.com"
              keyboardType="email-address"></TextInput>
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
      </View>
      <View style={styles.paymentBottom}>
        <Text style={styles.heading}>PERSONAL DETAILS</Text>
        <View style={styles.borderDiv}></View>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>NAME ON CARD</Text>
          <TextInput
            style={styles.paymentInput}
            placeholder="e.g. Sajeel Ahmad"
            keyboardType="name-phone-pad"></TextInput>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>CARD NUMBER</Text>
          <TextInput
            style={styles.paymentInput}
            placeholder="e.g. XXXX-XXXX-XXXX-XXXX"
            keyboardType="number-pad"></TextInput>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>CVC</Text>
          <TextInput
            style={styles.paymentInput}
            placeholder="e.g. XXX"
            keyboardType="number-pad"></TextInput>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>PAY</Text>
        </Pressable>
      </View>
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
  container: {},
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

export default Payment
