import { useState, createContext, useEffect } from 'react'
import axios from 'axios'


const NoticiasContext = createContext()

const NoticiasProvaider = ({ children }) => {

    const AppKey = import.meta.env.VITE_API_KEY

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        const ConsultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&pagSize=100&apiKey=${AppKey}`

            const { data } = await axios(url)

            setNoticias(data.articles);
        }
        ConsultarApi()
    }, [categoria])

    // Se crea  una funcion auxiliar para no pasar la funcion original
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvaider
}

export default NoticiasContext
