import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import React from 'react';

const Recipes = () => {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async() =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=8c7d0f0ebf634d538f077af005ade44b`)
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(()=>{
        fetchDetails();
    }, [params.name]);
    return (
        <DetailWrapper>
            <div className="recipes-img">
                <h2>{details.title}</h2>
                <img src={details.image} alt="img" />
            </div>
            <Info>
                <Button className={activeTab === 'instructions'? 'active': ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab === 'ingredients'? 'active': ''}onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
                {activeTab === 'instructions' && (
                <div>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                    <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                </div>
                )}
                {activeTab === 'ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient) =>
                        <li key={ingredient.id}>{ingredient.original}</li>
                    )}
                </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}
const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: black;
    }
    h2{
        margin-bottom: 2rem;

    }
    li{
        font-size: 1.2rem;
        line-height:2.5rem;
    }
    ul{
        margin-top:2rem;
    }
    div{
        width:100%;
    }

`;

const Button = styled.button`
    cursor: pointer;
    padding: 1rem 2rem;
    color: white;
    background: black;
    border: 2px solid white;
    margin-right: 2rem;
    font-weight: 600; 
`;

const Info = styled.div`
  
    margin-left: 10rem;  
    
    p{
        font-family: 'Poppins';
        font-size: 16px;
        letter-spacing:1.5px;
        margin: 15px 0;
        padding: 12px 0;
        text-decoration: none;
    }

    li{
        font-family: 'Poppins';
        font-size: 16px;
        letter-spacing:1.5px;
        list-style: square;
    }
`

export default Recipes;
