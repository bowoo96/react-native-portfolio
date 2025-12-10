import {
    View,
    FlatList,
    TouchableOpacity,
    Text
} from "react-native";
import { NextIcon } from "../../assets/svgCollection";
import commonStyles from "../../styles/commonStyles";
import DigListBoxStyle2 from "./DigListBoxStyle2";
import portfolioAlertFunction from "../../modules/portfolioAlertFunction";

const DigRoadmapContents = ({ arr, title, detailStackName }) => {

    return (
        <View>
            <TouchableOpacity
                onPress={portfolioAlertFunction}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 16, marginBottom: 16 }}
            >
                <Text style={commonStyles.font_h1_sb} >{title}</Text>
                <NextIcon style={{ marginLeft: 8 }} />
            </TouchableOpacity>
            <FlatList
                data={arr}
                renderItem={({ item, index }) =>
                    <DigListBoxStyle2
                        item={item}
                        index={index}
                        stackName={detailStackName}
                        processivity={5}
                    />}
                keyExtractor={(item, index) => index}
                scrollEnabled={false}
                contentContainerStyle={{ paddingBottom: 30 }}
            />
        </View>
    );
};

export default DigRoadmapContents;