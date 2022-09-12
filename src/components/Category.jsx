import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import React from 'react';

const Category = () => {
    return (
        <div className='category'>
            <SLink to={'/cuisine/Italian'} className='types italian'>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/American'} className='types american'>
                <FaHamburger/>
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'} className='types thai'>
                <GiNoodles/>
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/Japanese'} className='types japanese'>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </SLink>
        </div>
    );
}

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    transform: scale(0.8);
    color: white;
    font-size: 18px;


    svg{
        color: white;
        font-size: 24px;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`

export default Category;

