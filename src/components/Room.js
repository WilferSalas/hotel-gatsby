// @packages
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Image from 'gatsby-image';
import Link from '../components/Link';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// @styles
const useStyles = makeStyles({
    root: {
      margin: 20
    },
    link: {
        '&:hover': {
            textDecoration: 'none'
        }
    }
});

const Room = ({
    content,
    image,
    slug,
    title
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Image style={{ minHeight: 410 }} fluid={image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button color="primary">
                    <Link
                        className={classes.link}
                        to={slug}
                    >
                        Mas informacion
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

Room.prototype = {
    content: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Room;