import * as ActionType from '../ActionType'




export function getDecks(decks) {
    return {
        type: ActionType.GET_DECKS,
        decks,
    };
}

export function saveDeckTitle(deck) {
    return {
        type: ActionType.SAVE_DECK_TITLE,
        deck,
    };
}

export function addCardToDeck(deck, card) {
    return {
        type: ActionType.ADD_CARD_TO_DECK,
        deck,
        card,
    };
}