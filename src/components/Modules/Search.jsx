import React, { useEffect, useState } from 'react'
import { searchCoin } from '../../services/cryptoApi'
import { RotatingLines } from 'react-loader-spinner'



function Search({ currency, setCurrency }) {
    const [text, setText] = useState("")
    const [coins, setCoins] = useState([])
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
        setCoins([])
        if (!text) {
            setIsLoading(false)
            return;
        }
        const search = async () => {
            try {
                const res = await fetch(searchCoin(text), { signal: controller.signal })
                const json = await res.json()
                console.log(json)
                setIsLoading(false)
                if (json.coins) { setCoins(json.coins) } else { alert(error.message) }
            }
            catch (error) {
                if (error.name !== "AbortError")
                    alert("No coins found!")
            }
        }
        setIsLoading(true)
        search()
        return () => controller.abort()
    }, [text])

    return (
        <div>
            <input type="text" placeholder='Search' value={text} onChange={e => setText(e.target.value)} />
            <select value={currency} onChange={e => setCurrency(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
            <div>
                {setIsLoading && <RotatingLines width='50px' height='50px' strokeWidth='2' strokeColor='#3874ff'/>}
                <ul>
                    {coins.map((coin) => <li key={coin.id}>
                        <img src={coin.thums} alt="" />
                        <p> {coin.name}</p>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Search