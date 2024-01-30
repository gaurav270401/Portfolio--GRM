import { styled,Box, Typography, ListItem,css } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { animateScroll } from "react-scroll";

const External=styled("div")`
    font-size: 16px;
    background: #000000;
    padding: 7em 0;
    z-index: 0;

    
`
const Box1=styled(Box) (({ theme }) => css`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 2.5rem;
    margin-left: 2.5rem;

    @media screen and (max-width: 480px){
      padding-right: 5px;
    padding-left: 5px;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
        padding-right: 10px;
      padding-left: 10px;
      margin-right: 1.5rem;
      margin-left: 1.5rem;
    }
    @media (min-width: 768px) and (max-width: 1024px){
      padding-right: 10px;
      padding-left: 10px;
      margin-right: 1.5rem;
      margin-left: 1.5rem;
        }

   
`);
const Box2=styled(Grid)(({ theme }) => css`
    margin-bottom: 3rem;
    display:flex;
    align-items:top;
    justify-content:left;
    text-align:center;
    @media screen and (max-width: 480px){
      margin-bottom: 3rem;
    display:flex;
    flex-direction:column;
    align-items:top;
    justify-content:left;
    text-align:left;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
      display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(195px, 1rem)
    );
    }

    @media (min-width: 768px) and (max-width: 1024px){
      display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(220px, 1rem)
    );
        }

        ${'' /* @media (min-width: 1025px) and (max-width: 1280px){
      display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(220px, 1rem)
    );
        } */}
`);

const Grid1=styled(Grid)(({ theme }) => css`
   width:25%;
   padding-right: 25px;
    padding-left: 25px;
    position: relative;

    @media screen and (max-width: 480px){
      width:100%;
   padding-right: 25px;
    padding-left: 25px;
    position: relative;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
      width:100%;
    padding-right: 10px;
    padding-left: 10px;
    position: relative;
    }
    @media (min-width: 768px) and (max-width: 1024px){
      width:100%;
    padding-right: 10px;
    padding-left: 10px;
    position: relative;
    margin-bottom:10px;
        }
        @media (min-width:1025px) and (max-width: 1280px){
         
    padding-right: 0px;
    padding-left: 0px;
    position: relative;
    margin-bottom:10px;
        }

    
`);
const Text=styled(Typography)(({ theme }) => css`
    color: #fff;
    margin-bottom: 40px;
    font-size: 22px;
    font-weight: 600;
    display:flex;
    justify-content:center;
    text-align:justify;

    @media screen and (max-width: 480px){
      color: #fff;
    margin-bottom: 40px;
    font-size: 22px;
    font-weight: 600;
    display:flex;
    justify-content:left;
    text-align:justify;
    }

    

`);

const Para=styled(Typography)`
    color: rgba(255, 255, 255, 0.7);
    text-align:justify;
`
const Item=styled(ListItem)(({ theme }) => css`
    color: rgba(255, 255, 255, 0.7);
    @media screen and (max-width: 480px){
      
  
      padding:10px 0;
      text-align:left;
      
    }
    
    @media screen and (min-width: 481px) and (max-width: 767px) {
      padding:10px 0;
      text-align:left;
    }

    @media (min-width: 768px) and (max-width: 1024px){
      padding:10px 0;
      text-align:justify;
        }
    
    
`);

const Section=styled(Typography)(({ theme }) => css`
    width:0%;
    margin: 0 auto;
    cursor:pointer;
    text-align:left;
    @media screen and (max-width: 480px){
      width:0%;
      margin: 0 10px;
      text-align:left;
      cursor:pointer;
    },
`);
const Section1=styled(Typography)`
    margin-left: 40px;
    cursor:pointer;
    @media screen and (max-width: 480px){
      width:100%;
      margin: 0 10px;
      text-align:left;
      align-items:left;
      cursor:pointer;
    },
`;
const Box3 =styled(Box)(({ theme }) => css`
     width: 50%;
    margin: 0 auto;
    text-indent:50%;
    @media screen and (max-width: 480px){
      width: 100%;
      margin: 0 0;
      text-indent:0%;
    },
   
`);
const Box4 =styled(Box)(({ theme }) => css`
     ${'' /* width: 50%; */}
    ${'' /* margin: 0 auto; */}
    ${'' /* text-indent:50%; */}
    margin-left:25px;
    @media screen and (max-width: 480px){
      width: 100%;
      margin-left:0px;
    },
`);

const Arrow=styled(ArrowRightAltIcon)`
    text-align:left;
    color: rgba(255, 255, 255, 0.7);
   
`;
const Loc=styled(LocationOnIcon)`
    color: white;
   
`;
const Phone=styled(PhoneIcon)`
    color: rgba(255, 255, 255, 0.7);
   
`;
const Email=styled(EmailIcon)`
    color: rgba(255, 255, 255, 0.7);
   
`;
const SocialIcons = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const IconLink = styled("a")`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease-in-out;
 
  &:hover {
    color: #1a2eab;
  }
`;
const IconLink1 = styled("a")`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease-in-out;


  &:hover {
    color: #1a2eab;
  }
`;





const Footer = ({homeRef,aboutRef,resumeRef,servicesRef,projectsRef,contactsRef}) =>{
    const linkedinUrl = "https://www.linkedin.com/in/gauravmekhe27/";
    const githubUrl = "https://github.com/gaurav270401";
    
   
    const scrollToHome = () => {
        animateScroll.scrollTo(homeRef.current.offsetTop, {
          duration: 800,  // Adjust the duration as needed
          smooth: "easeInOutQuad",  // Use easeInOutQuad or your preferred easing function
        });
      };
     
      const scrollToAbout = () => {
        animateScroll.scrollTo(aboutRef.current.offsetTop, {
          duration: 800,  // Adjust the duration as needed
          smooth: "easeInOutQuad",  // Use easeInOutQuad or your preferred easing function
        });
      };
    
    
      const scrollToServices = () => {
        animateScroll.scrollTo(servicesRef.current.offsetTop, {
          duration: 800,  // Adjust the duration as needed
          smooth: "easeInOutQuad",  // Use easeInOutQuad or your preferred easing function
        });
      };
    
      const scrollToProjects = () => {
        animateScroll.scrollTo(projectsRef.current.offsetTop, {
          duration: 800,  // Adjust the duration as needed
          smooth: "easeInOutQuad",  // Use easeInOutQuad or your preferred easing function
        });
      };
    
      const scrollToContacts = () => {
        animateScroll.scrollTo(contactsRef.current.offsetTop, {
          duration: 800,  // Adjust the duration as needed
          smooth: "easeInOutQuad",  // Use easeInOutQuad or your preferred easing function
        });
      };

    return(
    <External>
        <Box1>
            <Box2 container spacing={4}>
                <Grid1 >
                    <Text>About</Text>
                    <Para>Skilled software engineer in C++, DSA and full-stack web development, known for impactful projects and coding competition success.</Para>
                            <SocialIcons>
                                <IconLink href={linkedinUrl} target="_blank">
                                    <LinkedInIcon />
                                </IconLink>
                                <IconLink1 href={githubUrl} target="_blank">
                                    <GitHubIcon />
                                </IconLink1>
                            </SocialIcons>
                        </Grid1>
                        <Grid1 >
                    <Text>Links</Text>
                    <Box3>
                        <Item><Arrow/>
                        <Section onClick={scrollToHome}>Home</Section></Item>
                        <Item><Arrow/>
                        <Section onClick={scrollToAbout}>About</Section></Item>
                        <Item><Arrow/>
                        <Section onClick={scrollToServices}>Services</Section></Item>
                        <Item><Arrow/>
                        <Section onClick={scrollToProjects}>Projects</Section></Item>
                        <Item><Arrow/>
                        <Section onClick={scrollToContacts}>Contact</Section></Item>
                    </Box3>
                    
                </Grid1>
                <Grid1 >
                <Text>Services</Text>
                <Box4>
                        <Item><Arrow/>
                        <Section1 onClick={scrollToServices}>Software Development</Section1></Item>
                        <Item><Arrow/>
                        <Section1 onClick={scrollToServices}>Full-Stack Development</Section1></Item>
                        <Item><Arrow/>
                        <Section1 onClick={scrollToServices}>Web Development</Section1></Item>
                    </Box4>
                </Grid1>
                <Grid1 >
                    <Text>Contact Me</Text>
                    <Box4>
                        <Item><Loc/>
                        <Section1>Nashik,Maharashtra,India</Section1></Item>
                        <Item><Phone/>
                        <Section1>+918308744291</Section1></Item>
                        <Item><Email/>
                        <Section1>gauravmekhe078@gmail.com</Section1></Item>
                    </Box4>
                </Grid1>
            </Box2>
           <Typography color ="rgba(255, 255, 255, 0.7)" textAlign="center">This is made with <FavoriteIcon/> by Gaurav Mekhe</Typography>
        </Box1>
    </External>
    );
}
export default Footer;