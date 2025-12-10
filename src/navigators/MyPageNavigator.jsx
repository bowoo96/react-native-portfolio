import {
    createStackNavigator,
} from '@react-navigation/stack';
import MyPage from '../pages/mypage/MyPage';

const Stack = createStackNavigator();

const MypageNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="MyPage"
        >
            <Stack.Screen
                name="MyPage"
                component={MyPage}
            />
        </Stack.Navigator>
    );
}

export default MypageNavigator;