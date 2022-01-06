import React, {useState} from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [list, setList] = useState([])
    const [query, setQuery] = useState("")
    const [favorites, setFavorites] = useState([])
    const [details, setDetails] = useState({})

    const getData = () => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setList(res.data)
                console.log(res.data)
            })
            .catch(err => console.log("oops..." + err))
        console.log("getting data")
    }

    const handleChange = e => {
        setQuery(e.target.value)
        console.log(favorites)
    }

    const handleFavorite = (e, id) => {
        console.log(e)
        console.log(id)
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => setFavorites(prevFav => [...prevFav, res.data]))
            .catch(err => console.log("handleFavorite not working..." + err))
    }

    const removeFavorite = (e, id) => {
        setFavorites(prevFav => prevFav.filter(item => item.id !== id))
    }

    const handleDetails = (e, id) => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => {
                console.log(res.data)
                setDetails(res.data)
            })
            .catch(err => console.log("handleDetail not working..." + err))
    }

    return(
        <ThemeContext.Provider
            value={{
                list,
                query,
                favorites,
                details,
                getData,
                handleChange,
                handleFavorite,
                removeFavorite,
                handleDetails
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}