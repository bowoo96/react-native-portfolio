import { Platform, PermissionsAndroid } from "react-native";
import { PERMISSIONS, request, RESULTS } from "react-native-permissions";

export const permissionHandler = (type, setState) => {
    if (type === "android") {
        const requestLocationPermission = async () => {
            try {
                await PermissionsAndroid.request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                    .then((result) => {
                        switch (result) {
                            case PermissionsAndroid.RESULTS.UNAVAILABLE:
                                break;
                            case PermissionsAndroid.RESULTS.DENIED:
                                setState(false);
                                break;
                            case PermissionsAndroid.RESULTS.LIMITED:
                                break;
                            case PermissionsAndroid.RESULTS.GRANTED:
                                setState(true);
                                break;
                            case PermissionsAndroid.RESULTS.BLOCKED:
                                setState(false);
                                break;
                        }
                    })
                    .catch((err) => {
                        console.log("requestLocationPermission/android error1 : ", err);
                    });
            } catch (err) {
                console.log("requestLocationPermission/android error2 : ", err);
            }
        };

        PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            PermissionsAndroid.PERMISSIONS.CAMERA
        ]).then((result) => {
            if (
                result['android.permission.POST_NOTIFICATIONS'] === PermissionsAndroid.RESULTS.GRANTED &&
                result['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED
            ) {
                requestLocationPermission();
            }
        });
    }
    // ポートフォリオ版では該当処理をコメントアウトし、
    // 簡易的な遷移のみを行っています。
    // if (type === "notification") {
    //     if (Platform.OS === "ios") {
    //         const requestUserPermission = async () => {
    //             const authStatus = await messaging().requestPermission();
    //             const enabled =
    //                 authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //                 authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    //             if (enabled) {
    //                 console.log('通知設定の権限 enabled :', authStatus);
    //             }
    //         }
    //         return requestUserPermission();
    //     }
    // }

    if (type === "camera") {
        if (Platform.OS === "ios") {
            const requestCameraPermission = async () => {
                const result = await request(PERMISSIONS.IOS.CAMERA);
                console.log("カメラ権限 :", result);
            }
            return requestCameraPermission();
        }
    }

    if (type === "location") {
        const checkedPermission = async () => {
            if (Platform.OS === "ios") {
                await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
                    .then((result) => {
                        switch (result) {
                            case RESULTS.UNAVAILABLE:
                                break;
                            case RESULTS.DENIED:
                                break;
                            case RESULTS.LIMITED:
                                break;
                            case RESULTS.GRANTED:
                                break;
                            case RESULTS.BLOCKED:
                                setState(false);
                                break;
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                await request(PERMISSIONS.IOS.LOCATION_ALWAYS)
                    .then((result) => {
                        switch (result) {
                            case RESULTS.UNAVAILABLE:
                                break;
                            case RESULTS.DENIED:
                                break;
                            case RESULTS.LIMITED:
                                break;
                            case RESULTS.GRANTED:
                                setState(true);
                                break;
                            case RESULTS.BLOCKED:
                                setState(false);
                                break;
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                await PermissionsAndroid.request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                    .then((result) => {
                        switch (result) {
                            case PermissionsAndroid.RESULTS.UNAVAILABLE:
                                break;
                            case PermissionsAndroid.RESULTS.DENIED:
                                setState(false);
                                break;
                            case PermissionsAndroid.RESULTS.LIMITED:
                                break;
                            case PermissionsAndroid.RESULTS.GRANTED:
                                setState(true);
                                break;
                            case PermissionsAndroid.RESULTS.BLOCKED:
                                setState(false);
                                break;
                        }
                    })
                    .catch((error) => {
                        console.log("error :", error);
                    });
            }
        };
        return checkedPermission();
    }
};