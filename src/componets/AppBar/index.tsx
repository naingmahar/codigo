import { Text, View } from 'native-base'
import React from 'react'
import { Color } from '../../res/Color'
import Styles from './styles'

import moment from 'moment'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { SafeAreaView } from 'react-native'

export const DATE_FORMAT = "DD-MMM-YYYY HH:mm A"
// export const DATE_FORMAT = "HH:mm A"
export const AppBar = () => {

    const { rates } = useSelector((state: RootState) => state)

    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.titleStyle}>Forex Exchange</Text>
            <View style={Styles.statusContainer}>
                {/* <Text style={Styles.statusText}>Offline</Text> */}
                <Text style={Styles.statusTitle}>Last Updated Time</Text>
                <Text style={Styles.statusText}>{moment(rates.timestamp).format(DATE_FORMAT)}</Text>
            </View>
        </SafeAreaView>
    )
}