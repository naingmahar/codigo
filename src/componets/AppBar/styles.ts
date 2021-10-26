import { StyleSheet } from 'react-native'
import { Color } from '../../res/Color'

const Styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        backgroundColor: Color.primary,
        flexDirection:"row",
        justifyContent: 'space-between',
        paddingHorizontal:20,
        alignItems:"center"
    },
    titleStyle: { marginLeft:20,color: "white", fontSize: 20 },
    statusContainer:{
        backgroundColor: Color.transprantBackground,
        padding: 5,
        borderRadius:5
    },
    statusText: { color: Color.white, fontSize: 12,fontWeight:'bold',textAlign:"center" },
    statusTitle: {color:Color.white,fontSize:11,textAlign:"center"}
})
export default Styles