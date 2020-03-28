import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Label, Input } from '../../elements'


const Flex = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${props => props.theme.mediaQueries.medium}) {
        flex-direction: row;
        align-items: center;
    }
`;

const LabelBox = styled(Box)`
    @media (min-width: ${props => props.theme.mediaQueries.medium}) {
        flex : 0 0 ${props => props.labelWidth};
    }
`
const InputBox = styled.div`
    @media (min-width: ${props => props.theme.mediaQueries.medium}) {
        flex : 1 1 auto;
    }
`

/**
 * A TextField is a combination a label and an input is a responsive layout
 * @param {*} props 
 */
const TextField = (props) => {
    const { color, size, label, labelWidth} = props;

    return (
        <Flex>
            <LabelBox labelWidth={labelWidth} pr={2} pt={2} pb={2}>
                <Label color={color} size={size}>{label}</Label>
            </LabelBox>
            <InputBox>
                <Input {...props} /> 
            </InputBox>
        </Flex>
    )
}

TextField.propTypes = {
    /** The color of the text, accepts any color from the theme or css color */
    color: PropTypes.string,

    /** The size of the text, accepts any size from the theme */
    size : PropTypes.oneOf(['p', 's', 'xs']),

    /** 
     * the width of the label 
     * This can be useful in form situations to set all label to the same width  
     */
    labelWidth : PropTypes.string
};

TextField.defaultProps = {
    color: 'primary',
    size : 'p',
    border : undefined,
    type : 'text',
    labelWidth : 'auto'
};

export default TextField;