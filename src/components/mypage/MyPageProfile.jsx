import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import commonStyles from "../../styles/commonStyles";
import {
    EditGreenIcon,
} from "../../assets/svgCollection";
import numericUnitFunction from "../../modules/numericUnitFunction";
import portfolioAlertFunction from "../../modules/portfolioAlertFunction";

const MyPageProfile = ({ setImageModal, myPageData, userId, myId }) => {
    const navigation = useNavigation();

    return (
        <View>
            <View>
                <View style={{
                    width: "100%",
                    alignItems: "center",
                    marginTop: 44
                }}>
                    {myPageData.profile_image_url === ""
                        ? <TouchableOpacity
                            style={styles.profileImgWrapper}
                            onPress={portfolioAlertFunction}
                        >
                            <View />
                        </TouchableOpacity>
                        :
                        <View>
                            <TouchableOpacity
                                style={styles.profileImgWrapper}
                                onPress={() => {
                                    setImageModal(true);
                                }}
                            >
                                <FastImage
                                    source={{ uri: myPageData.profile_image_url }}
                                    style={{
                                        width: '100%',
                                        aspectRatio: 1,

                                        borderRadius: 66
                                    }}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                            </TouchableOpacity>
                            {myId === userId &&
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("MyPageProfileEditPage", {
                                        id: myPageData.user_id,
                                        name: myPageData.name,
                                        nickname: myPageData.nickname,
                                        description: myPageData.description,
                                        profile: myPageData.profile_image_url
                                    })}
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        bottom: 0
                                    }}>
                                    <EditGreenIcon />
                                </TouchableOpacity>
                            }
                        </View>
                    }
                    <Text style={[commonStyles.font_t1_sb, { marginTop: 10 }]}>{myPageData.nickname}</Text>
                    <Text style={[commonStyles.font_c2_m, { color: "#9e9e9e", marginTop: 3 }]}>{myPageData.name}</Text>
                    <Text style={[commonStyles.font_c2_m, { color: "#9e9e9e", marginTop: 8 }]}>{myPageData.description}</Text>
                    <View style={{ width: "100%", paddingHorizontal: 16, marginTop: 16 }}>
                        <View style={{
                            width: "100%",
                            height: 84,
                            backgroundColor: "#F3F3F3",
                            borderRadius: 10,
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Text style={[commonStyles.font_c2_m, { color: "#666", marginBottom: 8 }]}>COUNT1</Text>
                                <Text style={[commonStyles.font_b1_m, { color: "#14AE5C" }]}>{myPageData.count}</Text>
                            </TouchableOpacity>
                            <View style={{
                                height: 68,
                                width: 0.5,
                                backgroundColor: "#aaa"
                            }} />
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <Text style={[commonStyles.font_c2_m, { color: "#666", marginBottom: 8 }]}>COUNT2</Text>
                                <Text style={[commonStyles.font_b1_m, { color: "#14AE5C" }]}>{numericUnitFunction(myPageData.count)}</Text>
                            </TouchableOpacity>
                            <View style={{
                                height: 68,
                                width: 0.5,
                                backgroundColor: "#aaa"
                            }} />
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <Text style={[commonStyles.font_c2_m, { color: "#666", marginBottom: 8 }]}>COUNT3</Text>
                                <Text style={[commonStyles.font_b1_m, { color: "#14AE5C" }]}>3</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
            <Image
                style={{ marginHorizontal: 20, width: Dimensions.get("window").width - 40, borderRadius: 10, marginTop: 20 }}
                source={require("../../assets/image/mypage_map.png")} />
        </View>
    );
};

export default MyPageProfile;

const styles = StyleSheet.create({
    profileImgWrapper: {
        width: 112,
        height: 112,
        borderRadius: 66,
        backgroundColor: "#F3F3F3"
    },
});