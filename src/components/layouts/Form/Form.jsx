import React from 'react';
import Macro from 'macro-components'

import { Box, Button, ButtonGroup, Flex } from '../../elements'

const Buttons = (props) => (
    <FormButtons {...props}>
        <Omittable>{props.children}</Omittable>
    </FormButtons>
);

const Heading = ({ children }) => <Omittable>{children}</Omittable>;

const Fields = ({ children }) => children.map((c,i) => <FormChild key={i}>{c}</FormChild>);


const Form = Macro({ Heading, Fields, Buttons })(({ Heading, Fields, Buttons }, props) => (
    <Box>
        <div>{Heading}</div>
        <Box>
        {Fields}
        </Box>
        <Box>{Buttons}</Box>
    </Box>
));


const FormButtons = (props) => {
    // The user can set a complete 
    const { confirm, cancel } = props;
    if(!confirm && !cancel) return props.children;

    return (
        <Flex justifyContent="flex-end" pt={1} pb={1}>
            <ButtonGroup>
                <FormButton color="secondary" button={cancel} />
                <FormButton color="primary" button={confirm} />
            </ButtonGroup>
        </Flex>
    )
}

const FormButton = ({button, color}) => {
    if(!button) return null;
    if(!button.color) button.color = color;
    return <Button {...button} />
}


const Omittable = ({children}) => {
    if(!children) return null;
    return children
}

const FormChild = (props) => {
    return <Box pt={1} pb={1} >{props.children}</Box>
}

export default Form;