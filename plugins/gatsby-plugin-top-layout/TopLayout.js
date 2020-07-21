// @packages
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/core/styles';

// @scripts
import Header from '../../src/components/Header'
import theme from '../../src/theme';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hotel Gatsby</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Header />
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
