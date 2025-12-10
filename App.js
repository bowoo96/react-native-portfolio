import { useEffect } from 'react';
import {
    StyleSheet,
    StatusBar,
    Platform,
    View,
} from 'react-native';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack';
import { permissionHandler } from './src/modules/permissionFunction';
import SplashScreen from "react-native-splash-screen";
import TabBar from './src/components/commons/TabBar';
import StartCheckPage from './src/pages/login/StartCheckPage';
import MenuPage from './src/pages/menu/MenuPage';
import LoginNavigator from './src/navigators/LoginNavigator';

const Stack = createStackNavigator();

function App() {

    const multiplePermissionHandler = async () => {
        if (Platform.OS === "ios") {
            await permissionHandler("notification");
            await permissionHandler("camera");
            await permissionHandler("location");
        } else if (Platform.OS === "android") {
            await permissionHandler("android");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
        multiplePermissionHandler();
    }, []);

    return (
        <RecoilRoot>
            <View style={styles.container}>
                {Platform.OS === "ios" && <StatusBar barStyle={"dark-content"} />}
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{ headerShown: false }}
                        initialRouteName="StartCheckPage"
                    >
                        <Stack.Screen
                            name="StartCheckPage"
                            component={StartCheckPage}
                        />
                        <Stack.Screen
                            name="LoginNavigator"
                            component={LoginNavigator}
                        />
                        <Stack.Screen
                            name="TabBar"
                            component={TabBar}
                        />
                        <Stack.Screen
                            name="MenuPage"
                            component={MenuPage}
                            options={{
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                            }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </RecoilRoot>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
});

export default App;
