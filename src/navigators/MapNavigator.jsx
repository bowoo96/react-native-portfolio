import {
    createStackNavigator,
} from '@react-navigation/stack';
import MapPage from '../pages/map/MapPage';

const Stack = createStackNavigator();

const MapNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="MapPage"
        >
            <Stack.Screen
                name="MapPage"
                component={MapPage}
            />
        </Stack.Navigator>
    );
}

export default MapNavigator;