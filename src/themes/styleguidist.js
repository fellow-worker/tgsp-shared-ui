import { base } from './base';

// Overwriting settings from the base theme
let theme = {...base};

// The problem with the styleguidist are the font sizes in rem, so define them in pixels

theme.textSizes = {
    h1 : "32px",
    h2 : "28px",
    h3 : "24px",
    h4 : "20px",
    h5 : "16px",
    h6 : "12px",
    p : "14px",
    s : "12px",
    xs : "10px"
};

// export the styleguidist theme
const styleguidist = theme;

export default styleguidist;