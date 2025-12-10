import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from "react-native";
import commonStyles from "../../styles/commonStyles";
import portfolioAlertFunction from "../../modules/portfolioAlertFunction";

const LoginPage = ({ navigation }) => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.logoWrapper}>
                <Text style={styles.logo}>Portfolio Demo App</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("TabBar")}
                style={commonStyles.largeButton}
            >
                <Text style={commonStyles.buttonFont14Boldffffff}>はじめる</Text>
            </TouchableOpacity>
            <View style={styles.bottomLoginWrapper}>
                <Text style={commonStyles.textFont14Medium222222}>すでにアカウントをお持ちですか？</Text>
                <TouchableOpacity
                    onPress={portfolioAlertFunction}
                    style={styles.loginButton}
                >
                    <Text style={[commonStyles.textFont14Bold222222, { lineHeight: Platform.OS === "ios" ? 13 : 17 }]}>ログイン</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    logoWrapper: {
        height: 300,
    },
    logo: {
        fontFamily: "GmarketSansTTFBold",
        fontSize: 20,
        color: "#222",
        textAlign: "center",
        marginBottom: 20
    },
    bottomLoginWrapper: {
        marginTop: 20,
        flexDirection: "row"
    },
    loginButton: {
        marginLeft: 5,
        borderBottomColor: "#222",
        borderBottomWidth: 1,
    },
});