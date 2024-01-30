import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, ListItem,Typography,styled,css} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useRef,useEffect } from "react";
import { animateScroll } from "react-scroll";

const External=styled("div")`
    background-color: #fafafa;
    padding-top: 4em;
    padding-bottom:2em;
`

const ResumeContainer=styled(Grid)(({ theme }) => css`
    padding-right: 4em;
    padding-left: 7em;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;

    
    @media screen and (max-width: 480px){
     display:flex;
     flex-direction:column;
     padding-right: 1em;
    padding-left: 1em;
    ${'' /* margin-left: auto;
    margin-right: auto; */}
    }
    @media screen and (min-width: 481px) and (max-width: 767px) {
        display:flex;
     flex-direction:column;
     padding-right: 1em;
    padding-left: 1em;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding-right: 3em;
    padding-left:3em;
    }
`);

const Headings=styled(Typography)`
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 30px;
    color: #3e64ff;
`
const IconBox=styled(Box)`
    width: 50px;
    height: 50px;
    background: #3e64ff;
    border-radius: 50%;
    display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
`
const SchoolIcon1=styled(SchoolIcon)`
    color: #fff;
    font-size: 32px;
`;
const CompanyIcon=styled(CorporateFareIcon)`
    color: #fff;
    font-size: 32px;
`;
const Flexing=styled(Box)`
    display:flex;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
`;

const Cflex=styled(Typography)`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 0.2rem;
`
const EdHead =styled(Typography)`
    font-size: 18px;
    font-weight: 700;
    color: #000000;
`;

const TextBox=styled(Box)`
    padding-left: 1rem;
`;

const Date=styled(Typography)`
    font-weight: 700;
    font-size: 16px;
    color: #3e64ff;
`;

const Boxdata=styled(Box)`
    width: 100%;
    margin-bottom: 7em;
`;

const Skillellipse=styled(Box)(({ theme }) => css`
    width:100%;
    border-radius:15px;
    height: 50px;
    background: #e4e8ff;
    display: flex;
    align-items: center;
    @media screen and (max-width: 480px){
    height: 100%;
    flex-direction:column;
    margin:10px 10px;
    text-align:center;
    }
    @media screen and (min-width: 481px) and (max-width: 767px) {
        flex:wrap;
        height: 100%;
    ${'' /* flex-direction:column; */}
    margin:10px 10px;
    ${'' /* text-align:center; */}
    }
   ${'' /* justify-content: center; */}
`);

const SkillText=styled(Typography)(({ theme }) => css`
    padding-left:10px;
    font-weight:Bold;
    @media screen and (max-width: 480px){

    margin:10px 10px;

    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
        margin:10px 0px;
    }
`);
const Achievements=styled(EmojiEventsIcon)`
    color: #fff;
    font-size: 32px;
`;

const ListItem1=styled(ListItem)`
    font-weight: 700;
    margin-bottom: 10px;
    cursor: pointer;
    
`;

const LeftColumn = styled(Grid)(({ theme }) => css`
  position: sticky;
  top: 55px;
  height: 100%;
  @media screen and (max-width: 480px){
    height: 100%;
    position: relative;
    top: 0;
    }

 @media screen and (min-width: 481px) and (max-width: 767px) {
    height: 100%;
    position: relative;
    top: 0;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        height: 100%;
        position: sticky;
    }
`);

const RightColumn = styled(Grid)(({ theme }) => css`
  overflow-y: auto;
  @media screen and (max-width: 480px){
    
    width: 100%;
    }
    @media screen and (min-width: 481px) and (max-width: 767px) {
        width: 100%;
    }
`);

const Stext=styled(Typography)(({ theme }) => css`

@media screen and (max-width: 480px){
    
    margin-bottom:10px;
    }
    @media screen and (min-width: 481px) and (max-width: 767px){
      margin-left:10px;
      margin-bottom:10px;
      margin-top:10px;
    }
`);

const Resume = ({resumeRef}) =>{
    const Education = useRef(null);
    const Experience = useRef(null);
    const Skills = useRef(null);
    const Achievement = useRef(null);

    const scrolltosection=(elementRef)=>{
        animateScroll.scrollTo(elementRef.current.offsetTop-100, {
            duration: 800,  // Adjust the duration as needed
            smooth: "easeInOutQuad",  // Use easeInOutQuad or your preferred easing function
          });
    }
    useEffect(() => {
        // Check if contactsRef is available before scrolling
        if (window.scrollY>=resumeRef.current.offsetTop && resumeRef && resumeRef.current) {
            animateScroll.scrollTo(resumeRef.current.offsetTop, {
                duration: 1000,
                smooth: "easeInOutQuad",
            });
        }
    }, []);

    return(
        <External ref={resumeRef}>
            <ResumeContainer container spacing={2} >
                    <LeftColumn xs={3} >
                    <ListItem1 onClick={() => scrolltosection(Education)}>Education</ListItem1>
                    <ListItem1 onClick={() => scrolltosection(Experience)}>Experience</ListItem1>
                    <ListItem1 onClick={() => scrolltosection(Skills)}>Skills</ListItem1>
                    <ListItem1 onClick={() => scrolltosection(Achievement)}>Achievements</ListItem1>
                </LeftColumn>
                <RightColumn xs={9}>
                    <Boxdata ref={Education}>
                       <Headings >Education</Headings>
                       <Flexing>
                           <IconBox>
                             <SchoolIcon1/>
                           </IconBox>
                            <TextBox>
                                <Date>May 2023</Date>
                                <Cflex>Vishwakarma Institute of Technology</Cflex>
                                <EdHead>B.Tech in Mechanical Engineering</EdHead>
                                <Typography>Pune,Maharashtra</Typography>
                                <Typography>CGPA: 9.27/10</Typography>
                            </TextBox>
                            
                        </Flexing>

                        <Flexing>
                           <IconBox>
                             <SchoolIcon1/>
                           </IconBox>
                            <TextBox>
                                <Date> Feb 2019</Date>
                                <Cflex>H.P.T Arts and R.Y.K Science College</Cflex>
                                <EdHead>CLASS XII</EdHead>
                                <Typography>Nashik,Maharashtra</Typography>
                                <Typography>75.38%</Typography>
                            </TextBox>  
                        </Flexing>

                        <Flexing>
                           <IconBox>
                             <SchoolIcon1/>
                           </IconBox>
                            <TextBox>
                                <Date>Mar 2016</Date>
                                <Cflex>Pethe Madhyamik Vidyalaya</Cflex>
                                <EdHead>CLASS X</EdHead>
                                <Typography>Nashik,Maharashtra</Typography>
                                <Typography>91.20%</Typography>
                            </TextBox>
                        </Flexing>
                       
                    </Boxdata>
                       
                    <Boxdata ref={Experience}>
                       <Headings >Experience</Headings>
                       <Flexing>
                           <IconBox>
                             <CompanyIcon/>
                           </IconBox>
                            <TextBox>
                                <Date>Aug 2022 - June 2023</Date>
                                <Cflex> Whirlpool | Vishwakarma Institute of Technology</Cflex>
                                <EdHead>Research Intern</EdHead>
                                <Typography marginBottom="0.2rem">Pune,Maharashtra</Typography>
                                <Typography color="#555" textAlign="justify">Applied cold plasma technology with high voltage to activate the water, achieving up to a 3-log reduction in bacteria and microorganisms.
                                Teamed up with 14 members to develop and optimize plasma-activated water systems utilizing skills like DFME and Embedded
                                programming.</Typography>
                            </TextBox>
                            
                        </Flexing>
                    </Boxdata>


                    <Boxdata ref={Skills}>
                       <Headings >Skills</Headings>
                       <Flexing>
                           <Skillellipse>
                             <SkillText>
                                Programming Languages: 
                             </SkillText>
                                <Stext paddingLeft="10px">C, C++, Python, SQL, JavaScript</Stext>
                           </Skillellipse>  
                        </Flexing>
                        <Flexing>
                           <Skillellipse>
                             <SkillText>
                                Frontend: 
                             </SkillText>
                                <Stext paddingLeft="10px">HTML, CSS, JavaScript, Bootstrap,
                                jQuery, ES6, ReactJs, Material-UI</Stext>
                           </Skillellipse>  
                        </Flexing>
                        <Flexing>
                           <Skillellipse>
                             <SkillText>
                                Backend: 
                             </SkillText>
                                <Stext paddingLeft="10px">NodeJs, ExpressJs</Stext>
                           </Skillellipse>  
                        </Flexing>
                        <Flexing>
                           <Skillellipse>
                             <SkillText>
                                Database: 
                             </SkillText>
                                <Stext paddingLeft="10px">MongoDB, MySQL</Stext>
                           </Skillellipse>  
                        </Flexing>
                        <Flexing>
                           <Skillellipse>
                             <SkillText>
                                Familiar: 
                             </SkillText>
                                <Stext paddingLeft="10px">Git, VS Code, PHP, Streamlit, NLP</Stext>
                           </Skillellipse>  
                        </Flexing>
                    </Boxdata>
                    <Boxdata ref={Achievement}>
                       <Headings >Achievements</Headings>
                        <Flexing>
                           <IconBox>
                             <Achievements/>
                           </IconBox>
                            <TextBox>
                                <Date>May 2022 - Present</Date>
                                <Cflex>2.5 Star at Leetcode</Cflex>
                                <EdHead> HIGHEST Rating 1667 | Top 15.08% users</EdHead>
                                <Typography color="#555" textAlign="justify"> Global rank 1984 / 19K+ (Top 10%) in Weekly Contest -336</Typography>
                            </TextBox>
                            
                        </Flexing>

                        <Flexing>
                           <IconBox>
                             <Achievements/>
                           </IconBox>
                            <TextBox>
                                <Date>May 2022 - Present</Date>
                                <Cflex>2 Star at Codechef</Cflex>
                                <EdHead> HIGHEST Rating 1576</EdHead>
                                <Typography color="#555" textAlign="justify"> Global rank 200 / 24K+ in Starters 98(12 Jul 2023)</Typography>
                                <Typography color="#555" textAlign="justify"> Global rank 224 / 26K+ in Starters 61(19 Oct 2022)</Typography>
                                <Typography color="#555" textAlign="justify"> Global rank 682 / 19K+ in Starters 87(26 Apr 2023)</Typography>
                            </TextBox>
                            
                        </Flexing>

                        <Flexing>
                           <IconBox>
                             <Achievements/>
                           </IconBox>
                            <TextBox>
                                <Date>2022</Date>
                                <Cflex>Smart India hackathon</Cflex>
                                <Typography marginBottom="0.2rem">Pune,Maharashtra</Typography>
                                <Typography color="#555" textAlign="justify"> Ranked among the top 10 teams out of 84
                                registered in the Intra-college segment</Typography>
                            </TextBox>
                            
                        </Flexing>
                    </Boxdata>
                    
                </RightColumn>
            </ResumeContainer>
        </External>
    
       
    );
}
export default Resume;