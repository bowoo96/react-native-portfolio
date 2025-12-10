import {
    View,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Text
} from "react-native";
import commonStyles from "../../styles/commonStyles";
import portfolioAlertFunction from "../../modules/portfolioAlertFunction";

const DigListBoxStyle1 = ({ item, index }) => {

    return (
        <View
            style={[styles.shadowWrapper, {
                width: 331,
                marginLeft: index === 0 ? 0 : 16,
            }]}
        >
            <TouchableOpacity
                key={item.place_id}
                onPress={portfolioAlertFunction}
                style={styles.boxTouchable}
            >
                <View style={styles.boxMain}>
                    <View style={styles.boxImage}>
                    </View>
                </View>
                <View style={styles.boxBottom}>
                    <Text style={[commonStyles.font_t1_sb,
                    {
                        color: "#000"
                    }]}>{item.title}</Text>
                    <Text style={[commonStyles.font_b2_r,
                    {
                        color: "#5F5F5F",
                        marginTop: 8,
                        marginBottom: 4
                    }]}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default DigListBoxStyle1;

const styles = StyleSheet.create({
    shadowWrapper: {
        backgroundColor: "#fff",
        borderRadius: 20,
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
    boxTouchable: {
        borderRadius: 20,
        overflow: "hidden", // 터치 영역만 클립
        height: 331,
    },
    boxMain: {
        height: 220,
        backgroundColor: "#ddd", // 그림자 대상 배경
    },
    boxImage: {
        position: "absolute",
        left: 15,
        bottom: 8,
    },
    boxBottom: {
        height: 111,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingHorizontal: 15
    },
    starButton: {
        alignItems: "center"
    }
});