import './App.css';
import Nav from './components/Nav.js';
import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Image from './static/images/card.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Footer />
    </div>
  );
}
export default App;




 /* <Nav />
      <ListComponent /> */
      /* <Card sx={{Width: "100%"}}>
        <CardMedia
          component="img"
          image={Image}
          alt="Card Photo"
          height="300px"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> */