import styled from 'styled-components'


const ButtonGroup = styled.div`

    > button {
        border-radius:0px;
    }

    > button:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    > button:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`
/** @component */
export default ButtonGroup;