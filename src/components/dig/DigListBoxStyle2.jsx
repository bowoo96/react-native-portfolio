import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
    Text
} from "react-native";
import commonStyles from "../../styles/commonStyles";
import portfolioAlertFunction from "../../modules/portfolioAlertFunction";

const DigListBoxStyle2 = ({ item, index, processivity }) => {

    const widthValue = () => {
        const percent = (processivity * 10).toString() + "%"
        return percent;
    };

    return (
        <TouchableOpacity
            style={[styles.shadowWrapper, { marginTop: index === 0 ? 0 : 16 }]}
            onPress={portfolioAlertFunction}
        >
            <View style={styles.leftWrapper} />
            <View style={{ flex: 1, paddingHorizontal: 16, justifyContent: "center" }}>
                <Text style={[commonStyles.font_b1_m, { color: "#5F5F5F" }]}>{item.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8, marginBottom: 16 }}>
                    <Text style={[commonStyles.font_h1_sb, { color: "#000000" }]}>{item.percent}</Text>
                    <Text style={[commonStyles.font_b1_m, { color: "#5F5F5F" }]}>/ 100%</Text>
                </View>
                <View style={styles.barBackground}>
                    <View style={[styles.bar, { width: widthValue() }]} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DigListBoxStyle2;

const styles = StyleSheet.create({
    shadowWrapper: {
        borderRadius: 20,
        width: Dimensions.get("screen").width - 32,
        height: 112,
        marginHorizontal: 16,
        backgroundColor: "#fff",
        flexDirection: "row",
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    leftWrapper: {
        width: 112,
        height: 112,
        backgroundColor: "#ddd",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    barBackground: {
        width: "100%",
        height: 12,
        backgroundColor: "#E8E8E6",
        borderRadius: 4,
        overflow: "hidden"
    },
    bar: {
        height: 12,
        backgroundColor: "orange"
    },
});