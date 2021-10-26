import { Card } from "native-base";
import React, { useEffect, useState } from "react";
import { View,Text,TextInput, Dimensions, Alert} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { RootState,addRates } from "../../redux";
import { Color } from "../../res/Color";
import Styles from "./styles";
import getSymbolFromCurrency from 'currency-symbol-map'
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonModule from "../../lib/Native/ButtonModule";

enum ETYPE  {
    mmk = "mmk",
    other = "other"
}

const CalculatorScreen = () => {
    
    const dispatch = useDispatch();
    const { rates, categories } = useSelector((state: RootState) => state)
    const [amount, setAmount] = useState("0")
    const [mmkAmount,setMMKAmount] = useState("0")
    const [count, setCount] = useState("0")
    
    useEffect(() => {
        dispatch(addRates())
    }, [])

    const calculate = () => {
        let raw = rates.rates[categories.choose]
        if (!amount || !raw ) {
            return 0
        }

        let money = parseInt(amount)
        
        let rate = Number(raw.replace(/[^0-9.-]+/g, ""))

        return (money * rate).toFixed(2)
    }

    const mmkCalculate = () => {
        let raw = rates.rates[categories.choose]
        if (!mmkAmount || !raw) {
            return 0
        }
        let mmmkMoney = parseInt(mmkAmount)
        
        
        let rate = Number(raw.replace(/[^0-9.-]+/g, ""))

        return (mmmkMoney / rate).toFixed(2)
    }
    
    return(
        <View style={Styles.container}>
            <View style={{ margin: 10 }}>
                <Card style={{backgroundColor:Color.success}}>
                    <View style={{
                        margin: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <Text style={Styles.exchangeText}>Rate</Text>
                        <Text style={Styles.exchangeText}>
                            {`1${categories.choose}(${getSymbolFromCurrency(categories.choose)}) = ${rates.rates[categories.choose]}`}
                        </Text>
                    </View>
                </Card>
            </View>

            <View style={{ margin: 20 }}>
                <Text style={Styles.title}>Exchange Calculator</Text>
                <Card style={{ marginTop: 20, borderRadius: 10,padding:20 }}>
                    <Text style={Styles.calculatorText}>{categories.choose} to MMK</Text>
                    <TextInput
                        keyboardType={"number-pad"}
                        onChangeText={(text)=>setAmount(text)}
                        placeholder={`${categories.choose}`}
                        style={{ paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: Color.primary }} />
                    
                    <View>
                        <Text style={Styles.calculatorText}>
                            {`${amount} ${categories.choose} = ${calculate()} MMK`}
                        </Text>
                    </View>
                </Card>


                <Card style={{ marginTop: 20, borderRadius: 10,padding:20 }}>
                    <Text style={Styles.calculatorText}>MMK to {categories.choose}</Text>
                    <TextInput
                        keyboardType={"number-pad"}
                        onChangeText={(text)=>setMMKAmount(text)}
                        placeholder={`MMK`}
                        style={{ paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: Color.primary }} />
                    
                    <View>
                        <Text style={Styles.calculatorText}>
                            {`${mmkAmount} MMK = ${mmkCalculate()} ${categories.choose}`}
                        </Text>
                    </View>

                </Card>


                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop:20
                }}>
                    <Card style={{padding: 20,borderRadius:10}}>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => ButtonModule.addCount(count, (resCount: number) => {
                            setCount(resCount+"")
                        })}
                    >
                        
                            <Text>Click count {count}</Text>
                        
                    </TouchableOpacity>
                    </Card>
                </View>

            </View>


        </View>
    )
}


export default CalculatorScreen