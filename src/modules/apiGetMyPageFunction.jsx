import axios from "axios";
import * as constant from "../Constants";

export default apiGetMyPageFunction = (
    {
        pageMyId,
        setMyPageData,
        setLoading,
    }) => {
    axios.get(`${constant.API_SERVER}/myPage/getMyPage`,
        {
            params: {
                user_id: pageMyId,
            }
        }).then((response) => {
            setMyPageData(response.data.data);
            setLoading(false);
        }).catch((err) => {
            console.log("MyPage/apiGetMyPageFunction error : ", err);
        });
};