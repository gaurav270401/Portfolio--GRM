import { Box,Typography,styled,css } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
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
   ${'' /* margin-right: 7rem;
    margin-left: 7rem; */}
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 480px){
        display:flex;
        flex-direction:column;
       
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
       
        display:flex;
        flex-direction:column;
   
    }
    @media (min-width: 768px) and (max-width: 1024px){
        flex-wrap: wrap; 
    }
        @media (min-width:1025px) and (max-width: 1280px){
         
    ${'' /* padding-right: 0px;
    padding-left: 0px;
    position: relative;
    margin-bottom:10px; */}
        }
`);

const Card1=styled(Grid)(({ theme }) => css`
    width:250px;
    height:280px;
    background-color:white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding:0 10px;
    margin-right: 10px;
    margin-left: 10px;
    justify-content:center;
    
    @media screen and (max-width: 480px){
        width: 100%;
        display:flex;
        flex-direction:column;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        margin-top:10px;
        margin-bottom:10px;
        justify-content:center;
    } 

    @media screen and (min-width: 481px) and (max-width: 767px) {
        width: 85%;
        display:flex;
        flex-direction:column;
        padding-right: 20px;
        padding-left: 20px;
        margin-right: 20px;
        margin-left: 20px;
        margin-top:10px;
        margin-bottom:10px;
        height:238px;
        justify-content:center;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        ${'' /* width:50%; */}
        width:330px;
        height:282.6px;
        display:flex;
        flex-direction:column;
        padding-right: 20px;
        padding-left: 20px;
        margin-right: 20p;
        margin-left: 20px;
        margin-top:10px;
        margin-bottom:10px;
 
        justify-content:center;
        }
`);


const IconBox=styled(Box)`
    width: 100px;
    height: 100px;
    background: #3e64ff;
    border-radius: 50%;
    display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
   margin-bottom:15px;
`
const HomeIcon1=styled(HomeIcon)`
    color: #fff;
    font-size: 38px;
`;
const PhoneIcon1=styled(LocalPhoneIcon)`
    color: #fff;
    font-size: 38px;
`;
const EmailIcon1=styled(EmailIcon)`
    color: #fff;
    font-size: 38px;
`;
const WebIcon1=styled(PublicIcon)`
    color: #fff;
    font-size: 38px;
`;

const Text=styled(Typography)`
    margin-top:5 rem;
    margin-bottom:1.5rem;
     font-size: 18px;
    font-weight: 600;
`;

const Links=styled("a")`
 color:#0000FF;
 cursor:pointer;

 &:visited{
    color:#800080;
 }
`

const Contact = ({contactsRef}) =>{
    const gmail="https://gmail.com";
    useEffect(() => {
        // Check if contactsRef is available before scrolling
        if (window.scrollY>=contactsRef.current.offsetTop && contactsRef && contactsRef.current) {
            animateScroll.scrollTo(contactsRef.current.offsetTop, {
                duration: 1000,
                smooth: "easeInOutQuad",
            });
        }
    }, []);
    return(
        <External ref={contactsRef}>
            <Box1 >
                <Heading>Contact Me</Heading>
                <CardBox>
                    <Card1>
                    <Box padding="1.5rem 0" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                      <IconBox>
                             <HomeIcon1/>
                        </IconBox>
                        <Text>Address</Text>
                        <Typography color="#555">Nashik,Maharashtra,India</Typography>
                      </Box>
                    </Card1>
                    <Card1>
                    <Box padding="1.5rem 0" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <IconBox>
                                <PhoneIcon1/>
                            </IconBox>
                            <Text>Contact Number</Text>
                            <Links href="tel://1234567920">+91-8308744291</Links>
                        </Box> 
                    </Card1>
                    <Card1>
                    <Box padding="1.5rem 0" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                            <IconBox>
                                <EmailIcon1/>
                            </IconBox>
                            <Text>Email Address</Text>
                            <Links  href="mailto:info@yoursite.com">gauravmekhe078@gmail.com</Links>
                        </Box>
                    </Card1>
                    <Card1>
                        <Box padding="1.5rem 0" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <IconBox>
                                <WebIcon1/>
                            </IconBox>
                            <Text>Website</Text>
                            <Links href="">portfolio.com</Links>
                        </Box>  
                    </Card1>
                </CardBox>
                   
                
            </Box1>
        </External>
        
     

    );
}
export default Contact;