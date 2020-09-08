import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from '../../utils/mainStyle'
import QuizCard from '../../commpanent/quizecard/index'
import { useSelector } from 'react-redux'

import DeckItem from '../../commpanent/DeckItem'

export default function DeckList(props) {

    const decks = useSelector(state => state.decks)
    const { navigate } = props.navigation
    var res = Object.keys(decks).map(function (name) {
        var obj = {};
        obj[name] = decks[name];
        return obj;
    });






    return (
        <View>
            {/* <QuizCard /> */}
            <Text style={styles.text_Title} >{res.length} Decks</Text>
            <FlatList
                data={Object.values(decks)}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        key={item.title}
                        onPress={() => navigate('Deck', { deck: item.title })}
                    >
                        <DeckItem item={item} />
                    </TouchableOpacity>
                }
                keyExtractor={(item) => item.title}
            />

        </View>
    )
}
