
import { Box, Typography, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { saveAs } from "file-saver";
import React, { useRef, useEffect } from "react";
import { animateScroll } from "react-scroll";

const AboutContainer = styled(Box)`

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4em;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 480px){
    flex-direction:column;
    padding: 4em 1em;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
      flex-direction:column;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        padding-left: 1.5em;
        
        }
`;

const AboutContent = styled(Box)`
  max-width: 600px;
  text-align: left;
  @media screen and (max-width: 480px){
    padding-top:2rem;
    }
    @media screen and (min-width: 481px) and (max-width: 767px) {
      padding-top:2rem;
    }
    @media (min-width: 768px) and (max-width: 1024px){
 
      padding-left: 45px;
     
        }

`;

const AboutImage = styled("img")`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Span= styled("span")`
   font-weight: 600;
    color: #000000;
    width: 130px;
`;

const SocialIcons = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const IconLink = styled("a")`
  text-decoration: none;
  color: #1a2eab;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #1a2eab;
  }
`;
const IconLink1 = styled("a")`
  text-decoration: none;
  color: black;
  transition: color 0.3s ease-in-out;


  &:hover {
    color: #1a2eab;
  }
`;

const DownloadButton = styled("button")`
  margin-top: 20px;
  padding: 15px 20px;
  background-color: #3e64ff;
  color: white;
  border: 1px solid #3e64ff;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1a2eab;
  }
`;

const About = ({aboutRef}) => {
  

  useEffect(() => {
    // Check if contactsRef is available before scrolling
    if (window.scrollY>=aboutRef.current.offsetTop && aboutRef && aboutRef.current) {
        animateScroll.scrollTo(aboutRef.current.offsetTop, {
            duration: 1000,
            smooth: "easeInOutQuad",
        });
    }
}, []);


  const name = " Gaurav Rajendra Mekhe";
  const email = " gauravmekhe078@gmail.com";
  const address = " Nashik, Maharashtra";
  const phone = " +91-8308744291";
  const linkedinUrl = "https://www.linkedin.com/in/gauravmekhe27/";
  const githubUrl = "https://github.com/gaurav270401";
  const cvUrl = "Gaurav_Mekhe.pdf";

  const downloadCv = () => {
    saveAs(cvUrl, "Gaurav_Mekhe.pdf");
  };

  return (
    <AboutContainer ref={aboutRef}>
      <AboutImage src="image.jpg" alt="Profile" />
      <AboutContent>
        <Typography variant="h2" fontSize= "50px" fontWeight = "700" marginBottom= "1.5rem">
          About Me
        </Typography>
        <Typography variant="body1" color="#555" marginBottom= "2.5rem" fontStyle="italic" textAlign="justify">
          Highly skilled software development engineer with proficiency in C++,
          DSA, and full-stack web development, showcasing expertise through
          impactful projects and strong performance in coding competitions.
        </Typography>
        <Typography variant="subtitle1" color="#555" marginBottom= "10px">
          <Span >Name:</Span>  
          <span>{name}</span>
        </Typography>
        <Typography variant="subtitle1" color="#555" marginBottom= "10px">
          <Span >Address:</Span>  
          <span>{address}</span>
        </Typography>
        <Typography variant="subtitle1" color="#555" marginBottom= "10px">
          <Span >Email:</Span>  
          <span>{email}</span>
        </Typography>
        <Typography variant="subtitle1" color="#555" marginBottom= "10px">
          <Span >Phone:</Span>  
          <span>{phone}</span>
        </Typography>

        <SocialIcons>
          <IconLink href={linkedinUrl} target="_blank">
            <LinkedInIcon />
          </IconLink>
          <IconLink1 href={githubUrl} target="_blank">
            <GitHubIcon />
          </IconLink1>
        </SocialIcons>
        <DownloadButton onClick={downloadCv}>Download CV</DownloadButton>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
