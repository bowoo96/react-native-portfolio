import {
    View,
    StyleSheet,
    TextInput,
    Platform
} from "react-native";
import {
    useState
} from "react";
import commonStyles from "../../styles/commonStyles";
import { SearchIcon } from "../../assets/svgCollection";
import portfolioAlertFunction from "../../modules/portfolioAlertFunction";


const MapSearchBar = () => {
    const [keyword, setKeyword] = useState("");

    return (
        <View style={[styles.shadowWrapper, {
            flexDirection: "row",
            alignItems: "center",
            top: 60,
            position: "absolute",
            zIndex: 2,
            marginHorizontal: 16
        }]}>
            <TextInput
                style={[commonStyles.font_c1_r, styles.input]}
                placeholder="行きたい場所検索"
                value={keyword}
                placeholderTextColor={"#ACACAF"}
                selectionColor={"#14AE5C"}
                onChangeText={(text) => setKeyword(text)}
                onFocus={portfolioAlertFunction}
            />
            <SearchIcon style={styles.inputIcon} />
        </View>
    );
};

export default MapSearchBar;

const styles = StyleSheet.create({
    searchWrapper: {
        width: "100%",
        height: 45,
        position: "absolute",
        top: Platform.OS === "ios" ? 70 : 40,
        zIndex: 2,
        paddingHorizontal: 20,
    },
    // input: {
    //     height: 45,
    //     backgroundColor: "#f8f8f8",
    //     borderRadius: 5,
    //     paddingHorizontal: 20,
    //     borderWidth: 1.5,
    //     borderColor: "#222"
    // },
    input: {
        flex: 1,
        height: 36,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingLeft: 32,
        borderColor: "#222",
        fontFamily: "Pretendard-Regular",
        color: "#000",
    },
    tabWrapper: {
        marginTop: 10
    },
    tabButton: {
        height: 30,
        borderWidth: 1.5,
        borderColor: "#222",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        paddingHorizontal: 10,
        backgroundColor: "#fff"
    },
    inputIcon: {
        position: "absolute",
        top: 10,
        left: 8
    },
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
});