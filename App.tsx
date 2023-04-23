// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {withTheme} from 'styled-components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ThemeContextProvider from './src/ThemeContextProvider';
import routes from './src/routes';

const Stack = createNativeStackNavigator();

const Screen = Stack.Screen;
function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {routes.map((item, i) => (
            <Screen
              key={i}
              name={item.name}
              component={item.component}
              options={item.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}

export default App;

// screenOptions={{
//   headerStyle: {
//     backgroundColor: '#f4511e',
//   },
//   headerTitleAlign: 'center',
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// }}
//  title标题栏后期配置
