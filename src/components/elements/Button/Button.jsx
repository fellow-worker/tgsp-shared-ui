import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const BaseButton = styled.button`
    color : ${props => props.theme.colors[props.variant + "Text"] };
    background-color : ${props => props.theme.colors[props.variant] };
    font-size: ${props => props.theme.textSizes.p};
    padding: 8px 14px;
    box-sizing:border-box;
    border: none;
    cursor:pointer;

    &:hover {
        background-color : ${props => props.theme.colors[props.variant + "Hover"] };
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
    /** a style variant for the button */
    variant : PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
}

Button.defaultProps = {
    onClick: () => {},
    variant : "primary"
};

export default Button;