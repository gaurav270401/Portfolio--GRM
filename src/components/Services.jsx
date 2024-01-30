import { Box,styled,css} from "@mui/material";
import Card from "./Servicecard";
import { useEffect} from "react";
import { animateScroll } from "react-scroll";
import MediaQuery from 'react-responsive';

const External=styled("div")`
    background-color: #fafafa;
    padding-bottom: 2em;
    padding-top:2em;
`
const Box1=styled(Box)(({ theme }) => css`
   text-align:center;
   ${'' /* background-color:#e4e8ff; */}
   ${'' /* margin: 0 1rem; */}
   @media screen and (max-width: 480px){
        ${'' /* width: 100%; */}
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    }

`);

const Heading = styled("h2")`
    font-size: 50px;
    font-weight: 700;
`;

const CardBox=styled(Box)(({ theme }) => css`
   ${'' /* width:100%; */}
   margin-bottom: 3rem;
   margin-right: 7rem;
    margin-left: 7rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap: wrap; 
    @media screen and (max-width: 480px){
        ${'' /* width:100%; */}
        display:flex;
        flex-direction:column;
        margin-bottom:5px;
        margin-top:5px;
        margin-right: 1rem;
        margin-left: 1rem;
        align-items:center;
        justify-content:center;
        text-align:center;
    }
    
    @media screen and (min-width: 481px) and (max-width: 767px) {
        margin-right: 1rem;
    margin-left: 1rem;
       margin-bottom:5px;
       margin-top:5px;
       align-items:center;
      
     
   }

   @media (min-width: 768px) and (max-width: 1024px){
        flex-wrap: wrap; 
        margin-right: 1rem;
        margin-left: 1rem;  
    }
`);

const Services = ({servicesRef}) =>{
 
    useEffect(() => {
        // Check if contactsRef is available before scrolling
        if (window.scrollY>=servicesRef.current.offsetTop && servicesRef && servicesRef.current) {
            animateScroll.scrollTo(servicesRef.current.offsetTop, {
                duration: 1000,
                smooth: "easeInOutQuad",
            });
        }
    }, []);
    return(
        <External ref={servicesRef}>
        <Box1 >
            <Heading>My Services</Heading>
            <CardBox>
                <Card image="mern-stack.png" alt="MERN" Title="Full Stack Development" paragraph="Building web applications using MongoDB, Express.js, React, and Node.js."/>
                <Card  image="React-MUI.png" alt="Frontend" Title="FrontEnd Development" paragraph="Creating modern and responsive user interfaces using React and Material-UI."/>
                <Card image="MENJ.webp" alt="Backend" Title="Backend Development" paragraph="Developing server-side logic and APIs using MongoDB, Express.js, Node.js and JavaScript."/>
                <Card image="webd.png" alt="Web Development" Title="Web Development" paragraph="Designing and developing websites using a combination of HTML, CSS, JavaScript, jQuery, and Bootstrap."/>
                {/* <ActionAreaCard image={Img} alt="Movie Recommendation System" Title="Movie Recommendation System"/> */}
                <Card image="C++.png" alt="C++" Title="Problem Solving" paragraph="Solving algorithmic problems using Data Structures and Algorithms (DSA) with the C++ programming language"/>
            </CardBox>
               
            
        </Box1>
    </External>
    );
}
export default Services;