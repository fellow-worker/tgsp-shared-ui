import React from 'react';
import styled, { withTheme } from 'styled-components';
import {
    space, color, width, height, flex,
    order, alignSelf, borders, position, typography
} from 'styled-system';

const InnerBox = styled('div')`
    box-sizing: border-box;
    ${space};
    ${color};
    ${width};
    ${height};
    ${flex};
    ${order};
    ${alignSelf};
    ${borders};
    ${position};
    ${typography}
`;

const Box = (props) => {
    let { bg, color } = props;
    if(color === undefined && Object.keys(props.theme.colors).includes(bg + "Text")) color = bg + "Text";
    return <InnerBox {...props} color={color} />
}


Box.propTypes = {
    ...space.propTypes,
    ...color.propTypes,
    ...width.propTypes,
    ...height.propTypes
};

/** @component */
export default withTheme(Box);
