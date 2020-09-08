import React from 'react'
import { View, Text, Image } from 'react-native'
import AppButton from '../../commpanent/AppButton'

import QuizCard from '../../commpanent/quizecard'
import styles from '../../utils/mainStyle'
import { useSelector } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers';

export default function QuizeScreen(props) {
    const [showAnswer, setShowAnswer] = React.useState(false)
    const [cureentQuestion, setCurrentQusiton] = React.useState(0)
    const [correct, setCorrect] = React.useState(0)
    const [Percetage, setPercetage] = React.useState(0)
    const [wrong, setWrong] = React.useState(0)
    const [isFinish, setFinish] = React.useState(false)
    const deckName = props.route.params.deck;
    const deck = useSelector(state => state.decks[deckName])
    const { title, questions } = deck
    const totalQuestions = questions.length;
    const { navigation } = props;


    const handleAnswer = (answer) => {
        answer ? setCorrect(correct + 1) : setWrong(wrong + 1)
        console.log(correct)
        console.log(wrong)

        if (cureentQuestion + 1 === totalQuestions) {

            setFinish(true)

            clearLocalNotification()
            setLocalNotification()

        }
        else {
            setCurrentQusiton(cureentQuestion + 1)

        }
    }
    const reStartQuize = () => {

        setCurrentQusiton(0)
        setCorrect(0)
        setWrong(0)
        setFinish(false)
        setShowAnswer(false)
        setPercetage(0)


    }

    const AnswerView = <View>
        <Text style={styles.text_Title}>Answer</Text>
        <Text style={styles.question}>{questions[cureentQuestion].answer}</Text>
        <AppButton onPress={() => handleAnswer(true)} title="Correct Answer" textstyle={styles.btnPrimaryText} mainStyle={styles.btnCorrect} ></AppButton>
        <AppButton onPress={() => handleAnswer(false)} title="InCorrect Answer" textstyle={styles.btnPrimaryText} mainStyle={styles.btnInCorrect} ></AppButton>
    </View>

    const QuizeResult = <View>
        <Text style={styles.text_Title}>Quize Completed</Text>
        <Text style={styles.question}>you got {correct} of {totalQuestions} correct ({Math.round((correct / totalQuestions) * 100)}%)</Text>

        <AppButton onPress={reStartQuize} title="Start Quize Again" textstyle={styles.btnSecondaryText} mainStyle={styles.btnSecondary} ></AppButton>
        <AppButton onPress={() => navigation.goBack()} title="Return To Deck" textstyle={styles.btnPrimaryText} mainStyle={styles.btnPrimary} ></AppButton>

    </View>
    return (
        <View>
            <QuizCard current={cureentQuestion} total={totalQuestions} title={title}></QuizCard>
            {
                isFinish ? QuizeResult : <View>
                    <Text style={styles.text_Title}>Question</Text>
                    <Text style={styles.question}>{questions[cureentQuestion].question}</Text>

                    <View style={{ marginTop: 16 }}></View>

                    {showAnswer ? AnswerView : <AppButton onPress={() => setShowAnswer(true)} title="Show Answer" textstyle={styles.btnSecondaryText} mainStyle={styles.btnSecondary} ></AppButton>
                    }


                </View>
            }
        </View>

    )
}
