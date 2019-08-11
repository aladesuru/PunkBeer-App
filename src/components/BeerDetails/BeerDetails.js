import React , {Component} from 'react';
import axios from "axios";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

//import component
import BeerName from '../BeerName';
import Abv  from '../Abv';
import Image from '../Image';
import Tagline from '../Tagline';
import BeerDescription from '../BeerDescription';
import LoadingScreen from '../LoadingScreen';

const CardContainer = styled.div`
    padding: 10px 2%;
    .back{
        margin: 20px 0;
        a{
            text-decoration:none;
        }
    }

    @media all and (min-width: 769px){
        & .image,
        & .other{
            display: inline-block;
            vertical-align: top;
            width: 48%;
        }

        & .other{
            padding-left: 2%;
        }
    }
`;

class BeerDetails extends Component{
    state = {
        beer: [],
        isLoading: true,
      };
    
      componentDidMount() {
        this.FetchPunkAPI(this.props.match.params.id);
      }
    
      // method use to fetch the data
      FetchPunkAPI = (id) => {
        axios
          .get(`https://api.punkapi.com/v2/beers/${id}`)
          .then(response => {
            // handle success
            this.setState({
              beer: response.data,
              isLoading: false
            });
          })
          .catch(error => {
            // handle error
            this.setState({
              error: true
            });
          });
      };
    
    render(){
        return(
            <div>
                {
                    this.state.isLoading 
                    ?  
                    <LoadingScreen /> 
                    : 
                    <CardContainer>
                        <div className='back'><Link to='/'>&lt; Back</Link></div>
                        {
                            this.state.beer.map(item => {
                                return(
                                    <div key={item.id}>
                                        <BeerName beerName={item.name} />
                                        <div>
                                            <div className="image"><Image url={item.image_url} beerName={item.name} /></div>
                                            <div className="other">
                                                <Abv abv={item.abv} />
                                                <Tagline tagline={item.tagline} />
                                                <BeerDescription description={item.description} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CardContainer>
                }
            </div>
        )
    }
}
export default  BeerDetails;



