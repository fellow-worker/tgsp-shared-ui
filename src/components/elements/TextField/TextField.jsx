import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Outlined = styled.div`
    border-radius: 4px;
    border : 1px solid ${props => props.theme.colors.inputBorder};
    padding:1px;
    box-sizing:border-box;
    font-size: ${props => props.theme.textSizes[props.size]};
    position: relative;
    color : ${props => props.theme.colors.inputText};
    font-family: ${props => props.theme.fontFamily}

    > input {
        border-width:0;
        font-family: ${props => props.theme.fontFamily};
        width:100%;
        padding:10px 10px;
        box-sizing:border-box;
        line-height: calc(1.75 * ${props => props.theme.textSizes[props.size]});
        font-size: ${props => props.theme.textSizes[props.size]};
        outline: none;
        color : ${props => props.theme.colors.inputText};
    }

    :hover {
        border : 1px solid ${props => props.theme.colors.inputBorderHover};
    }

    &.outlined {
        border : 1px solid ${props => Object.keys(props.theme.colors).includes(props.color) ? props.theme.colors[props.color] : props.color};
    }

    &.error {
        border : 1px solid ${props => props.theme.colors.inputError};
    }
`;

const TextLabel = styled.div`
    position: absolute;
    z-index: 2;
    display: inline-block;
    background:white;
    box-sizing:border-box;
    padding: 0 2px;

    font-family: ${props => props.theme.fontFamily};
    line-height: calc(1.75 * ${props => props.theme.textSizes[props.size]});
    font-size: ${props => props.theme.textSizes[props.size]};
    left:10px;
    top:10px;
    color: ${props => props.theme.colors.inputBorder};

    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &.outlined {
        top:-14px;
        font-size: calc(0.75 * ${props => props.theme.textSizes[props.size]});
        color: ${props => Object.keys(props.theme.colors).includes(props.color) ? props.theme.colors[props.color] : props.color};
    }

    &.outlined.error {
        color : ${props => props.theme.colors.inputError};
    }
`

/**
 * A TextField is a combination a label and an input is a responsive layout
 * @param {*} props 
 */
const TextField = (props) => {
    const [ focused, setFocused ] = useState(false);
    const [ value, setValue ] = useState((props.value) ? props.value : "");

    const onFocus = (event) => {
        setFocused(true)
        if(props.onFocus) props.onFocus();
    }

    const onBlur = (event) => {
        setFocused(false)
        if(props.onBlur) props.onBlur();
    }

    const onInput = (event) => {
        setValue(event.target.value);
        if(props.onInput) props.onInput(event.target.value);
    }

    const onChange = (event) => {
        setValue(event.target.value);
        if(props.onChange) props.onChange(event.target.value);
    }

    let className = (!!value || focused) ? "outlined" : "";
    if(props.disabled === true) className += " disabled"
    if(props.error === true) className += " error"

    let inputProps = { type : props.type, onFocus : onFocus, onBlur : onBlur, value :value, onInput : onInput, onChange : onChange };
    if(props.disabled === true) inputProps.disabled = "disabled";

    return (
        <Outlined className={className}  color={props.color} size={props.size}>
            <input {...inputProps}  />
            <TextLabel className={className} color={props.color} size={props.size}>{props.label}</TextLabel>
        </Outlined>
        
    )
}

TextField.propTypes = {
    /** The color of the text, accepts any color from the theme or css color */
    color: PropTypes.string,

    /** The size of the text, accepts any size from the theme */
    size: PropTypes.oneOf(['p', 's', 'xs']),

    /** This method is fired when the field is focused */
    onFocus : PropTypes.func,

    /** This method is fired when the field is blurred */
    onBlur : PropTypes.func,

    /** This method is fired when the value of field is changed */
    onChange : PropTypes.func,

    /** This method is fired when the value of field is changed */
    onInput : PropTypes.func,    

    /** The type of the field */
    type : PropTypes.oneOf(['text', 'password']),

    /** When set the field will be disabled */
    disabled : PropTypes.bool,

    /** When set the field will be disabled */
    error : PropTypes.bool,
};

TextField.defaultProps = {
    color: 'primary',
    size: 'p',
    type: 'text',
    onFocus : undefined,
    onBlur : undefined,
    onInput : undefined,
    onChange : undefined,
    error : false,
    disabled : false,
};

export default TextField;