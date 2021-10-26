import { StyleSheet } from 'react-native'
import { Color } from '../../res/Color'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Color.background
    },
    title: {
        fontSize: 18,
        color: Color.primary,
        textAlign: "center",
        fontWeight:"bold"
    },
    exchangeText: {
        fontSize: 16,
        color: Color.white,
        textAlign: "center",
        fontWeight:"bold"
    },
    Text: {
        fontSize: 13,
        color: Color.dark,
        textAlign: "center",
        fontWeight:"bold"
    },
    calculatorText: {
        fontSize: 13,
        color: Color.dark,
        textAlign: "center",
        fontWeight:"bold"
    }
})


export default Styles