import React, { useState } from 'react'
import styled from 'styled-components'
import Background from '../Background/Background'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { GlassCardSection } from '../GlassCard/GlassCard'

import Header from '../Header/Header'
import Project from '../Project/Project'
import Skills from '../Skills/Skills'

const ThemeButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 20px;
  filter: hue-rotate(105deg);
  position: fixed;
  right: 120px;
  top: 10px;
  z-index: 100;


  padding: 5px 10px;
  padding:10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: transparent;
  resize: none;
  background: rgba(255, 255, 255, 0.1);
  box-shadow:20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  cursor: pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  
  
`

const Home = () => {
  const [theme, setTheme] = useState("")
  // const black = "blak"
  const changeTheme = () => {
    if (!theme) {
      setTheme(() => !theme && "black");
    }
    else {
      setTheme("");
    }
    console.log(theme)
  }

  return (
    <div className="container">
      <ThemeButton onClick={changeTheme}>{
        {theme}==='black'?'☀️':'🌙'
      }
      </ThemeButton>
      <Header />
      <Background theme={theme} />
      <Project theme={theme} />
      <Skills theme={theme} />
      <GlassCardSection theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme}/>
      
    </div>
  )
}

export default Home