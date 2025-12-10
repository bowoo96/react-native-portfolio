import {
    View,
    Platform,
    StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DigNavigator from "../../navigators/DigNavigator";
import MapNavigator from "../../navigators/MapNavigator";
import MyPageNavigator from "../../navigators/MyPageNavigator";
import LogNavigator from "../../navigators/LogNavigator";

const TabBar = () => {

    const Tab = createBottomTabNavigator();

    return (
        <View style={styles.navigationWrapper}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        height: Platform.OS === 'ios' ? 80 : 60,
                        paddingBottom: Platform.OS === 'ios' ? 7 : 0,
                        paddingLeft: Platform.OS === 'ios' ? 35 : 25,
                        paddingRight: Platform.OS === 'ios' ? 35 : 25,
                        position: 'absolute',
                        bottom: 0,
                        borderTopWidth: 0,
                        shadowOffset: {
                            width: 0,
                            height: 15,
                        },
                        zIndex: 998,
                        shadowOpacity: 0.2,
                        shadowRadius: 25,
                    },
                }}
            >
                <Tab.Screen
                    name="DigNavigator"
                    component={DigNavigator}
                />
                <Tab.Screen
                    name="MapNavigator"
                    component={MapNavigator}
                />

                <Tab.Screen
                    name="LogNavigator"
                    component={LogNavigator}
                />
                <Tab.Screen
                    name="MyPageNavigator"
                    component={MyPageNavigator}
                />
            </Tab.Navigator>
        </View>
    )
};

export default TabBar;

const styles = StyleSheet.create({
    navigationWrapper: {
        flex: 1,
        position: 'relative',
    },
});