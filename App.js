import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Restaurant from "./screens/Restaurant";
import { store } from "./store";
import { Provider } from "react-redux";
import CheckOut from "./screens/CheckOut";
import RequestScreen from "./screens/RequestScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import Welcome from "./screens/Welcome";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen
              name="CheckOut"
              component={CheckOut}
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen
              name="Request"
              component={RequestScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
