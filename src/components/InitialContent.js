// @packages
import Grid from '@material-ui/core/Grid';
import Image from 'gatsby-image';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';

// @grapiQl
const GET_INFORMATION = graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
            nodes {
                    titulo
                    contenido
                    imagen {
                    fluid {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

// @styles
const useStyles = makeStyles((theme) => ({
    content: {
        margin: 20,
        maxWidth: '98%'
    },
    image: {
        alignSelf: 'center',
        textAlign: 'center'
    },
    paper: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    subtitle: {
        color: theme.palette.primary.main,
        alignSelf: 'center',
        padding: 100,
        textAlign: 'center'
    },
    title: {
        color: theme.palette.primary.main,
        fontSize: 26,
        fontWeight: 600,
        marginBottom: 10,
        textAlign: 'center'
    }
}));

const InitialContent = () => {
    const classes = useStyles();

    const info = useStaticQuery(GET_INFORMATION);

    const { allDatoCmsPagina: { nodes } } = info;

    const {0: { titulo, contenido, imagen }}  = nodes;

    return (
        <Grid className={classes.content} container spacing={3}>
             <Grid item xs={12}>
                <Typography className={classes.title}>{titulo}</Typography>
            </Grid>
            <Paper className={classes.paper} elevation={3}>
                <Grid className={classes.subtitle} item sm={12} md={6}>
                    <Typography>{contenido}</Typography>
                </Grid>
                <Grid className={classes.image} item sm={12} md={6}>
                    <Image fluid={imagen.fluid} />
                </Grid>
            </Paper>
        </Grid>
    );
}

export default InitialContent;