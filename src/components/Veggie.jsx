import React from 'react';
import { useEffect, useState } from 'react';
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Veggie = () => {

    const [veggie, setVeggie] = useState([]);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if (check){
            setVeggie(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=8c7d0f0ebf634d538f077af005ade44b&number=12&tags=vegetarian`)
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
        
    }

    useEffect(() => {
        getVeggie();
    }, []);

    return (
        <div>
            <Wrapper>
                <h3>Vegetarian Picks</h3>
                <Splide options={{
                    perPage: 3,
                    drag: "free",
                    gap: "5rem",
                    arrows: false,
                }}>
                    {veggie.map((recipe) => {
                        return(
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipes/'+recipe.id}>
                                    <p>
                                        <span>
                                        {recipe.title}
                                        </span>
                                    </p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}


const Wrapper = styled.div`
    margin: 3rem 0rem;
    h3{
        color:white;
        margin:20px 0;
        font-size:24px;
        text-align: center;
    }
`;

const Card = styled.div`
    min-height = 25rem;
    overflow: hidden;

    img{
        width: 100%;
        left: 0;
        border-radius: 2rem;
        height: 100%;
        object-fit: cover;
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 10;
        left:50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: black;
        width: 100%;
        text-align: center;
        font-weight:600;
        font-size: 1rem;
        height: 40%; 
    }
    p span{
        background-color: white;
    }
`;



export default Veggie;
