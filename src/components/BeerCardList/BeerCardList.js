import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';


// import component
import BeerCard from '../BeerCard';
import SortBeer from '../SortBeer';

const CardListContainer = styled.div`
    margin-top: 20px;
    @media all and (min-width: 769px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const Heading = styled.h1`
    font-size: 34px;
    font-weight: bold;
    margin: 40px 0;
    text-transform: uppercase;
    text-align: center;

    @media all and (min-width: 769px){
        font-size: 45px;
        text-align:left;
    }
`;

const Card = styled.div`
    @media all and (min-width: 769px){
        flex: 1 25%;
    }
`;

class BeerCardList extends Component {

    state = {
        limit: 5,
        sortBy: 'name',
    }
    
// callback funtion to update value to use to sort
  handleUpdateSortValue = (sortBy) => {
    this.setState({
        sortBy 
    })
  }

    render(){
        const {beers} = this.props;
        //callback function for sort method
        const compare = (a , b) => {
            if(this.state.sortBy.toLocaleLowerCase() === 'name'){
                if(a.name < b.name){
                    return -1;
                }
            }else if(this.state.sortBy.toLocaleLowerCase() === 'abv'){
                return a.abv - b.abv;
            }
        };
        return(
            <React.Fragment>
                <Heading>Punk Beers</Heading>
                <SortBeer UpdateSortValue={this.handleUpdateSortValue}/>
                <CardListContainer>
                    {
                        beers.sort(compare).map(beer => {
                            return(
                                <Card key={beer.id}>
                                    <BeerCard 
                                        url={beer.image_url}
                                        abv={beer.abv}
                                        beerName={beer.name}
                                        text='More details'
                                        id={beer.id}
                                    />
                                </Card>
                            )
                        })
                    }
                </CardListContainer>
            </React.Fragment>
        )
    }
}

BeerCardList.propTypes = {
    beers:PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default BeerCardList;