import {
    View,
    Image,
    StyleSheet
} from "react-native";
import loading from "../../assets/image/loading_icon.gif";

const Loading = () => {

    return (
        <View style={styles.background}>
            <Image source={loading} style={styles.icon} />
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        backgroundColor: "#fff"
    },
    icon: {
        width: 40,
        height: 40,
        opacity: 0.3
    },
});