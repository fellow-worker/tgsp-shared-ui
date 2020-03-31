import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Span = styled.span`
    color : ${props => Object.keys(props.theme.colors).includes(props.color) ? props.theme.colors[props.color] : props.color };
    font-size: ${props => props.theme.textSizes[props.size]};
    font-family: ${props => props.theme.fontFamily}
`

/**
 * A simple general text, with the option for coloring
 */
const Text = (props) => {
    const { color, size } = props;
    return <Span size={size} color={color}>{props.children}</Span> 
}

Text.propTypes = {
    /** The color of the text, accepts any color from the theme or css color */
    color: PropTypes.string,

    /** The size of the text, accepts any size from the theme */
    size : PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 's', 'xs']),
};

Text.defaultProps = {
    color: 'primary',
    size : 'p'
};

/* @component */
export default Text;