import React, { Component } from "react";
import axios from "axios";
import {Route , Switch} from 'react-router-dom';

//import components
import Layout from "../Layout";
import LoadingScreen from '../LoadingScreen';
import BeerCardList from '../BeerCardList';
import BeerDetails from '../BeerDetails';
import ErrorComponent from '../Error';

class MainContent extends Component {
  state = {
    beers: [],
    isLoading: true,
  };

  componentDidMount() {
    this.FetchPunkAPI();
  }

  // method use to fetch the data
  FetchPunkAPI = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then(response => {
        // handle success
        this.setState({
          beers: response.data,
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

  render() {
    return (
      <React.Fragment>
          { this.state.error 
            ? 
            <ErrorComponent content="Error fetching and parsing data please try again later" />
            :
            <div>
              {this.state.isLoading ? (
                <LoadingScreen />
              ) : (
                <div>
                  <Layout>
                    <Switch>
                      <Route exact path='/' render={() => <BeerCardList beers={this.state.beers} />} />
                      <Route path='/beer/:id' component={ BeerDetails } />
                      <Route render={ () => <ErrorComponent content='Page Not Found' />} />
                    </Switch>
                  </Layout>
                </div>
              )}
          </div>
          }
      </React.Fragment>
    );
  }
}

export default MainContent;
