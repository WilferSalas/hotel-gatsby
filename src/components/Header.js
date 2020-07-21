// @packages
import AppBar from '@material-ui/core/AppBar';
import Link from '../components/Link';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// @styles
const useStyles = makeStyles((theme) => ({
    link: {
        color: 'white',
        marginLeft: 15
    },
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      color: 'white'
    },
}));

const nav = [
    { id: 0, name: 'Pagina principal', url: '/' },
    { id: 1, name: 'Nosotros', url: '/about' }
];

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Hotel Gatsby
                    </Typography>
                    {nav.map(item => (
                        <Link
                            className={classes.link}
                            key={item.id}
                            to={item.url}
                        >
                            {item.name}
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;