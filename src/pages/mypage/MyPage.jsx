import {
    View,
    FlatList
} from "react-native";
import {
    useState,
    useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MypageProfile from "../../components/mypage/MyPageProfile";
import commonStyles from "../../styles/commonStyles";
import Loading from "../../components/commons/Loading";
import apiGetMyPageFunction from "../../modules/apiGetMyPageFunction";
import { mockDataMyPage } from "../../mock/mockData";

const MyPage = ({ route }) => {
    const [imageModal, setImageModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [myPageData, setMyPageData] = useState(mockDataMyPage);
    const [myId, setMyId] = useState();
    const [pageId, setPageId] = useState();
    const [pageResetFlag, setPageResetFlag] = useState(false);

    const getMyPageData = async () => {
        try {
            const userData = JSON.parse(await AsyncStorage.getItem("userData"));
            const pageMyId = userData.user_id;

            if (!route.params || route.params.id === userData.user_id) {
                const userId = pageMyId;
                setPageId(userId);
                setMyId(userData.user_id);
                apiGetMyPageFunction({
                    pageMyId,
                    setMyPageData,
                    setLoading,
                });
            } else if (route.params.id !== userData.user_id) {
                const userId = pageMyId;
                const pageMyId = route.params.id;
                setPageId(userId);
                setMyId(route.params.id);
                apiGetMyPageFunction({
                    pageMyId,
                    setMyPageData,
                    setLoading,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getMyPageData();
    }, [pageResetFlag]);

    return (
        <>
            {loading
                ? <Loading />
                : <FlatList
                    style={{ backgroundColor: "#fff" }}
                    ListHeaderComponent={(
                        <View style={commonStyles.wrapper}>
                            <MypageProfile
                                setImageModal={setImageModal}
                                setPageResetFlag={setPageResetFlag}
                                myPageData={myPageData}
                                userId={pageId}
                                myId={myId}
                            />
                        </View>
                    )}
                />
            }
        </>
    )
};

export default MyPage;