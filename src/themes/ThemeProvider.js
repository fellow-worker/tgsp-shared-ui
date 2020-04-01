import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styleguidist';

export default props => (
    <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
);