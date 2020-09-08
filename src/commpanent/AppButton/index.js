
import React, { Component } from 'react'
import { Text, ActivityIndicator, View } from 'react-native'
import { ToubchblePlatForm } from './ToubchblePlatForm'
import styles from '../../utils/mainStyle'
class AppButton extends Component {



    // , isloading, wrappedStyle, disable
    render() {
        const { title, mainStyle, textstyle, ...rest } = this.props
        return (
            <ToubchblePlatForm
                {...rest}
            >
                <View
                    style={[mainStyle]}
                >

                    <Text style={textstyle}>{title}</Text>
                </View>
            </ToubchblePlatForm>

        )
    }
}

export default AppButton
