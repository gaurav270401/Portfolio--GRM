import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { CardActionArea,css } from '@mui/material';

const StyledCard = styled(Card) (({ theme }) => css`
  margin: 20px 20px;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 480px){
      width:298px;
      display:flex;
      flex-direction:column;
        align-items:center;
        justify-content:center;
        height:350px;
    } 

    @media screen and (min-width: 481px) and (max-width: 767px) {
        width: 120%;
        display:flex;
        flex-direction:column;
        margin-top:10px;
        margin-bottom:10px;
        height:350px;
        ${'' /* justify-content:center; */}
    }
`);

const StyledCardMedia = styled(CardMedia)`
  ${'' /* margin: 10px 0; */}
  object-fit: contain;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
`;

export default function ServiceCard(props) {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          component="img"
          height="180"
          image={props.image}
          alt={props.alt}
        />
        <StyledCardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="Bold">
            {props.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary" margin="10px 0" textAlign="center">
            {props.paragraph}
          </Typography>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}
