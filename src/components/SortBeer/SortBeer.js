import React , { Component } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
    display: block;
    text-align: center;

    label,select {
        display: inline-block;
        padding: 5px 10px;
        margin: 5px;
        background-color: #d6a7a5;
        border-radius: 10px;
        outline:none;
        font-size: 1.1em;
    }
    label {
        color: #333;
        font-size: 1.2em;
        font-weigth: bold;
    }
    select {
        background-color: #fff;
        color:#d6a7a5;
        border: 2px solid #d6a7a5;
        cursor: pointer;
    }

    @media all and (min-width: 769px){
        text-align: right;
        padding: 10px;

        label{
            font-size: 1.2em;
        }
        select{
            font-size: .98em;
        }
    }
`

class SortBeer extends Component {
    state = {
        value: 'name'
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.props.UpdateSortValue(event.target.value);
    }

    render() {
      return (
        <Form   className='sortform'>
          <label>
            Sort by:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="name">Beer name</option>
              <option value="abv">Abv</option>
            </select>
          </label>
        </Form>
      );
    }
  }
  SortBeer.propTypes={
    UpdateSortValue: Proptypes.func.isRequired
  }
  export default SortBeer;