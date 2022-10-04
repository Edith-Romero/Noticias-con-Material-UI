import { useState, createContext, useEffect } from 'react'
import axios from 'axios'


const NoticiasContext = createContext()

const NoticiasProvaider = ({ children }) => {

    const AppKey = import.meta.env.VITE_API_KEY

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const ConsultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&pagSize=100&apiKey=${AppKey}`

            const { data } = await axios(url)

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
            setPagina(1)
        }
        ConsultarApi()
    }, [categoria])

    useEffect(() => {
        const ConsultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&pagSize=100&apiKey=${AppKey}`

            const { data } = await axios(url)

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
        }
        ConsultarApi()
    }, [categoria])

    // Se crea  una funcion auxiliar para no pasar la funcion original
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor);
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
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
