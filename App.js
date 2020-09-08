import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTab } from './src/navigation/HomeTab';
import { Provider } from "react-redux";
import store from './src/redux/store'
import { fetchDecks } from './src/utils/api';
import { getDecks } from "./src/redux/action/actions";
import { createStackNavigator } from '@react-navigation/stack';
import DeckScreen from './src/screen/DeckScreen';
import { NewQuestion } from './src/screen/newQuestion/index'

import QuizeScreen from './src/screen/quizeScreen/index'


export default function App() {


  return (

    <Provider store={store}>
      <AppWrapper />
    </Provider>


  );
}
const AppWrapper = () => {

  const [decks, setDecks] = React.useState()
  const Stack = createStackNavigator();

  React.useEffect(() => {
    fetchDecks()
      .then((decks) => {
        store.dispatch(getDecks(decks))
        setDecks(decks)
      });
  }, [])

  return (
    decks != null && <NavigationContainer>

      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'blue' },
        }}
      >
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="Deck" component={DeckScreen}
          options={({ route }) => ({ title: route.params.deck })} />
        <Stack.Screen name="Add Card" component={NewQuestion}
          options={({ route }) => ({ title: route.params.deck })} />
        <Stack.Screen name="Quiz" component={QuizeScreen}
          options={({ route }) => ({ title: route.params.deck })} />


      </Stack.Navigator>



    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50

  },
});
