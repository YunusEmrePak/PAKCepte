import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "./pages/MainPage";
import StopPage from "./pages/StopPage";
import TimePage from "./pages/TimePage";

import registerNNPushToken from "native-notify";

const Stack = createNativeStackNavigator();

export default function App() {
  registerNNPushToken(20107, "C98DT4OZ3bS5SuBP9UvSkW");

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
