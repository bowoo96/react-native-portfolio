import {
    View,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import {
    useState,
    useCallback,
    useEffect
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import commonStyles from "../../styles/commonStyles";
import Loading from "../../components/commons/Loading";
import DigHeader from "../../components/dig/DigHeader";
import portfolioAlertFunction from "../../modules/portfolioAlertFunction";
import { mockDataLogPage } from "../../mock/mockData";

const LogPage = () => {
    const [loading, setLoading] = useState(false);

    const getLogData = async () => {
        try {
            const userData = JSON.parse(await AsyncStorage.getItem("userData"));

            // ポートフォリオ版では API 非接続のため、該当処理をコメントアウトし、
            // 簡易的な遷移のみを行っています。
            // axios.post(`${constant.API_SERVER}/portfolio`,
            //     {
            //         userId: userData.id
            //     }).then((response) => {
            //         setLogList(response.data.logList);
            //     }).catch((err) => {
            //         console.log("로그 페이지 에러", err);
            //     });
        } catch (err) {
            console.log(err);
        }
    };

    const detailDate = (a) => {
        const milliSeconds = new Date() - new Date(a);
        const seconds = milliSeconds / 1000;
        if (seconds < 60) return `今さっき`;
        const minutes = seconds / 60;
        if (minutes < 60) return `${Math.floor(minutes)}分前`;
        const hours = minutes / 60;
        if (hours < 24) return `${Math.floor(hours)}時間前`;
        const days = hours / 24;
        if (days < 7) return `${Math.floor(days)}日前`;
        const weeks = days / 7;
        if (weeks < 5) return `${Math.floor(weeks)}週間前`;
        const months = days / 30;
        if (months < 12) return `${Math.floor(months)}か月前`;
        const years = days / 365;
        return `${Math.floor(years)}年前`;
    };

    const renderImage = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={portfolioAlertFunction}
                style={{
                    width: 120,
                    height: 160,
                    backgroundColor: "#aaa",
                    marginRight: 10,
                    marginTop: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginLeft: index === 0 && 66
                }}
                key={index}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        );
    });

    const renderItem = useCallback(({ item, index }) => {
        return (
            <View style={{ marginVertical: 28 }}>
                <TouchableOpacity
                    style={{ marginHorizontal: 16 }}
                    key={index}
                    onPress={portfolioAlertFunction}
                >
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#ddd", borderRadius: 20 }} />
                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={[commonStyles.font_b1_m, { marginLeft: 10 }]}>{item.username}</Text>
                                <Text style={[commonStyles.font_c2_m, { color: "#9e9e9e" }]}>{" ・ " + detailDate(item.create_dt)}</Text>
                            </View>
                            <Text style={[commonStyles.font_c2_m, { color: "#9e9e9e", marginLeft: 10, marginRight: 30, marginTop: 3 }]}>sdjhfgbs님이평양냉면 마스터하기를 달성했습니다! 평양냉면 마스터하기를 달성했습니다!</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                {item.contents.length !== 0 &&
                    <FlatList
                        data={item.contents}
                        renderItem={renderImage}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />}
            </View>
        );
    });

    useEffect(() => {
        getLogData();
    }, []);

    return (
        <>
            {loading
                ? <Loading />
                :
                <View style={commonStyles.wrapper}>
                    <FlatList
                        data={mockDataLogPage}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<DigHeader />}
                    />
                    <View style={{ marginBottom: 80 }} />
                </View>
            }
        </>
    )
};

export default LogPage;

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        height: 40,
        flexDirection: "row",
    },
    headerTitle: {
        flex: 1,
        alignItems: "center",
        marginRight: 20
    },
    itemheader: {

    },
});