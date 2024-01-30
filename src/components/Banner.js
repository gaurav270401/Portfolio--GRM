import { Box, Typography, styled } from "@mui/material";
import React,{useEffect} from "react";
import { ReactTyped } from "react-typed";
import { animateScroll } from "react-scroll";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between; /* Add space between items */
`;



const CombinedBackground = styled(Box)`
  flex-grow: 1;
  width: 100%;
  background: linear-gradient(to right, #e4e8ff 50%, #fafafa 50%);
  display: flex;
  flex-direction: column; 
  height:auto;
`;

const Midtext = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  height: 100%;
`;


const SubHeading = styled(Typography)`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 800;
  color: #3e64ff;
  letter-spacing: 4px;
`;

const Heading = styled(Typography)`
  font-size: 60px;
  font-weight: 800;
  color: black;

  @media screen and (max-width: 480px){
    font-size: 40px;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
      font-size: 40px;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        padding-left: 1.5em;
        
        }
`;

const BlackText = styled(Typography)`
  color: black;
  font-size: 24px;
  font-weight: 800;
`;

const BlueText = styled(Typography)`
  color: #3e64ff;
  font-size: 24px;
  font-weight: 800;
`;


const Banner = ({homeRef}) => {
  useEffect(() => {
    // Check if contactsRef is available before scrolling
    if (window.scrollY>=homeRef.current.offsetTop && homeRef && homeRef.current) {
        animateScroll.scrollTo(homeRef.current.offsetTop, {
            duration: 1000,
            smooth: "easeInOutQuad",
        });
    }
}, []);


  
  return (
    <Container>
      <CombinedBackground ref={homeRef}>
      
        <Midtext>
          <SubHeading >Hey! I am</SubHeading>
          <Heading >Gaurav Mekhe</Heading>
            <BlackText >I'm a</BlackText>{" "}
            <BlueText>
            <ReactTyped
              strings={["Software Developer.", "Full Stack Developer.", "Web Developer."]}
              typeSpeed={100}
              backSpeed={30}
              loop
            />
            </BlueText>
        </Midtext>
      </CombinedBackground>
    </Container>
  );
};

export default Banner;
