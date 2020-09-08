

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import DeckList from '../screen/deckList/index';
import { AddDeck } from '../screen/addDeck';
import { TINTCOLOR } from '../utils/color'

const Tab = createBottomTabNavigator();


export function HomeTab() {


    return (

        <Tab.Navigator initialRouteName="deck_screen"
            tabBarOptions={{
                activeTintColor: TINTCOLOR,
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: '#FFFFFF',
                },
                labelStyle: {
                    textAlign: 'center',
                },
                indicatorStyle: {
                    borderBottomColor: '#87B56A',
                    borderBottomWidth: 2,
                },
            }}
        >

            <Tab.Screen name="deck_screen" component={DeckList}
                options={{
                    tabBarLabel: 'Decks',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />

                    ),
                }}

            />
            <Tab.Screen name="add_deck" component={AddDeck}
                options={{
                    tabBarLabel: 'Add Deck',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="plus" size={size} color={color} />

                    ),
                }} />


        </Tab.Navigator>
    )
}
