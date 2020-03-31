
/** This is the base theme, it will be extended by other themes */
export const base = {
    colors: {
        inputBorder : 'rgba(0, 0, 0, 0.23);',
        inputBorderHover : 'rgba(0, 0, 0, 0.87);',
        inputText : 'black',

        primary: '#0267ee',
        primaryText: 'white',
        primaryLight: '#6694ff',
        primaryLightText: 'black',
        primaryDark: '#003eba',
        primaryDarkText: 'white',
        
        secondary : '#db004d',
        secondaryText : 'white',
        secondaryLight: '#ff5478',
        secondaryLightText: 'black',
        secondaryDark: '#a20026',
        secondaryDarkText: 'white',
        
        tertiary: '#ee8902',        
        tertiaryText: 'white',
        tertiaryLight: '#ffb944',
        tertiaryLightText: 'black',
        tertiaryDark: '#b55b00',
        tertiaryDarkText: 'white',
    },

    fontFamily : "'Open Sans', sans-serif;",

    textSizes : {
        h1 : "32px",
        h2 : "28px",
        h3 : "24px",
        h4 : "20px",
        h5 : "16px",
        h6 : "12px",
        p : "16px",
        s : "14px",
        xs : "12px"
    },

    mediaQueries : {
        small : "576px", /* Smaller devices (landscape phones, 576px and up) */
        medium : "768px", /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
        large : "992px", /* Large devices (desktops, 992px and up) */
        extraLarge: "1200px",  /* Extra large devices (large desktops, 1200px and up) */
    },
}