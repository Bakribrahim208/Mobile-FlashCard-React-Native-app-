

import React, { Component } from 'react'
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

export class ToubchblePlatForm extends Component {


    render() {

        const Touchable = Platform.select({
            android: TouchableNativeFeedback,
            ios: TouchableOpacity,
        })


        return (
            <Touchable    {...this.props} />

        )
    }
}

export default ToubchblePlatForm
