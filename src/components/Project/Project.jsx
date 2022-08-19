import React, { useState } from 'react'
import styled from 'styled-components'
import { project3, netflixClone, portfolio1, portfolio2, sstarx, chatapp, chemvigyan, teachingApp, textutils, tier3wale, spotifyHomepage, myntraClone, facebookClone, spotify, notesapp, idicuss, postmaster } from '../../images';

// const TechUsed = ['HTML',"CSS",'REACT','JAVASCRIPT','MONGODB','MONGOOSE']

const ProjectContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  background-image: linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% );
  background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );
  /* height: 100vh; */
  background-image: linear-gradient( 292.9deg, rgba(254,105,241,1) 28.8%, rgba(182,44,248,1) 70.4% );
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
text-transform: uppercase;
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
    color: #0d1644;
    margin: 10px;
    cursor: pointer;
    min-width: max-content;
    transition: all 0.4s;
    font-weight: 600;
    &:hover{
      transform:  rotateX(47deg) rotateY(-4deg) rotateZ(23deg) scale(1.1);
      color: black;
      font-weight: bolder;
      letter-spacing: 1px;
      color: white;




    }

    @media (min-width:0px) and (max-width: 600px) {
      width: auto;
  }
  
`

const ViewButtonWrapper = styled.div`
  
`

const ViewButton = styled.button`
    width: 100px;
    padding:10px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: transparent;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white;
    color: #0d1644;

    margin: 10px;
    cursor: pointer;
    transition: all 0.4s;
    font-size: 15px;
    &:hover{
      transform: scale(1.1);
      color: white;
    }

`
const ShorMoreButton = styled.button`
    padding:15px 15px;
    width: 250px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: transparent;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white;
    margin: 10px;
    cursor: pointer;
    transition: all 0.4s;
    font-size: 20px;
    font-weight: bolder;
    letter-spacing: 1px;

`

const Show = styled.div`
  width: 100%;
  background-image: linear-gradient( 292.9deg, rgba(254,105,241,1) 28.8%, rgba(182,44,248,1) 70.4% );
  display:flex;
  align-items:center;
  justify-content:center;

`



const ProjectHeading = styled.h1`
  font-size: 1.8em;
  color: white;
  margin: 5px;
  text-align: center;
  letter-spacing: 1px;
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
  /* color: #0d1644; */
  letter-spacing: 1px;
  filter: drop-shadow(none);
  margin: 5px;
  @media (min-width:0px) and (max-width: 600px) {
    font-size: 15px;
  }

`

const ProjectNumber = styled.h1`
    font-size: 100px;
    color: rgba(255, 255, 255, 0.08);
    position: absolute;
    right: 10px;
    top: 0;
`

const Heading = styled.h1`
    position: absolute;
    top: 10px;
    left: 5%;
    font-size: 2.5em;
    padding: 0 20px;
    color: #333;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    z-index: 1;
    color: white;
`

const Project = ({ theme }) => {

  const [showMore, setShowMore] = useState(3);

  const LoadMore = () => {
    console.log("loaded")
    console.log(showMore)
    setShowMore(showMore + 4);
  }

  const Showless = () => {
    setShowMore(4);
  }



  return (
    <div style={{ position: "relative" }}>
      <Heading>Projects</Heading>

      {showMore > 0 && <ProjectCard
        number="17"
        theme={theme}
        image={netflixClone}
        title="Netflix Clone (react)"
        text="This is a React application i made it recently in this i have also use TMDB movies api for showing movies poster"
        TechUsed={['React', 'CSS', 'Vanilla-Tilt', 'Styled-Components','TMDB API']}
        siteLink="https://netflixx-react.netlify.app/"
        codeLink="https://github1s.com/Gaurav-r-a-j/Netflix-clone"
      />}

      {showMore > 0 && <ProjectCard
        number="16"
        theme={theme}
        image={project3}
        title="Full Stack Portfolio"
        text="This was my first big project in which i created my own api and also have authentication functionality."
        TechUsed={['HTML', 'CSS', "REACT", "MONGODB", 'EXPRESS', "MAILTRAP","CLOUDINARY",'JWT']}
        reverse="row-reverse"
        siteLink="https://gaurav-raj-portfolio.herokuapp.com/"
        codeLink="https://github1s.com/Gaurav-r-a-j/New-Mern-Stack-portfolio"

      />}


      {showMore > 0 && <ProjectCard
        number="15"
        theme={theme}
        image={spotifyHomepage}
        title="Spotfiy Homepage"
        text="This is a simple landing page of spotify Website that i make just to practice my skills when I learned basic of html and css"
        TechUsed={['HTML', 'CSS']}
        siteLink="https://gaurav-r-a-j.github.io/spotify-homepage/"
        codeLink="https://github1s.com/Gaurav-r-a-j/spotify-homepage"
      />}

      {showMore > 0 && <ProjectCard
        number="14"
        theme={theme}
        image={teachingApp}
        title="Teaching"
        text="This is my first Website that i make usig html and css, I named it as sstarx"
        TechUsed={['HTML', 'CSS', 'JAVASCRIPT']}
        reverse="row-reverse"
        siteLink="https://gaurav-r-a-j.github.io/Teaching-website/"
        codeLink="https://github1s.com/Gaurav-r-a-j/Teaching-website"
      />
      }

      {showMore > 4 && <ProjectCard
        number="13"
        theme={theme}
        image={facebookClone}
        title="Facebook Clone"
        text="This is just a simple facebook clone I made this in the beginning of my journey by watching a tutorial but i got to learn many things after this tutorial like how we can make a reusable class reusable items and many more"
        TechUsed={['HTML', 'CSS', 'JAVASCRIPT']}
        siteLink="https://gaurav-r-a-j.github.io/Facebook-clone/"
        codeLink="https://github1s.com/Gaurav-r-a-j/Facebook-clone"
      />
      }

      {showMore > 4 && <ProjectCard
        number="12"
        theme={theme}
        image={portfolio2}
        title="Portfolio Website"
        text="This is a simple one page portfolio website Website that i make usig html and css and a little bit of javascript for dark mode functinality"
        TechUsed={['HTML', 'CSS', 'JAVASCRIPT']}
        reverse="row-reverse"
        siteLink="https://gaurav-r-a-j.github.io/portfolio1/"
        codeLink="https://github1s.com/Gaurav-r-a-j/portfolio1"

      />}

      {showMore > 4 && <ProjectCard
        number="11"
        theme={theme}
        image={notesapp}
        title="Notes App"
        text="This is another simple website where use can add some note  or say a simple To do list app"
        TechUsed={['HTML', 'CSS', 'JAVASCRIPT']}
        siteLink="https://gaurav-r-a-j.github.io/Notes-app/"
        codeLink="https://github1s.com/Gaurav-r-a-j/Notes-app"
      />}

      {showMore > 4 && <ProjectCard
        number="10"
        theme={theme}
        image={chemvigyan}
        title="Chemvigyan"
        text="This is my first website that i made for some client at that time I dont have any backend know ledge but I have learnde Wordpress before so i made it using wordpress"
        TechUsed={['Wordpress']}
        reverse="row-reverse"
        siteLink="https://chemvigyan.com/"
        codeLink="https://chemvigyan.com/"
      />}

      {showMore > 8 && <ProjectCard
        number="09"
        theme={theme}
        image={tier3wale}
        title="Tier3wale"
        text="This is another wordpress website that i made it for our youtube channel in starting it's also on wordpress as at time my semester was coming and i don't have enough time so i choose wordpress"
        TechUsed={['Wordpress']}
        siteLink="http://tier3wale.me/"
        codeLink="http://tier3wale.me/"

      />}

      {showMore > 8 && <ProjectCard
        number="08"
        theme={theme}
        image={myntraClone}
        title="Myntra Homepage"
        text="This is a simple myntra clone that i made during my learning to test my learning progress"
        TechUsed={['HTML', "CSS"]}
        reverse="row-reverse"
        siteLink="https://gaurav-r-a-j.github.io/Myntra-clone/"
        codeLink="https://github1s.com/Gaurav-r-a-j/Myntra-clone"

      />}

      {showMore > 8 && <ProjectCard
        number="07"
        theme={theme}
        image={chatapp}
        title="Chat App"
        text="This is my first messaging application that i learned when i was learning php language i learnd my things from it. Due to some hosting issues i am unable to uplaod it backend it's only frontend here"
        TechUsed={['HTML', "CSS", 'JAVASCRIPT']}
        siteLink="https://gaurav-r-a-j.github.io/Chat-app/"
        codeLink="https://github1s.com/Gaurav-r-a-j/Chat-app"

      />}


      {showMore > 8 && <ProjectCard
        number="06"
        theme={theme}
        image={spotify}
        title="Spotfiy Music"
        text="This is a simple music application app of say a spotify clone that i made during my learning process to enchance my javascript concepts"
        TechUsed={['HTML', "CSS", 'JAVASCRIPT']}
        reverse="row-reverse"
        siteLink="https://gaurav-r-a-j.github.io/Spotify-clone/"
        codeLink="https://github1s.com/Gaurav-r-a-j/Spotify-clone"

      />}


      {showMore > 12 && <ProjectCard
        number="05"
        theme={theme}
        image={textutils}
        title="Textutils"
        text="This is my React app that i made when i started learning React."
        TechUsed={['REACT', 'BOOTSTRAP', 'JAVASCRIPT']}
        siteLink="https://my-textutils1.netlify.app/"
        codeLink=""
      />}


      {showMore > 12 && <ProjectCard
        number="04"
        theme={theme}
        image={postmaster}
        title="Textutils"
        text="This is s simple application to send get and post request, I made it to inhance my fetch api concept at that time."
        TechUsed={['BOOTSTRAP', 'JAVASCRIPT', 'PRETTIER']}
        reverse="row-reverse"
        siteLink="https://gaurav-r-a-j.github.io/Api-request-app/"
        codeLink="https://github1s.com/Gaurav-r-a-j/Api-request-app"

      />}

      {showMore > 12 && <ProjectCard
        number="03"
        theme={theme}
        image={idicuss}
        title="iDiscuss"
        text="This is my first fully backend php website in which i have added login functionality , search functionality and many thing I learnd it from Codewithharry yt channel"
        TechUsed={['BOOTSTRAP', 'PHP', 'MYSQL']}
        siteLink="http://idiscuss.lovestoblog.com/index.php"
        codeLink="http://idiscuss.lovestoblog.com/index.php"

      />}

      {showMore > 12 && <ProjectCard
        number="02"
        theme={theme}
        image={portfolio1}
        title="My first Portfolio"
        text="I created this from a tutorial available on youtube"
        TechUsed={['HTML', 'CSS']}
        reverse="row-reverse"
        siteLink="https://sstarx.in/portfolio.html"
        codeLink="https://github1s.com/Gaurav-r-a-j/sstarx.github.io/blob/main/portfolio.html"


      />}

      {showMore > 14 && <ProjectCard
        number="01"
        theme={theme}
        image={sstarx}
        title="SSTARX "
        text="My first Website after learning html and css and at that time I can proudly say that i have made this website with my own without watching any tutorial or else and it's my first website from where my journey starts so it's always be a special for me I named it sstarx."
        TechUsed={['HTML', 'CSS']}
        siteLink="https://sstarx.in/"
        codeLink="https://github1s.com/Gaurav-r-a-j/sstarx.github.io"
      />}




      <Show style={{ background: `${theme}` }}>
        <ShorMoreButton onClick={() => LoadMore()}>Load More Projects</ShorMoreButton>
        {showMore > 3 && <ShorMoreButton onClick={() => Showless()}>Show less</ShorMoreButton>}
      </Show>
    </div>
  )
}



export const ProjectCard = ({ theme, number, reverse, image, title, text, TechUsed, codeLink, siteLink }) => {
  const black = { background: `${theme}` };
  // TechUsed = new Array(TechUsed);
  // console.log(TechUsed)
  const Tech = TechUsed;
  // console.log(TechUsed)
  return (
    <ProjectContainer id='projects' style={{ ...black, flexDirection: reverse }}>
      <ProjectDemo>
        <ProjectNumber>{number}</ProjectNumber>
        <ProjectDemoImage src={image} />
      </ProjectDemo>
      <AboutProject>
        <ProjectHeading>{title}</ProjectHeading>
        <ProjectText>{text}</ProjectText>
        <Technologies>

          {

            Tech !== undefined && Tech.map((item, index) => {
              return <TechButton key={index}>{item}</TechButton>
            })
          }

        </Technologies>
        <ViewButtonWrapper>
          <a href={siteLink} target="blank" title='visit site'><ViewButton>View Live</ViewButton></a>
          <a href={codeLink} target="blank" title='view code'><ViewButton>View Code</ViewButton></a>
        </ViewButtonWrapper>
      </AboutProject>
    </ProjectContainer>
  )
}


export default Project