
/** This is the base theme, it will be extended by other themes */
export const base = {
    colors: {
        text: 'rgba(0, 0, 0, 0.87);',

        inputBorder : 'rgba(0, 0, 0, 0.23);',
        inputBorderHover : 'rgba(0, 0, 0, 0.87);',
        inputText : 'rgba(0, 0, 0, 0.87);',
        inputError : '#d50000',

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
        
        tertiary: 'rgb(70,72,116)',        
        tertiaryText: 'white',
        tertiaryLight: 'rgb(98,102,165)',
        tertiaryLightText: 'black',
        tertiaryDark: 'rgb(51,52,73)',
        tertiaryDarkText: 'white',
    },

    fontFamily : "'Open Sans', sans-serif;",
    fontWeightHeader : "100",
    fontWeightText : "400",

    textSizes : {
        h1 : "3.2rem",
        h2 : "2.8rem",
        h3 : "2.4rem",
        h4 : "2.0rem",
        h5 : "1.6rem",
        h6 : "1.2rem",
        p : "1.4rem",
        s : "1.2rem",
        xs : "1.0rem"
    },

    mediaQueries : {
        small : "576px", /* Smaller devices (landscape phones, 576px and up) */
        medium : "768px", /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
        large : "992px", /* Large devices (desktops, 992px and up) */
        extraLarge: "1200px",  /* Extra large devices (large desktops, 1200px and up) */
    },
}