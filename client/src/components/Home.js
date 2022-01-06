import React, {useContext} from "react"
import {ThemeContext} from "../themeContext"

import CryptoCard from "./CryptoCard"

function Home(){
    const {list, query, getData, handleChange} = useContext(ThemeContext)

    const filterQuery = list.filter(coin => 
        coin.name.toLowerCase().includes(query.toLowerCase())
    )

    const renderCryptoList = filterQuery.map(coin => (
        <CryptoCard
            key={coin.id}
            id={coin.id}
            symbol={coin.symbol}
            name={coin.name}
            imgUrl={coin.image}
            currentPrice={coin.current_price}
        />
    )) 

    return(
        <div>
            <button onClick={() => getData()}>Get Data from CoinGecko</button>
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                />
            </form>
            <ul className="coin-container">
                {renderCryptoList}
            </ul>
        </div>
    )
}

export default Home