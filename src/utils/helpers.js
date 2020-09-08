import AsyncStorage from "@react-native-community/async-storage";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export const DECKS_STORAGE_KEY = "Flashcards:decks";
export const NOTIFICATION_KEY = "Flashcards:notifications";

// Deck formatter - parse a JSON object from the AsyncObject response
export const formatDecks = (decks) => {
    return decks === null ? {} : JSON.parse(decks);
};
// Deck creator - object for an empty deck using given title
export const makeNewDeck = (title) => ({
    title,
    questions: []
});

// Debugging function to show what is in Async Storage
export const showAsyncStorage = () => {
    AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, item) => {
        console.log({ decks: JSON.parse(item) });
    });
};

// Create an updated deck object with the new question
export const getUpdate = (deck, card) => {
    const update = Object.assign({}, deck, {
        questions: deck.questions.concat([card])
    });
    return update;
};

// Clear the local notification
export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync
    );
}

// Create a notification
function createNotification() {
    return {
        title: "Time to Study!",
        body: "👋 don't forget to practice your flashcards!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: "high",
            sticky: false,
            vibrate: true
        }
    };
}

// Set the local notification
export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            // If notifications are already set, move on
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                    if (status === "granted") {
                        Notifications.cancelAllScheduledNotificationsAsync(); // Remove old notifications

                        let tomorrow = new Date();
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        tomorrow.setHours(17);
                        tomorrow.setMinutes(0);

                        // Add the new notification
                        Notifications.scheduleLocalNotificationAsync(createNotification(), {
                            time: tomorrow,
                            repeat: "day"
                        });

                        // Add the notification to Async storage
                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                    }
                });
            }
        });
}