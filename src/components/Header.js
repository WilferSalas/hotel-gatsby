// @packages
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import Link from '../components/Link';

// @styles
const useStyles = makeStyles((theme) => ({
    button: {
        fontSize: 20,
        fontWeight: 600,
    },
    link: {
        color: 'white',
        marginLeft: 15
    },
    liknSubtitles: {
        marginRight: 10
    },
    linkTitle: {
        flexGrow: 1,
        color: 'white',
        '&:hover': {
            textDecoration: 'none'
        }
    },
    title: {
      flexGrow: 1,
      color: 'white'
    },
    toolbar: {
        justifyContent: 'space-between',
    }
}));

const nav = [
    { id: 0, name: 'Pagina principal', url: '/' },
    { id: 1, name: 'Nosotros', url: '/about' }
];

const Header = ({ title }) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Button className={classes.button} color="primary">
                    <Link
                        className={classes.linkTitle}
                        to="/"
                    >
                        {title}
                    </Link>
                </Button>
                <div className={classes.liknSubtitles}>
                    {nav.map(item => (
                        <Link
                            className={classes.link}
                            key={item.id}
                            to={item.url}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </Toolbar>
        </AppBar>
    );
};

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header;