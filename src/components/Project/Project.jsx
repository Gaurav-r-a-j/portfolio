import React from 'react'
import styled from 'styled-components'
import { project1, project2 , project3 } from '../../images';

// const TechUsed = ['HTML',"CSS",'REACT','JAVASCRIPT','MONGODB','MONGOOSE']

const ProjectContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  background-image: linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% );
  background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );
  /* height: 100vh; */
  padding: 5%;
  position: relative;
  @media (min-width:0px) and (max-width: 900px) {
    flex-direction: column !important;
    height: 100vh;
  }
`;

const AboutProject = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction: column;
  flex-basis: 48%;
  height: 400px;
  position: relative;
  overflow: auto;
  /* background-color: rebeccapurple; */


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

`

const ProjectDemo = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  height: 400px;
  flex-basis: 48%;
  position: relative;
  flex-basis: 50%;
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

`

const ProjectDemoImage = styled.img`
  width: 100%;
  transition: all 0.6s;
  opacity: 1;
  @media(hover:hover){
    opacity: 0.4;
    width: 50%;
    &:hover{
    opacity: 1;
    transform: scale(2);
  }
  }

  
`

const Technologies = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
`
const TechButton = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
    width: 100px;
    padding:10px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: transparent;
    resize: none;
    background: rgba(255, 255, 255, 0.1);
    box-shadow:-1px -1px 1px rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white;
    margin: 10px;
    cursor: pointer;
    transition: all 0.4s;
    &:hover{
      transform:  rotateX(47deg) rotateY(-4deg) rotateZ(23deg);


    }

    @media (min-width:0px) and (max-width: 600px) {
      width: auto;
  }
  
`

const ViewButton = styled.button`
    width: 100px;
    padding:10px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: transparent;
    resize: none;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white;
    margin: 10px;
    cursor: pointer;
    transition: all 0.4s;
    font-size: 15px;
    &:hover{
      transform:  rotateX(20deg) rotateY(-20deg) rotateZ(15deg) scale(1) skewX(5deg) skewY(1deg);
    }
    /* @media (min-width:0px) and (max-width: 600px) {
      width: auto;
  }  */
`
const ProjectHeading = styled.h1`
  font-size: 2em;
  color: white;
  margin: 5px;
  @media (min-width:0px) and (max-width: 600px) {
    font-size: 30px;
  }
`

const ProjectText = styled.p`
  width: 90%;
  text-align: center;
  font-size: 1.1em;
  letter-spacing: 1px;
  color: white;
  margin: 5px;
  @media (min-width:0px) and (max-width: 600px) {
    font-size: 15px;
  }

`

const Project = ({ theme }) => {

  return (
    <>
      <ProjectCard 
      theme={theme} 
      image={project1} 
      TechUsed ={['HTML','CSS',"JAVASCRIPT"]}
      />

      <ProjectCard 
      theme={theme} 
      reverse="row-reverse" 
      image={project2}
      TechUsed ={['HTML','CSS',"JAVASCRIRPT"]}
       />
      <ProjectCard 
      theme={theme} 
      image={project3}
      TechUsed ={['HTML','CSS',"REACT","MONGODB",'EXPRESS',"MAILTRAP"]}
      />
    </>
  )
}



export const ProjectCard = ({ theme, reverse ,image,TechUsed }) => {
  const black = { background: `${theme}` };
  // TechUsed = new Array(TechUsed);
  // console.log(TechUsed)
  const Tech = TechUsed;
  console.log(Tech)
  return (
    <ProjectContainer style={{ ...black, flexDirection: reverse }}>
      <ProjectDemo>
        <ProjectDemoImage src={image} />
      </ProjectDemo>
      <AboutProject>
        <ProjectHeading>This is my first project</ProjectHeading>
        <ProjectText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi eius dolores odit cumque consequatur dignissimos tempora quia quod magni.</ProjectText>
        <Technologies>
          {/* <TechButton>HTML</TechButton>
          <TechButton>CSS</TechButton>
          <TechButton>REACT</TechButton>
          <TechButton>MONGODB</TechButton>
          <TechButton>MONGOOSE</TechButton>
          <TechButton>EXPRESS</TechButton>
          <TechButton>BOOTSTRAP</TechButton> */}
        {
    
         Tech!==undefined && Tech.map((item,index)=>{
            return  <TechButton key={index}>{item}</TechButton> 
          })
        }

        </Technologies>
        <ViewButton>View</ViewButton>
      </AboutProject>
    </ProjectContainer>
  )
}


export default Project