import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Span = styled.span`
    color : ${props => Object.keys(props.theme.colors).includes(props.color) ? props.theme.colors[props.color] : props.color };
    font-size: ${props => props.theme.textSizes[props.size]};
    padding-top: calc(0.45 * ${props => props.theme.textSizes[props.size]});
    padding-bottom: calc(0.45 * ${props => props.theme.textSizes[props.size]});
    display:inline-block;
`

/**
 * A simple general header, with the option for coloring,
 */
const Header = (props) => {
    let { color, size, variant } = props;
    if(size === undefined) size = variant;
    const span = <Span size={size} color={color}>{props.children}</Span>;
    const style = { margin:"0", padding : "0"};
    switch(variant) {
        case "h1" : return <h1 style={style}>{span}</h1>;
        case "h2" : return <h2 style={style}>{span}</h2>;
        case "h3" : return <h3 style={style}>{span}</h3>;
        case "h4" : return <h4 style={style}>{span}</h4>;
        case "h5" : return <h5 style={style}>{span}</h5>;
        case "h6" : return <h6 style={style}>{span}</h6>;
        default : return null;
    }
}

Header.propTypes = {
    /** The color of the text, accepts any color from the theme or css color */
    color: PropTypes.string,

    /** 
     * The size of the text, accepts any size from the theme. 
     * If size is onmitted it will adapt to the variant size  
     */
    size : PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 's', 'xs']),

    /** The variant determines how it is render */
    variant : PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Header.defaultProps = {
    color: 'primary',
    size : undefined,
    variant : 'h1'
};

/* @component */
export default Header;