import Pages from './pages/Pages';
import './App.css';
import Category from './components/Category';
import { BrowserRouter, Link } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import {GiCook} from 'react-icons/gi'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav>
        <GiCook/>
        <Logo to={'/'}>
          Recipe App
          <p>Cook Deliciousss</p>
        </Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/>
    </div>
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    color: white;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`

const Nav  = styled.div`
  padding: 4rem 0rem;
  display: flex;
  // 
  // left: 10px
  
  align-items: center;
  svg{
    font-size: 5rem;
  }
  p{
    font-family: 'poppins';
    font-size:16px;
  }
`
export default App;
