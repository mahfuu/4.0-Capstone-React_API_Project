import React, {useContext} from "react"
import { useNavigate } from "react-router-dom"
import {ThemeContext} from "../themeContext"

function CryptoCard(props){
    const {handleFavorite, handleDetails} = useContext(ThemeContext)

    const navigate = useNavigate()

    const {imgUrl, id, name, symbol, currentPrice} = props

    return(
        <li className="coin-row">
            <div
                className="coin"
                onClick={e => handleDetails(e, id)}
            >
                <img
                    className="coin--image"
                    src={`${imgUrl}`}
                    alt={id}
                />
                <h3 className="coin--name">{name}</h3>
                <p className="coin--symbol">{symbol}</p>
                <p className="coin--price">$ {currentPrice.toLocaleString()}</p>
            </div>
            <button className="coin--button" onClick={e => handleFavorite(e, id)}>+</button>
        </li>
    )
}

export default CryptoCard