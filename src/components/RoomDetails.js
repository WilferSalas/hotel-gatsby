// @packages
import Grid from '@material-ui/core/Grid';
import Image from 'gatsby-image';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion (filter: { slug: { eq: $slug } }) {
            nodes {
                    titulo
                    contenido
                    imagen {
                        fluid(maxWidth: 1200) {
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
        marginTop: 40,
        padding: 40
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
        alignSelf: 'center',
        color: theme.palette.primary.main,
        padding: 100,
        textAlign: 'center'
    },
    title: {
        alignSelf: 'flex-end',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        }
    },
    titleTypography: {
        color: theme.palette.primary.main,
        fontSize: 26,
        fontWeight: 600,
        marginBottom: 0,
        textAlign: 'flex-end'
    }
}));

const RoomDetails = ({ data }) => {
    const classes = useStyles();

    const { allDatoCmsHabitacion: { nodes: { 0: { titulo, contenido, imagen } } } } = data;

    return (
        <Grid className={classes.content} container>
            <Paper className={classes.paper}>
                <Grid item sm={12} md={6}>
                    <Image fluid={imagen.fluid} />
                </Grid>
                <Grid container item sm={12} md={6}>
                    <Grid className={classes.title} item xs={12}>
                        <Typography className={classes.titleTypography}>{titulo}</Typography>
                    </Grid>
                    <Grid className={classes.subtitle} item xs={12}>
                        <Typography>{contenido}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default RoomDetails;