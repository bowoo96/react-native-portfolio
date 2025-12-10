import {
    createStackNavigator,
} from '@react-navigation/stack';
import LoginPage from '../pages/login/LoginPage';

const Stack = createStackNavigator();

const LoginNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="LoginPage"
        >
            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
            />
        </Stack.Navigator>
    );
}

export default LoginNavigator;