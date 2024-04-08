import {createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from '../Pages/Inicio'
import SignIn from '../Pages/Signin';
import SignUp from '../Pages/Signup';
import Main from '../Pages/Main';
import Dashboard from '../Pages/Dashboard';
import Detalhes from '../Pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{ headerShown: false }}
                initialParams={{ path: '/inicio' }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
                initialParams={{ path: '/signin' }}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
                initialParams={{ path: '/signup' }}
            />

            <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
                initialParams={{ path: '/main' }}
            />

            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
                initialParams={{ path: '/dashboard' }}
            />

            <Stack.Screen
                name="Detalhes"
                component={Detalhes}
                options={{ headerShown: false }}
                initialParams={{ path: '/detalhes' }}
            />
                
        </Stack.Navigator>
    );
}