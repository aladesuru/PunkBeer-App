import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

//import component
import BeerName from '../BeerName';
import Avb  from '../Abv';
import Image from '../Image';
import Button from '../Button';


const CardContainer = styled.div`
    border-radius: 5px;
    padding: 10px 2%;
`;

const BeerCard = ({url , beerName , abv, text , id }) => {
    return(
        <CardContainer>
            <BeerName beerName={beerName}/>
            <Avb abv={abv} />
            <Image url={url} beerName={beerName} />
            <Button text={text} id={id}/>
        </CardContainer>
    )
};
BeerCard.propTypes = {
    url: PropTypes.string.isRequired,
    beerName: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
export default  BeerCard;



