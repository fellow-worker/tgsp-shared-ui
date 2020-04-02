import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Text from "../Text/Text";

/**
 * A simple waiting text (...) which can be added to text
 */
const StandBy = (props) => {
    const { min, max } = props;
    const [ dots, setDots ] = useState(min);

    useEffect(() => {

        const interval = () => {
            const value = Math.max((dots + 1) % (max + 1), min);
            setDots(value);
        }
    
        setTimeout(interval,400);
    },[dots,max,min])



    return <Text {...props}>{".".repeat(dots)}</Text> 
}

StandBy.propTypes = {
    /** The color of the text, accepts any color from the theme or css color */
    color: PropTypes.string,

    /** The size of the text, accepts any size from the theme */
    size : PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 's', 'xs']),

    /** the minimum number of dots */
    min : PropTypes.number,

    /** the maximum number of dots */
    max : PropTypes.number,
};

StandBy.defaultProps = {
    color: 'primary',
    size : 'p',
    min : 1,
    max : 3
};

export default StandBy;