import React, { useEffect, useState } from 'react'
import TableCoin from '../Modules/TableCoin'
import { getCoinList } from '../../services/cryptoApi'

const HomePage = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(getCoinList())
            const json = await res.json()
            console.log("Api REsponse :", json)
            setCoins(json)
            console.log("Type of coins:", typeof coins);
            console.log("Is Array?", Array.isArray(coins));
        }
        getData();
    }, [])

    console.log("Coins state before return:", coins);
 
    return (
        <div>
            <TableCoin coins={coins} />
        </div>
    )
}

export default HomePage