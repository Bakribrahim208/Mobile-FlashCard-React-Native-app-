
import React, { Component, useState } from "react";
import {
    Text,
    View,
    TextInput,
    Alert

} from "react-native";
import styles from '../../utils/mainStyle'
import AppButton from "../../commpanent/AppButton/index";
import { useDispatch, useSelector } from 'react-redux'
import { postDeck, fetchDecks } from '../../utils/api';
import { saveDeckTitle } from "../../redux/action/actions";

export function AddDeck() {

    const [title, setTitle] = useState('')
    const dispatch = useDispatch()


    const onChangeText = (value) => {
        setTitle(value);
    };

    const onSubmit = async () => {

        if (title.length > 0) {
            const deck = {
                [title]: {
                    title: title,
                    questions: [],
                },
            };
            dispatch(saveDeckTitle(deck));
            postDeck(title);
            fetchDecks()
                .then((decks) => {
                    Alert.alert(decks.length);

                });

        }
        else {
            Alert.alert('Deck title missing', 'Please enter a correct name for your deck');

        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.maincontianer}>
                <Text style={styles.text_Title} >Add Deck</Text>
                <Text style={styles.text_SubTitle} >Create a new deck of flashcards </Text>

                <View style={{ marginTop: 50 }}>
                    <Text style={styles.label}>Title</Text>

                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => onChangeText(text)}
                        value={title}
                    />


                    <AppButton mainStyle={styles.btnPrimary} textstyle={styles.btnPrimaryText} title="ADD DECK" onPress={onSubmit} />
                </View>

            </View>

        </View>
    );

}

