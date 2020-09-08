
import React, { Component, useState } from "react";
import {
    Text,
    View,
    TextInput,

} from "react-native";
import styles from '../../utils/mainStyle'
import AppButton from "../../commpanent/AppButton/index";
import { postCard } from '../../utils/api'
import { addCardToDeck } from '../../redux/action/actions'
import { useDispatch } from 'react-redux'

export function NewQuestion(props) {
    const deckName = props.route.params.deck;
    const { navigation } = props
    const dispatch = useDispatch()

    const [question, setQustion] = useState('')

    const [answer, setAnswer] = useState('')

    const onChangeQuestion = (value) => {

        setQustion(value)
    };

    const onChangeAnswer = (value) => {

        setAnswer(value)
    };
    const onSubmit = () => {

        if (question && question !== '' && answer && answer !== '') {
            const card = {
                question,
                answer,
            };

            dispatch(addCardToDeck(deckName, card));
            postCard(deckName, card).then(() => {
                navigation.goBack();

            });
        }



    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.maincontianer}>
                <Text style={styles.text_Title} >Add Card</Text>
                <Text style={styles.text_SubTitle} >Add a new card to the deck of flashcards </Text>
                <View style={{ marginTop: 50 }}>
                    <Text style={styles.label}>Your Question</Text>

                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => onChangeQuestion(text)}
                        value={question}
                    />

                    <View style={{ marginTop: 50 }} />

                    <Text style={styles.label}>The Answer</Text>

                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => onChangeAnswer(text)}
                        value={answer}
                    />

                    <AppButton textstyle={styles.btnPrimaryText} mainStyle={styles.btnPrimary} title="ADD Card" onPress={onSubmit} />

                </View>


            </View>

        </View>
    );

}

