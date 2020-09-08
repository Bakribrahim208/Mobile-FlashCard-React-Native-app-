import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import { FontAwesome } from '@expo/vector-icons';

function QuizCard(props) {
    const { current, total, title } = props
    return (

        <View style={styles.Container}>
            <View style={styles.mainContainer}>
                <Text style={styles.deckTitle}>{title}</Text>
                <View style={styles.countContainer}>
                    <Text style={styles.deckTitle}>{current + 1}   /  {total}</Text>

                </View>



            </View>
            <Image source={require('../../images/cards-quiz.png')} />


        </View>


    )
}

export default QuizCard
