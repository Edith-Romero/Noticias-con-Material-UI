import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";



const Noticia = ({ noticia }) => {

    const { urlToImage, url, title, description, source } = noticia

    return (
        // Aca se coloca el grid en el padre "Componente de Formulario" y aca en el hijo se hace el mediaQuery
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (
                    <CardMedia
                        component="img"
                        alt={`Imagen de la noticia ${title}`}
                        image={noticia.urlToImage}
                        height={'250'}
                    />)}

                <CardContent>
                    <Typography
                        variant='body1'
                        color="error"
                    >
                        {source.name}
                    </Typography>
                    <Typography
                        variant='h5'
                        component='div'
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='body2'
                    >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        href={url}
                        target="_blank" //Sirve para que al abrir la pagina de la noticia, abra en otra ventana y al cerrar quede tu pagina igual activa.
                        variant='button'
                        width={'100%'}
                        textAlign={'center'}
                        sx={{
                            textDecoration: 'none'
                        }}
                    >
                        Leer Noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Noticia;
