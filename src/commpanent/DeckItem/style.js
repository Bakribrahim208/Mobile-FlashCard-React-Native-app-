
import { StyleSheet } from "react-native";
import { DECKCOLOR, WHITE, LIGHTGRAY } from '../../utils/color'
const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,

    },
    Container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 8,
        marginBottom: 8,
        marginHorizontal: 20,
        padding: 12,
        borderRadius: 10,
        backgroundColor: DECKCOLOR,
        minHeight: 80

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