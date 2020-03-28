import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

/* This is component that is actually wrapper */
const Wrapper = styled.input`
    color : ${props => Object.keys(props.theme.colors).includes(props.color) ? props.theme.colors[props.color] : props.color };
    font-size: ${props => props.theme.textSizes[props.size]};
    width : 100%;
    padding: 8px;
    box-sizing:border-box;
    border : 1px solid ${props => Object.keys(props.theme.colors).includes(props.border) ? props.theme.colors[props.border] : props.border };
`

/**
 * Input is a simple input field that will fill the full space provided
 */
const Input = (props) => {
    let { border, color } = props;
    if(border === undefined && Object.keys(props.theme.colors).includes(color + "Border")) border = color + "Border";
    return <Wrapper {...props} border={border} />
}

Input.propTypes = {
    /** The color of the text, accepts any color from the theme or css color */
    color: PropTypes.string,

    /** 
     * The color of the border, accepts any color from the theme or css color,
     * However, when omitted, it will try to adapt to the color provided
     */
    border: PropTypes.string,

    /** The size of the text, accepts any size from the theme */
    size : PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 's', 'xs']),

    type : PropTypes.oneOf(['password', 'text'])
};

Input.defaultProps = {
    color: 'primary',
    size : 'p',
    border : undefined,
    type : 'text'
};

/* @component */
export default withTheme(Input);