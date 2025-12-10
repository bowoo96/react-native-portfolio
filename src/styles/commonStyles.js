import {
    StyleSheet,
    Platform
} from "react-native";

export default commonStyles = StyleSheet.create({
    // button
    largeButton: {
        width: "100%",
        height: 50,
        backgroundColor: "#222222",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    largeWhiteButton: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#222"
    },
    button130: {
        width: 130,
        height: 50,
        backgroundColor: "#222222",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    button100: {
        width: 100,
        height: 50,
        backgroundColor: "#222222",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    button80: {
        width: 80,
        height: 30,
        backgroundColor: "#222222",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    button50: {
        width: 50,
        height: 20,
        borderColor: "#222",
        borderWidth: 1.5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    button130ffffff: {
        width: 130,
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    button100ffffff: {
        width: 100,
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    button80ffffff: {
        width: 80,
        height: 30,
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },


    // input
    input1: {
        flex: 1,
        height: 50,
        borderWidth: 1.5,
        borderColor: "#222",
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: "GmarketSansTTFMedium",
        color: "#222222",
        fontSize: 14,
    },


    //wrapper - row
    rowWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    wrapper: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "ios" ? 50 : 30,
    },


    //font
    font_h1_sb: {
        fontFamily: "Pretendard-SemiBold",
        fontSize: 24,
    },
    font_t1_sb: {
        fontFamily: "Pretendard-SemiBold",
        fontSize: 20,
    },
    font_b1_m: {
        fontFamily: "Pretendard-Medium",
        fontSize: 18,
    },
    font_b2_r: {
        fontFamily: "Pretendard-Regular",
        fontSize: 18,
    },
    font_c1_r: {
        fontFamily: "Pretendard-Regular",
        fontSize: 16,
    },
    font_c2_m: {
        fontFamily: "Pretendard-Medium",
        fontSize: 12,
    },


    // button font (size/weight/color)
    buttonFont14Boldffffff: {
        fontFamily: "GmarketSansTTFBold",
        color: "#ffffff",
        fontSize: 14
    },
    buttonFont14Bold222222: {
        fontFamily: "GmarketSansTTFBold",
        color: "#222222",
        fontSize: 14
    },
    buttonFont12Boldffffff: {
        fontFamily: "GmarketSansTTFBold",
        color: "#ffffff",
        fontSize: 12
    },
    buttonFont12Bold222222: {
        fontFamily: "GmarketSansTTFBold",
        color: "#222222",
        fontSize: 12
    },
});