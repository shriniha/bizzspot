import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './welcome';
import SignUpScreen from './Signupscreen'; // Assuming this is your SignUp component
import LoginScreen from './loginscreen';// Assuming this is your Login component
import TabLayout from './app';
const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="SIGNUP" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LOGIN" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="APP" component={TabLayout} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppStack;
