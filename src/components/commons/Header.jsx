import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HamburgerSVG } from "../../assets/svgCollection";

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerWrapper}>
            <Text>MARKON</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("MenuPage")}
            >
                <HamburgerSVG />
            </TouchableOpacity>
        </View>
    )
};

export default Header;

const styles = StyleSheet.create({
    headerWrapper: {
        marginTop: Platform.OS === "ios" && 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 50,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1
    },
});