import React, { useEffect, useState } from 'react'
import TableCoin from '../Modules/TableCoin'
import { getCoinList } from '../../services/cryptoApi'

const HomePage = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] =useState(true)
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(getCoinList())
            const json = await res.json()
            console.log("Api REsponse :", json)
            setCoins(json)
            setIsLoading(false)
            console.log("Type of coins:", typeof coins);
            console.log("Is Array?", Array.isArray(coins));
        }
        getData();
    }, [])

    console.log("Coins state before return:", coins);
 
    return (
        <div>
            <TableCoin coins={coins} isLoading={isLoading}/>
        </div>
    )
}

export default HomePage