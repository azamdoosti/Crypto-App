import React, { useEffect, useState } from 'react'
import TableCoin from '../Modules/TableCoin'
import { getCoinList } from '../../services/cryptoApi'
import Pagination from '../Modules/Pagination'
import Search from '../Modules/Search'
import Chart from '../Modules/Chart'

const HomePage = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [currency , setCurrency] = useState("usd")
    const [chart , setChart] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
           try{
            const res = await fetch(getCoinList(page , currency))
            const json = await res.json()
            // console.log("Api REsponse :", json)
            setCoins(json)
            setIsLoading(false)
            // console.log("Type of coins:", typeof coins);
            // console.log("Is Array?", Array.isArray(coins));
           } catch(error){
            console.log(error)
           }
        }
        getData();
    }, [page , currency])

    // console.log("Coins state before return:", coins);

    return (
        <div>
            <Search currency={currency} setCurrency={setCurrency} />
            <TableCoin coins={coins} isLoading={isLoading} setChart={setChart}/>
            <Pagination page={page} setPage={setPage} />
            {!!chart &&   <Chart chart={chart}  setChart={setChart}/>}
        </div>
    )
}

export default HomePage