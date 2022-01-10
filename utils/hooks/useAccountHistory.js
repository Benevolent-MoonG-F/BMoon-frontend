import { useMemo,useState } from "react";
import dailyrocketabi from '../abis/dailyrocket.json'
import bmsabi from '../abis/bms.json'
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";

import { DAILYROCKETADDRESS,BMSADDRESS } from "../constants";

const abiDecoder = require('abi-decoder');
export function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
}



export const useAccountHistoryForDaily = () => {
    const {walletAddress} = useMoralisDapp()
    const [loading,setLoading] = useState(false)
    const [dailydata,setdailydata] = useState([])

    abiDecoder.addABI(dailyrocketabi)
    function decodeInput(input){
        return abiDecoder.decodeMethod(input)
    }
    
    

    useMemo(async() => {
        if(walletAddress){
            setLoading(true)
            try{
                const uri = `https://api-kovan.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=latest&sort=desc&apikey=1R83N7NU9TED47UB8HXSW696FGMFM6FQKJ`
                const data = await fetch(uri)
                const jsondata = await data.json()
                const dailyrockettx = jsondata.result.filter((item) => item.to == DAILYROCKETADDRESS);     

   

                const dataFiltered = dailyrockettx
                .filter((items) => decodeInput(items.input) !== undefined && items.isError !== "1")
                .map((items) => ({
                    value: items.value,
                    transactionObj: decodeInput(items.input).params,
                    timestamp: items.timeStamp,
                    transactionFee: items.gasPrice * items.gasUsed,
                    hash: items.hash
                }));

                


                const userData = dataFiltered.map((data) => ({
                    asset: data.transactionObj[0].value,
                    prediction: data.transactionObj[1].value,
                    payment: data.transactionObj[2].value === "0xff795577d9ac8bd7d90ee22b6c1703490b6512fd" ? "DAI" : null,
                    time: timeConverter(data.timestamp),
                    hash: data.hash
                    

                }))


                setdailydata(userData)
                setLoading(false)

            }catch(err){
                setLoading(false)
                console.log(err)
            }
        }else{
            console.log('Connect wallet')
        }
    },[walletAddress])

    return {loading,dailydata}

}

export const useAccountHistoryForBMS = () => {
    const {walletAddress} = useMoralisDapp()
    const [loading,setLoading] = useState(false)
    const [bmsdata,setbmsdata] = useState([])

    abiDecoder.addABI(bmsabi)
    function decodeInput(input){
        return abiDecoder.decodeMethod(input)
    }
    
    

    useMemo(async() => {
        if(walletAddress){
            setLoading(true)
            try{
                const uri = `https://api-kovan.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=latest&sort=desc&apikey=1R83N7NU9TED47UB8HXSW696FGMFM6FQKJ`
                const data = await fetch(uri)
                const jsondata = await data.json()
                const bmstx = jsondata.result.filter((item) => item.to == BMSADDRESS);     

   

                
                const dataFiltered = bmstx
                .filter((items) => decodeInput(items.input) !== undefined && items.isError !== "1")
                .map((items) => ({
                    value: items.value,
                    transactionObj: decodeInput(items.input).params,
                    timestamp: items.timeStamp,
                    transactionFee: items.gasPrice * items.gasUsed,
                    hash: items.hash
                }));

                console.log(dataFiltered)


                const userData = dataFiltered.map((data) => ({
                    starttime: timeConverter(data.transactionObj[0].value),
                    payment: data.transactionObj[1].value === "0xff795577d9ac8bd7d90ee22b6c1703490b6512fd" ? "DAI" : null,
                    market: data.transactionObj[2].value,
                    time: timeConverter(data.timestamp),
                    hash: data.hash
                }))

            
                setbmsdata(userData)
                setLoading(false)

            }catch(err){
                console.log(err)
                setLoading(false)
            }
        }else{
            console.log('Connect wallet')
        }
    },[walletAddress])

    return {loading,bmsdata}

}


