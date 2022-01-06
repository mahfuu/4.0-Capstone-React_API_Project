import React, {useContext} from "react"
import { ThemeContext } from "../themeContext"

function Profile(){
    const {favorites, removeFavorite} = useContext(ThemeContext)

    const renderFavorites = favorites.map(coin => (
        <li key={coin.id} className="coin-row">
            <div className="coin">
                <img
                    className="coin-image"
                    src={`${coin.image.thumb}`}
                    alt={coin.id}
                />
                <h3 className="coin--name">{coin.name}</h3>
                <p className="coin--symbol">{coin.symbol}</p>
                <p className="coin--price">$ {coin.market_data.current_price.usd.toLocaleString()}</p>
            </div>
            <button className="coin--button" onClick={e => removeFavorite(e, coin.id)}>-</button>
        </li>
    ))

    return(
        <div>
            <ul>
                {renderFavorites}
            </ul>
        </div>
    )
}

export default Profile