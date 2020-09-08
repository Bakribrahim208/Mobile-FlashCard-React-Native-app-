
import { StyleSheet } from "react-native";
import { DECKCOLOR, WHITE, LIGHTGRAY, TINTCOLOR } from '../../utils/color'
const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,

    },
    Container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 8,
        marginBottom: 8,
        marginHorizontal: 20,
        padding: 12,
        borderRadius: 10,
        backgroundColor: TINTCOLOR,
        minHeight: 130

    },
    deckTitle: {
        color: WHITE,
        fontSize: 30,

    },
    decksubtitle: {
        color: LIGHTGRAY,
        fontSize: 16,
        alignSelf: 'center'

    },
    countContainer: {
        flexDirection: 'row',

    }

});

export default styles