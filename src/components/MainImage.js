// @packages
import React from 'react';
import Typography from '@material-ui/core/Typography';
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

// @GrapiQL
const GET_IMAGE = graphql`
    query {
        image: file(relativePath: { eq: "main-image.jpg" }) {
            sharp: childImageSharp {
                fluid(maxWidth: 2048, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

// @styles
const useStyles = makeStyles((theme) => ({
    img: {
        height: 'calc(100vh - 200px)'
    },
    imgBackground: {
        alignItems: 'center',
        backgroundImage: 'linear-gradient(to top, rgba(34, 49, 63, 0.75), rgba(34, 49, 63, 0.75))',
        color: 'white',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
    },
    subTitle: {
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.6rem'
        }
    },
    title: {
        fontSize: '4rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    }
}));

const MainImage = () => {
    const classes = useStyles();

    const { image } = useStaticQuery(GET_IMAGE);

    const { sharp: { fluid }} = image;

    return (
        <BackgroundImage
            className={classes.img}
            tag="section"
            fluid={fluid}
            fadeIn="soft"
        >
            <div className={classes.imgBackground}>
                <Typography className={classes.title}>Bienvenido al hotel Gatsby</Typography>
                <Typography className={classes.subTitle}>El mejor hotel para tus vacaciones</Typography>
            </div>
        </BackgroundImage>
    );
};

export default MainImage;