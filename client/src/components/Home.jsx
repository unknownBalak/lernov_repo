import React, { Component } from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import Description from './Description'; 
import './css/Home.css'
import Cards from './Cards';
import img1 from './resources/2.jpg'
import img2 from './resources/3.jpg'
import backgroundimg from './resources/1(headway).jpg'
class Home extends Component {
    
    render() {
        return (
            <>
            <div>
             <img src={backgroundimg} className='background-img' alt="lernov-background" />
               
            </div>
        <Container>
            <Row className='home'>
                <Col className='background-img1 'xs={12}  md={7}  >
   
                </Col>
                <Col className='banner__info'xs={12} md={4}>
    <h4>Our primary vision is <strong style={{color:"black"}} >Education to Everyone </strong> and we as a StartUp
are keen to provide a core concept with webinar and live workshops. 
We choose students to give them world-class facilities. </h4>
       <p>We believe into <strong>Education to Everyone People</strong>. And we as a eduTech StartUp believe in this Slogan.   </p>
                </Col>
            </Row>
        </Container>


<Container className=' lernov__events' id='events'> 
     <h1  >Our Events </h1>
<div className='lernov__card'>
  <Cards src={img1}/>   
   <Cards src={img2}/>   
   <Cards src={img1}/>  
   <Cards src={img2}/>  
    </div>
    </Container>
<Container className=' lernov__instructor'> 
     <h1  >Our Instructor </h1>
<div className='lernov__card'>
  <Cards src={img1}/>   
   <Cards src={img1}/>   
   <Cards src={img1}/>  
   <Cards src={img1}/>  
    </div>

     <Description />
    </Container>

</>
        )
    }
}

export default Home
