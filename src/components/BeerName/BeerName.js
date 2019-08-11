import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 1.1em;

    @media all and (min-width: 769px){
        font-size: 1em;
    }
`;

const BeerName = ({beerName}) => {
    return (
            <Heading>
               {beerName}
            </Heading>
    )
}
BeerName.propTypes={
    beerName: PropTypes.string.isRequired
}
export default BeerName;