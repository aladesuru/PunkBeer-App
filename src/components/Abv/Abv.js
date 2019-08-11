import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Heading = styled.h2`
    font-size: 1em;
    padding: 10px 0;
    color: #222;

    @media all and (min-width: 769px){
        font-size: .78em;
        padding: 5px 0;
    }
`;

const Abv = ({abv}) => {
    return (
            <Heading>
                ABV : ({abv})
            </Heading>
    )
}

Abv.propTypes = {
    abv: PropTypes.number.isRequired
}
export default Abv;