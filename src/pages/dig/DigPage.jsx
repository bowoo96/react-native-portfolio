import {
    View,
    ScrollView,
    RefreshControl
} from "react-native";
import {
    useEffect,
    useState
} from "react";
import { useIsFocused } from "@react-navigation/native";
import commonStyles from "../../styles/commonStyles";
import DigHeader from "../../components/dig/DigHeader";
import DigHorizontalContents from "../../components/dig/DigHorizontalContents";
import Loading from "../../components/commons/Loading";
import DigRoadmapContents from "../../components/dig/DigRoadmapContents";
import { mockDataMainPage } from "../../mock/mockData";

const DigPage = () => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [locationName, setLocationName] = useState("");
    const [page, setPage] = useState(1);
    const [feedLength, setFeedLength] = useState(null);

    const pageUpHandler = () => {
        if (feedLength < 12) {
            return;
        } else {
            setPage(prev => prev + 1);
        }
    };

    const getMainData = async () => {
        try {
            if (locationName === "") {
                return
            } else {
                // ポートフォリオ版では API 非接続のため、該当処理をコメントアウトし、
                // 簡易的な遷移のみを行っています。
                // const locationNumber = await locationNumberCodeFunction(locationNumberList, locationName);
                // await axios.get(`${constant.API_SERVER}/portfolio`, {
                //     region_cd: locationNumber,
                //     popular_page: page
                // }).then((response) => {
                //     AsyncStorage.setItem("categories", JSON.stringify(response.data.data.categories));
                //     if (page === 1) {
                //         setFeedArray(response.data.data.popular_places.results);
                //         setDigPageArr(response.data.data);
                //     } else {
                //         setFeedArray(prev => [...prev, ...response.data.data.popular_places.results]);
                //     }
                //     setFeedLength(response.data.data.popular_places.results);
                //     setLoading(false);
                //     setRefreshing(false);
                // }).catch((err) => {
                //     console.log("DigPage/getMainData error1 : ", err);
                // });
            }
        } catch (err) {
            console.log("DigPage/getMainData error2 : ", err);
        }
    };

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const isBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 400;

        if (isBottom && !loading) {
            pageUpHandler();
        }
    };

    useEffect(() => {
        getMainData();
    }, [refreshing, locationName, page]);

    return (
        <>
            {loading
                ? <Loading />
                : <ScrollView
                    style={commonStyles.wrapper}
                    onScrollEndDrag={handleScroll}
                    scrollEventThrottle={500}
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={false} onRefresh={() => setRefreshing(true)} />}
                >
                    <>
                        <DigHeader />
                        <DigHorizontalContents
                            arr={mockDataMainPage}
                            title={"コンテンツ1"}
                            marginTop={24}
                            listStackName="DigContentsListPage"
                            detailStackName="DigUnkwonPlaceDetailPage"
                        />
                        <DigRoadmapContents
                            arr={mockDataMainPage}
                            title={"コンテンツ2"}
                            listStackName="DigRoadmapListPage"
                            detailStackName="DigRoadmapDetailPage"
                        />
                        <View style={{ marginBottom: 160 }} />
                    </>
                </ScrollView>
            }
        </>
    )
};

export default DigPage;
