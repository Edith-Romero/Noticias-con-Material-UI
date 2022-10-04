import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'


const ListadoNoticias = () => {

    const { noticias, totalNoticias } = useNoticias()

    const totalPagina = Math.ceil(totalNoticias / 20)

    console.log(totalPagina);

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}
            >
                Ultimas Noticias
            </Typography>
            {/* Creamos este map para que itere el arreglo y muestre las noticias en el componente noticia */}
            <Grid
                container
                spacing={2} //Para dar espacio entre las imagenes
            >
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>
            {/* Stack es como un div */}
            <Stack
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'
            >
                <Pagination count={10} color="primary" />
            </Stack>
        </>
    )
}

export default ListadoNoticias
