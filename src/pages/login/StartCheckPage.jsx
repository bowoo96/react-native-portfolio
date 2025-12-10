import { View } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "react-native-splash-screen";

const StartCheckPage = ({ navigation }) => {

    const getUserDataHandler = async () => {
        const userData = JSON.parse(await AsyncStorage.getItem("userData"));

        // ポートフォリオ版では API 非接続のため、該当処理をコメントアウトし、
        // 簡易的な遷移のみを行っています。
        navigation.reset({ index: 0, routes: [{ name: "LoginNavigator" }] });
        // if (userData === null) {
        //     navigation.reset({ index: 0, routes: [{ name: "LoginNavigator" }] });
        // } else if (userData.id !== "") {
        //     await axios.post(`${constant.API_SERVER}/portfolio`, {
        //         phone_number: userData.phone_number,
        //     }).then(async (response) => {
        //         if (response.data.status === 0) {
        //             const setUserData = JSON.stringify(response.data.data);
        //             await AsyncStorage.setItem("userData", setUserData);

        //             navigation.reset({ index: 0, routes: [{ name: "TabBar" }] });
        //         }
        //     }).catch((err) => {
        //         navigation.reset({ index: 0, routes: [{ name: "LoginNavigator" }] });
        //         console.log("StartCheckPage/getUserDataHandler error : ", err);
        //     });
        // }
    };

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);

        getUserDataHandler();
    }, []);

    return (<View style={{ flex: 1 }} />);
};

export default StartCheckPage;