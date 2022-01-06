import React, { useContext } from "react"
import { ThemeContext } from "../themeContext"

import {useNavigate} from "react-router-dom"

function Detail(){
    const { details } = useContext(ThemeContext)

    const navigate = useNavigate()

    return(
        <div>
            <h1>{details.market_data.market_cap_change_percentage_24h}</h1>
            <div onClick={() => navigate("/")}>Back to Home.</div>
        </div>
    )
}

export default Detail