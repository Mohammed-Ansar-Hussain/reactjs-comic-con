import React, {useEffect} from 'react';
import './home.css';
import { UncontrolledCarousel } from 'reactstrap';
import {
  Row,
  Col,
  Container,
} from "reactstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

const items = [
  {
    src: 'con2.jpg',
    altText: 'Slide 1',
  
    key: '1'
  },
  {
    src: 'con4.jpg',
   
    key: '2'
  },
  {
    src: 'con11.jpg',

    key: '2'
  }
];

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000});
  }, []);
  return (
   
    <div className="App">
 
      <Container fluid className='full-body-color'>
        
        {/* <Row>
          <Col xs='12' className='header-menu-items'>
            <span className='header-menu'>HOME</span>
            <span className='header-menu'>SHOP</span>
            <span className='header-menu'>VIDEOS</span>
          </Col>
        </Row> */}
        <Row>
          <Col xs='12' lg='12' className='col-slider'>
          <UncontrolledCarousel items={items} />;
          </Col>
          <Col className='title-div'>Welcome to the World of Comics</Col>
        </Row>
        <Row className='comic-description'>
      
          <Col xs='12' lg='6' data-aos='fade-right'>
          <p>
            <span style={{float:'left',fontSize:'30px'}}><b>Comic con:</b></span><br />
            <br />Comic Con India (CCI) is a series of annual comic-based conventions held in India. The first edition was held in New Delhi in 2011 and over the years has expanded to other major cities in India such as Mumbai, Bangalore, Pune, Hyderabad and Ahmadabad. There are annual comic cons now in all these cities. Cumulatively these five cities attract over 200,000 visitors with over 1200 exhibitors. Jatin Varma, the founder of Comic Con India, launched the first comic con in India in Delhi in 2011.[1][2] Since 2014, Comic Con India has been conducted in collaboration with Reed Exhibitions (ReedPOP), the organisers of the New York Comic Con and the MCM London Comic Con.
          </p>
          </Col>
          <Col xs='12' lg='6' data-aos='fade-left'>
          <img src='con9.jpg' height='250' width='500'></img>
          </Col>
       
          
        
        </Row>
        <Row className='images-collection'>
          <Col xs='12' >
          <img src='con8.jpg' width='100%' height='auto'></img>
          </Col>
         
          <Col lg='4' xs='12' data-aos='fade-left'> <img src='con7.jpg' height='250' width='100%'></img></Col>
          <Col lg='4' xs='12' data-aos='fade-left'> <img src='con12.jpg' height='250' width='100%'></img></Col>
          <Col lg='4' xs='12' data-aos='fade-left'> <img src='con14.jpg' height='250' width='100%'></img></Col>
          <Col lg='3' xs='12' data-aos='fade-right'> <img src='anime1.jpg' height='250' width='100%'></img></Col>
          <Col lg='3' xs='12' data-aos='fade-right'> <img src='anime2.jpg' height='250' width='100%'></img></Col>
          <Col lg='3' xs='12' data-aos='fade-right'> <img src='anime1.jpg' height='250' width='100%'></img></Col>
          <Col lg='3' xs='12' data-aos='fade-right'> <img src='anime2.jpg' height='250' width='100%'></img></Col>
        </Row>
        <Row className='images-collection'>
          <h1>
            
          “It’s not dying that you need to be afraid of, it’s never having lived in the first place.” 
          </h1>
        </Row>

        <Row>
          <Col lg='12'>
          <h1>Iron Man</h1>
          <br />
          </Col>
          <Col lg='4'>
          <img src='con10.jpg' height='350' width='100%'></img>
          </Col>
          <Col lg='8'>
            <p style={{fontSize:'22px',color:'white'}}>
            Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe. It was directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, and stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape from captivity by a terrorist group, world famous industrialist and master engineer Tony Stark builds a mechanized suit of armor and becomes the superhero Iron Man.
            </p>
            
            </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
        <Col lg='12'>
          <h1>Captain America</h1>
          <br />
          </Col>
        
          <Col lg='8'>
            <p style={{fontSize:'22px',color:'white'}}>
            Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe. It was directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, and stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape from captivity by a terrorist group, world famous industrialist and master engineer Tony Stark builds a mechanized suit of armor and becomes the superhero Iron Man.
            </p>
            </Col>
            <Col lg='4'>
          <img src='captain1.jpg' height='300' width='100%'></img>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
        <Col lg='12'>
          <h1>Iron Man</h1>
          <br />
          </Col>
          <Col lg='4'>
          <img src='ironman2.jpeg' height='300' width='100%'></img>
          </Col>
          <Col lg='8'>
            <p style={{fontSize:'22px',color:'white'}}>
            Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe. It was directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, and stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape from captivity by a terrorist group, world famous industrialist and master engineer Tony Stark builds a mechanized suit of armor and becomes the superhero Iron Man.
            </p>
            
            </Col>
        </Row>


      </Container>
       
      
     
    </div>
    
  );
}

export default Home;