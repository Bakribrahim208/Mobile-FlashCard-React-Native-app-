import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

function DeckItem(props) {
    const { item } = props
    const { title, questions } = item;
    const totalQuestions = questions.length;

    return (
        <View style={styles.Container}>
            <View style={styles.mainContainer}>
                <Text style={styles.deckTitle}>{title}</Text>
                <Text style={styles.decksubtitle}>{totalQuestions}  Cards</Text>

            </View>


        </View>


    )
}

export default DeckItem
