import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import commonStyles from "../../styles/commonStyles";
import { useNavigation } from "@react-navigation/native";

const DigHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Text style={commonStyles.font_t1_sb}>LOGO</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("MenuPage")}
            >
                <Text style={commonStyles.font_t1_sb}>MENU</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DigHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        height: 60,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#C6C6C8",
        borderBottomWidth: 0.5,
        paddingHorizontal: 20
    },
})