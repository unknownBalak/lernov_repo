import React, { Component } from 'react'
 import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
import './css/Footer.css'
import instagram from './resources/insta_logo.png';
import twitter from './resources/twitter_logo.png';
import linkedIn from './resources/linkedIn_logo.png';

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
               <Row>
                 <Col  md={4}   className="footer__left"> 
                  <b>Our Blog</b>
                 </Col>
              
                 <Col  md={4} className="footer__middle">
                     <p className='upcoming_event'>UpComing Event</p>
                     <p >Privacy policy</p>
                    <Link to= '/about'> <p>Know us </p></Link>
                 </Col>
                 <Col md={4}  className="footer__right">
                 <h1>Address</h1>
                 <p>Yelehanka, Bangalore (560064)</p>
                 <p>Contact Us: +91 1234 567 899 </p>
                 </Col>
                 
                 </Row>
        <Row className='social__link'>
          <p> <span><a href='#' > <img src={instagram} alt='insta_logo' width="30px" height="30px" /> </a> </span> <span><a href='#' > <img src={twitter}  width="30px" height="30px"/> </a> </span><span><a href='#'> <img src={linkedIn}  width="30px" height="30px"/> </a> </span>  </p>

        </Row>
        </div>
        
        )
    }
}

export default Footer
