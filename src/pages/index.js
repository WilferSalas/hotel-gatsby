// @packages
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// @scripts
import InitialContent from '../components/InitialContent';
import MainImage from '../components/MainImage';
import Room from '../components/Room';
import useRooms from '../hooks/useRooms';
import { makeStyles } from '@material-ui/core/styles';

// @styles
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10
  },
  title: {
      color: theme.palette.primary.main,
      fontSize: 26,
      fontWeight: 600,
      marginBottom: 10,
      textAlign: 'center'
  }
}));

const Index = () => {
  const classes = useStyles();

  const rooms = useRooms();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <MainImage />
      </Grid>
      <Grid item xs={12}>
        <InitialContent />
      </Grid>
      <Grid item xs={12}>
          <Typography className={classes.title}>
            Nuestras habitaciones
          </Typography>
      </Grid>
      {rooms.map((room, index) => (
        <Grid item key={index} sm={12} md={4}>
          <Room
            content={room.contenido}
            image={room.imagen.fluid}
            slug={room.slug}
            title={room.titulo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Index;