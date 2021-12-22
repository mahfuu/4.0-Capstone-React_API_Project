import React, {useState} from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [list, setList] = useState([])

    const getData = () => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => setList(res.data))
            .catch(err => console.log("oops..." + err))
        console.log("getting data")
        console.log(list)
    }

    return(
        <ThemeContext.Provider
            value={{
                getData
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}