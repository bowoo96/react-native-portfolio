import {
    createStackNavigator,
} from '@react-navigation/stack';
import DigPage from '../pages/dig/DigPage';
import MenuPage from '../pages/menu/MenuPage';

const Stack = createStackNavigator();

const DigNavigator = ({ navigation, route }) => {


    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="DigPage"
        >
            <Stack.Screen
                name="DigPage"
                component={DigPage}
            />
            <Stack.Screen
                name="MenuPage"
                component={MenuPage}
            />
        </Stack.Navigator>
    );
}

export default DigNavigator;