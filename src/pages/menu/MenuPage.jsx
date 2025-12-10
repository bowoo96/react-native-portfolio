import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    Linking
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MenuPage = ({ navigation }) => {

    const logoutHandler = async () => {
        try {
            await AsyncStorage.removeItem("userData");
            navigation.reset({ index: 0, routes: [{ name: 'LoginNavigator' }] });
        } catch (err) {
            console.log("MenuPage/logoutHandler error : ", err);
        }
    };

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={{ marginTop: 50 }}
                onPress={() => navigation.goBack()}
            >
                <Text>{`<-Back`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginTop: 30 }}
                onPress={() => Linking.openSettings()}
            >
                <Text>通知設定の権限</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={logoutHandler}
            >
                <Text>ログアウト</Text>
            </TouchableOpacity>
        </View>
    )
};

export default MenuPage;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: Platform.OS === "ios" && 30,
        paddingHorizontal: 10,
        backgroundColor: "#fff"
    },
    logoutButton: {
        marginTop: 30,
    },
});