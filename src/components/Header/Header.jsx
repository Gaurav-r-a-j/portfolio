import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { logo ,menu} from '../../images'

const Navbar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 3%;

`

const LeftNav = styled.div`
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
  filter: invert(1);

`
const Logo = styled.img`
  width: 100px;
  filter: invert(1);
`

const RighttNav = styled.div`
  padding: 5px 10px;
  border-radius: 3px;
  color: black;

`
const MenuIcon = styled.img`
  width: 50px;
`

const MiddleNav = styled.div`
  width: 100%;


  @media (min-width: 0px) and (max-width: 600px) {
    height: inherit;
  }
`

const Ul = styled.ul`
  display:flex ;
  align-items: center;
  justify-content: center;
  @media (min-width: 0px) and (max-width: 900px) {
    flex-direction: column;
    position: absolute;
    right: 50%;
    left: 50%;
    display: none;
    /* display: none; */
  }
  
`
const Li = styled.li`
  list-style: none;
  margin: 0 20px;
  padding: 5px 10px;
  color: white;
  border-radius: 20px;
  color: white;
  filter: invert(1);
  width: 80px;
  text-align: center;

  a{
    color: white;
    &:hover{
    color: #87f5f1;
  }

  }

  
`





const Header = () => {
  
  return (
    <Navbar>
      <LeftNav>
        <Logo src={logo} alt='logo' />
      </LeftNav>
      <MiddleNav>
        <Ul>
          <Link to="/">
            <Li>
              Home
            </Li>
          </Link>

          <Link to="/">
            <Li>Skills</Li>
          </Link>
          <Link to="/">
            <Li>Projects</Li>
          </Link>
          <Link to="/">
            <Li>Timeline</Li>
          </Link>
          <Link to="/">
            <Li>Contact</Li>
          </Link>

        </Ul>
      </MiddleNav>
      <RighttNav>
        <MenuIcon  src={menu} alt='menu' />
      </RighttNav>

    </Navbar>
  )
}

export default Header