
import { StyleSheet } from "react-native";
import { TITLECOLOR, SUBTITLECOLOR, TINTCOLOR, WHITE, REDCOLOR, DECKCOLOR } from './color'
const styles = StyleSheet.create({

    contianer: {
        flex: 1

    },
    maincontianer: {
        margin: 16

    },
    textinput: {
        height: 50,
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 16,
    },
    text_Title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: TITLECOLOR,
        marginHorizontal: 20


    },
    text_SubTitle: {
        fontSize: 18,
        color: SUBTITLECOLOR,
        marginHorizontal: 20


    },

    question: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 35,
        marginTop: 16


    },
    label: {
        fontSize: 16,
        color: TITLECOLOR,
        marginBottom: 4


    },

    btnPrimary: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        marginHorizontal: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: TINTCOLOR
    },
    btnPrimaryText: {
        color: WHITE,
        fontSize: 14,
        textTransform: 'uppercase'
    },

    btnSecondary: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        height: 50,
        borderColor: TINTCOLOR,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 50


    },
    btnSecondaryText: {
        color: TINTCOLOR,
        fontSize: 14,
        textTransform: 'uppercase'
    },
    errorText: {
        color: REDCOLOR,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 16
    },


    btnCorrect: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        height: 50,
        backgroundColor: DECKCOLOR,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 50


    },
    btnInCorrect: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        height: 50,
        backgroundColor: REDCOLOR,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 50


    },
});

export default styles