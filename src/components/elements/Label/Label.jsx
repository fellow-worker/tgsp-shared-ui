import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import { Text } from '../../elements'

const Bold = styled.span`
    font-weight:bold;
    font-family: ${props => props.theme.fontFamily}
`;

/**
 * A label is elements that be can be used for forms
 */
const Label = (props) => {
    const { color, size } = props;
    return <Bold>
        <Text color={color} size={size}>{props.children}</Text>
    </Bold>
}

Label.propTypes = {
    /** The color of the text, accepts any color from the theme or css color */
    color: PropTypes.string,

    /** The size of the text, accepts any size from the theme */
    size : PropTypes.oneOf(['p', 's', 'xs']),
};

Label.defaultProps = {
    color: 'primary',
    size : 'p'
};

export default Label;