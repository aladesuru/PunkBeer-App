import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TaglineContainer = styled.h3`
    font-size: 1.1em;
    margin: 10px 0;
    font-weight: bold;

    @media all and (min-width: 769px){
        font-size: .98em;
    }
`;

const Tagline = ({tagline}) => {
    return (
            <TaglineContainer>
               {tagline}
            </TaglineContainer>
    )
}

Tagline.propTypes={
    tagline: PropTypes.string.isRequired
}
export default Tagline;