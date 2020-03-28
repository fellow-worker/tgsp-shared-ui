
/** This is the base theme, it will be extended by other themes */
export const base = {
    colors: {
        primary: '#123859',
        primaryText: 'white',
        primaryBorder: '#EEEEEE',
        primaryHover: '#091c2c',

        secondary : '#419FD9',
        secondaryText : 'white',
        secondaryBorder: '#CCCCCC',
        secondaryHover : '#8dc5e8',

        tertiary: '#D67031',        
        tertiaryText: 'white',
        tertiaryBorder: '#CCCCCC',
        tertiaryHover : '#e29a6e',
    },

    textSizes : {
        h1 : "32px",
        h2 : "28px",
        h3 : "24px",
        h4 : "20px",
        h5 : "16px",
        h6 : "12px",
        p : "14px",
        s : "12px",
        xs : "10px"
    },

    mediaQueries : {
        small : "576px", /* Smaller devices (landscape phones, 576px and up) */
        medium : "768px", /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
        large : "992px", /* Large devices (desktops, 992px and up) */
        extraLarge: "1200px",  /* Extra large devices (large desktops, 1200px and up) */
    },
}