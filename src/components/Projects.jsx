
import { Box,styled,css} from "@mui/material";
import ActionAreaCard from "./card";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

const External=styled("div")`
    background-color: #fafafa;
    padding-bottom: 2em;
    padding-top:2em;
`
const Box1=styled(Box)(({ theme }) => css`
   text-align:center;
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
       
        display:flex;
        flex-direction:column;
        margin-bottom:5px;
        margin-top:5px;
   
    }
    @media (min-width: 768px) and (max-width: 1024px){
        flex-wrap: wrap; 
        margin-right: 1rem;
        margin-left: 1rem;  
    }
        @media (min-width:1025px) and (max-width: 1280px){
         
    ${'' /* padding-right: 0px;
    padding-left: 0px;
    position: relative;
    margin-bottom:10px; */}
        }
`);
const ActionAreaCardContainer = styled(Box)(({ theme }) => css`
    flex: 0;
    max-width: 400px;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
    @media screen and (max-width: 480px){
       
        width:100%;
        display:flex;
        flex-direction:column;
      
        margin-top:5px;
        margin-bottom:5px;
        align-items:center;
        justify-content:center;
        text-align:center;
    } 

    @media screen and (min-width: 481px) and (max-width: 767px) {
       
        display:flex;
        flex-direction:column;
        
        margin-top:10px;
        margin-bottom:10px;
        align-items:center;
        ${'' /* height:238px; */}
        justify-content:center;
    }
   
`);


const Projects = ({projectsRef}) =>{
    useEffect(() => {
        // Check if contactsRef is available before scrolling
        if (window.scrollY>=projectsRef.current.offsetTop && projectsRef && projectsRef.current) {
            animateScroll.scrollTo(projectsRef.current.offsetTop, {
                duration: 1000,
                smooth: "easeInOutQuad",
            });
        }
    }, []);
 
    return(
        <External ref={projectsRef}>
        <Box1 >
            <Heading>My Projects</Heading>
            <CardBox>
            <ActionAreaCardContainer>
                        <ActionAreaCard githubUrl="https://github.com/gaurav270401/BlogWebApp.git" image="AllTunedIn.JPG" alt="AllTunedIn" Title="AllTunedIn-Blog Website" />
                    </ActionAreaCardContainer>
                    <ActionAreaCardContainer>
                        <ActionAreaCard   image="Mobile.JPG" githubUrl="https://github.com/gaurav270401/Mobile_Ordering_App.git" websiteUrl="https://mobile-ordering-app-hhsm.vercel.app/"  alt="Mobile Ordering App Clone" Title="Mobile Ordering App Clone" />
                    </ActionAreaCardContainer>
                    <ActionAreaCardContainer>
                        <ActionAreaCard githubUrl="https://github.com/gaurav270401/CRUD-WebApp.git" websiteUrl="https://webapp-crud-091826.netlify.app/" image="CRUD.JPG" alt="CRUD" Title="CRUD App" />
                    </ActionAreaCardContainer>
                {/* </CardBox>
                <CardBox> */}
                    <ActionAreaCardContainer>
                        <ActionAreaCard githubUrl="https://github.com/gaurav270401/Task_Management_App.git" websiteUrl="https://drive.google.com/file/d/1doz9_rEbAbjb9sQ6ZpKfai1AuGxpf16J/view?usp=drive_link" image="Task_management_app.JPG" alt="Task Management App" Title="Task Management App" />
                    </ActionAreaCardContainer>
                    <ActionAreaCardContainer>
                       
                        <ActionAreaCard githubUrl="https://github.com/gaurav270401/hacker_news.git" websiteUrl="https://hacker-news-387a44.netlify.app/" image="Hacker_News.JPG" alt="HackerNews" Title="HackerNews" />
                    </ActionAreaCardContainer>
                    <ActionAreaCardContainer>
                       
                        <ActionAreaCard githubUrl="https://github.com/gaurav270401/hacker_news.git" websiteUrl="https://hacker-news-387a44.netlify.app/" image="Hacker_News.JPG" alt="HackerNews" Title="HackerNews" />
                    </ActionAreaCardContainer>
            </CardBox>
               
            
        </Box1>
    </External>
    );
}
export default Projects;