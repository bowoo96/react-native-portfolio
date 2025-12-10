import {
    createStackNavigator,
} from '@react-navigation/stack';
import LogPage from '../pages/log/LogPage';
import MenuPage from '../pages/menu/MenuPage';

const Stack = createStackNavigator();

const LogNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="LogPage"
        >
            <Stack.Screen
                name="LogPage"
                component={LogPage}
            />
            <Stack.Screen
                name="MenuPage"
                component={MenuPage}
            />
        </Stack.Navigator>
    );
}

export default LogNavigator;