import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Login/HomeScreen"
import LoginFrom from "../screens/Login/LoginFrom"
import OnboardingScreen from "../screens/OnboardingScreen"
import Normal from "../screens/Normal"
import SingUpFrom from "../screens/Regs/SingUpFrom"
import SelectPhoneNumber from "../screens/Otp/SelectPhoneNumber"
import PhoneVerification from "../screens/Otp/PhoneVerification"

const RootStackScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="loginFrom" component={LoginFrom} />
        <Stack.Screen options={{ headerShown: false }} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Normal" component={Normal} />
        <Stack.Screen options={{ headerShown: false }} name="SingupFrom" component={SingUpFrom} />
        <Stack.Screen options={{ headerShown: false }} name="SelectphoneNumber" component={SelectPhoneNumber} />
        <Stack.Screen options={{ headerShown: false }} name="Phoneverification" component={PhoneVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStackScreen