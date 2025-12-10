import {
    useState,
} from "react";
import {
    TouchableWithoutFeedback,
    Keyboard,
    Image
} from "react-native";
import Loading from "../commons/Loading.jsx";

const Map = (() => {
    const [loading, setLoading] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {loading
                ? <Loading />
                :
                <Image
                    style={{ height: "100%" }}
                    source={require("../../assets/image/mappage_map.png")} />
            }
        </TouchableWithoutFeedback>
    );
});

export default Map;
