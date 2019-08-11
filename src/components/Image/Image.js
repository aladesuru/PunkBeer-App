import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    text-align: center;
`;

const ImagePlaceHolder = styled.div`
    background: url(${props => props.url}) no-repeat center;
    background-size: contain;
    width: 200px;
    height: 300px;
    margin: auto;
`;

const Image = ({url}) => {
    return (
         <Container >
             <ImagePlaceHolder url={url} />
         </Container>   
    )
}
Image.propTypes={
    url: PropTypes.string.isRequired,
}
export default Image;