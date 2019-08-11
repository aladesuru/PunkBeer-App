import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.p`
    font-size: 1em;

    @media all and (min-width: 769px){
        font-size: .98em;
    }
`;

const BeerDescription = ({description}) => {
    return (
            <Container>
               {description}
            </Container>
    )
}

BeerDescription.propTypes = {
    description: PropTypes.string.isRequired
}

export default BeerDescription;