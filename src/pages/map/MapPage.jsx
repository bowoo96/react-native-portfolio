import {
    View,
    Platform,
    AppState,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import {
    useState,
    useEffect,
} from "react";
import { useIsFocused } from "@react-navigation/native";
import { PERMISSIONS, check } from "react-native-permissions";
import Map from "../../components/map/Map";
import MapSearchBar from "../../components/map/MapSearchBar";
import Loading from "../../components/commons/Loading";
import commonStyles from "../../styles/commonStyles";
import portfolioAlertFunction from "../../modules/portfolioAlertFunction";

const MapPage = () => {
    const [permission, setPermission] = useState(true);
    const [loading, setLoading] = useState(true);

    const isFocused = useIsFocused();

    const permissionScreenHandler = () => {
        if (isFocused === false) return;
        if (Platform.OS === "ios") {
            check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
                if (result === "blocked") {
                    setLoading(false);
                    setPermission(false);
                } else if (permission === true) {
                    setLoading(false);
                    return;
                } else {
                    setLoading(false);
                    setPermission(true);
                };
            });
        } else {
            check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
                if (result === "blocked" || result === "denied") {
                    setLoading(false);
                    setPermission(false);
                } else if (permission === true) {
                    setLoading(false);
                    return;
                } else {
                    setLoading(false);
                    setPermission(true);
                };
            });
        };
    };

    AppState.addEventListener("change", permissionScreenHandler);

    useEffect(() => {
        permissionScreenHandler();
    }, [isFocused]);

    return (
        <View>
            {loading
                ? <Loading />
                : <>
                    <MapSearchBar />
                    <Map />
                    <View style={[styles.shadowWrapper, {
                        width: "100%",
                        position: "absolute",
                        bottom: 100,
                        paddingHorizontal: 16,
                    }]}>
                        <TouchableOpacity
                            onPress={portfolioAlertFunction}
                            style={{
                                width: "100%",
                                height: 56,
                                backgroundColor: "#14ae5c",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 28
                            }}
                        >
                            <Text style={[commonStyles.font_b1_m, { color: "#fff" }]}>場所検索</Text>
                        </TouchableOpacity>
                    </View>
                </>}
        </View>
    )
};

export default MapPage;

const styles = StyleSheet.create({
    shadowWrapper: {
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