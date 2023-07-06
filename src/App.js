import React from 'react';
import {Provider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './container';
import ExpenseForm from './ExpenseForm';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#009688',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={ExpenseForm} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
