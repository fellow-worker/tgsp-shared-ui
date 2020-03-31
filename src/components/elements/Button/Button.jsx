import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const BaseButton = styled.button`
    color : ${props => props.theme.colors[props.color + "Text"] };
    background-color : ${props => props.theme.colors[props.color] };
    font-size: ${props => props.theme.textSizes.p};
    font-family: ${props => props.theme.fontFamily}
    padding: 8px 14px;
    box-sizing:border-box;
    border: none;
    cursor:pointer;

    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);

    border-radius:4px;

    &:hover {
        background-color : ${props => props.theme.colors[props.color + "Dark"] };
    }
`;

/**
 * A components that can be used as an simple button in interfaces
 * @param {*} props 
 */
const Button = (props) => {
    return <BaseButton {...props}>{props.label}</BaseButton>;
}

Button.propTypes = {
    /** The label that will be shown on the button */
    label : PropTypes.string,
    /** The function to be fired when a user clicked on the button */
    onClick : PropTypes.func,
    /** the color variant for the button */
    color : PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
}

Button.defaultProps = {
    onClick: () => {},
    color : "primary"
};

export default Button;