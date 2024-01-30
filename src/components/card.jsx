import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography,styled,css} from '@mui/material';
import { CardActionArea } from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";

const IconLink1 = styled("a")`
  text-decoration: none;
  color: black;
  transition: color 0.3s ease-in-out;


  &:hover {
    color: #1a2eab;
  }
  
`;

const Card1=styled(Card)(({ theme }) => css`
    margin:15px 15px;
    width: 340px;
    height:300px;
    @media screen and (max-width: 480px){
      width:100%;
      display:flex;
      flex-direction:column;
   
        padding-right: 15px;
        padding-left: 15px;
        align-items:center;
        justify-content:center;

        height:350px;
    } 

    @media screen and (min-width: 481px) and (max-width: 767px) {
        width: 120%;
        display:flex;
        flex-direction:column;
        padding-right: 40px;
        padding-left: 40px;
        margin-right: 10px;
        margin-left: 10px;
        margin-top:10px;
        margin-bottom:10px;
        height:350px;
        ${'' /* justify-content:center; */}
    }
    @media (min-width: 768px) and (max-width: 1024px){
        ${'' /* width:50%; */}
        width:300px;
        height:282.6px;
        display:flex;
        flex-direction:column;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 20p;
        margin-left: 20px;
        margin-top:10px;
        margin-bottom:10px;
 
        justify-content:center;
        }
`);

const Card2=styled(CardActionArea)(({ theme }) => css`
      ${'' /* @media screen and (max-width: 480px){
      width:100%;
      display:flex;
      flex-direction:column;
      padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        margin-top:10px;
        margin-bottom:10px;
        align-items:center;
        justify-content:center;
        text-align:center;
        height:100%;
    }  */}
`);


const Video=styled(CardMedia)(({ theme }) => css`
    object-fit:contain;
    box-shadow:box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor:pointer;
  
    @media screen and (min-width: 481px) and (max-width: 767px) {
      width:100%;
       height:220px;
       display:flex;
       align-items:center;
       justify-content:center;
       text-align:center;
    }
`);
export default function ActionAreaCard(props) {
    const handleVideoClick = () => {
            window.open(props.websiteUrl, '_blank');
      };

  return (
    <Card1>
      <Card2>
          <Video
            component="img"
            height="180"
            src={`/${props.image}`}
            alt={props.alt}
            onClick={handleVideoClick}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Title}
          </Typography>
          <IconLink1 href={props.githubUrl} target="_blank">
            <GitHubIcon />
          </IconLink1>
          <Typography variant="body2" color="text.secondary">
            {props.paragraph}
          </Typography>
        </CardContent>
      </Card2>
    </Card1>
  );
}