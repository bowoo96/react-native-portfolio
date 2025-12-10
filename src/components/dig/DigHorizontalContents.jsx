import {
    View,
    FlatList,
    TouchableOpacity,
    Text
} from "react-native";
import { NextIcon } from "../../assets/svgCollection";
import commonStyles from "../../styles/commonStyles";
import portfolioAlertFunction from "../../modules/portfolioAlertFunction";
import DigListBoxStyle1 from "./DigListBoxStyle1";

const DigHorizontalContents = ({ arr, title, marginTop, detailStackName }) => {

    return (
        <View style={{ marginTop }}>
            <TouchableOpacity
                onPress={portfolioAlertFunction}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 16, marginBottom: 16 }}
            >
                <Text style={commonStyles.font_h1_sb} >{title}</Text>
                <NextIcon style={{ marginLeft: 8 }} />
            </TouchableOpacity>
            <FlatList
                style={{ paddingLeft: 16 }}
                data={arr}
                renderItem={({ item, index }) =>
                    <DigListBoxStyle1
                        item={item}
                        index={index}
                        stackName={detailStackName}
                    />}
                keyExtractor={(_, index) => index}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 32 }}
            />
        </View>
    );
};

export default DigHorizontalContents;