

import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../utils/mainStyle'
import DeckItem from '../../commpanent/DeckItem'
import AppButton from '../../commpanent/AppButton'
import { useSelector, useDispatch } from 'react-redux'

export default function DeckScreen(props) {
    const deckName = props.route.params.deck;
    const { navigate } = props.navigation
    const deck = useSelector(state => state.decks[deckName])

    const addCardAction = () => {
        navigate('Add Card', { deck: deckName })
    }
    const startQuizeAction = () => {
        if (deck.questions.length === 0) {

        }
        else {

            navigate('Quiz', { deck: deckName })

        }
    }

    return (
        <View style={styles.contianer}>
            <DeckItem item={deck} ></DeckItem>
            <Text style={styles.text_Title}>Deck</Text>
            <AppButton onPress={addCardAction} title="Add Card" textstyle={styles.btnSecondaryText} mainStyle={styles.btnSecondary} ></AppButton>
            <AppButton onPress={startQuizeAction} title="Start Quiz" textstyle={styles.btnPrimaryText} mainStyle={styles.btnPrimary} ></AppButton>
            {(deck.questions.length === 0) && <Text style={styles.errorText}>Add One Or More Card Before Taking The Quiz</Text>}

        </View>
    )
}
