import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LinkContainer = styled.div`
        padding: 10px 0;
        background-color: #d6a7a5;
        border-radius: 5px;
        transition: all .65s ;
        
    & a {
        font-size: 1.1em;
        display: block;
        color: #f5f5f5;
        text-align: center;
        text-decoration: none;
    }
    :hover{
        background-color: #e0a09d;
        box-shadow: 0px 1px 2px #e0a09d;
    }
    @media all and (min-width: 769px){
        & a{
            font-size: 1.2em;
        }
    }
`;

const Button = ({id , text}) => {
    return (
            <LinkContainer>
               <Link to={`/beer/${id}`}>{text}</Link>
            </LinkContainer>
    )
}

Button.propTypes={
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}
export default Button;