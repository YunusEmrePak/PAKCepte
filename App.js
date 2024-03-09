import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import MainPage from "./pages/MainPage";
import StopPage from "./pages/StopPage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TimePage from "./pages/TimePage";
import { store } from "./store/store";
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Stop"
            component={StopPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Time"
            component={TimePage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
