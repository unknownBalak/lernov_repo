import React from 'react'
import {Row,Col, Container } from 'react-bootstrap'
import './css/description.css'
const Description = ()=> {
    return (
        <Container className='description' >
            <div className="des__heading">Why Lernov! </div>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <img src="https://media.giphy.com/media/nB9cJ9IGEAUXL60HPK/giphy.gif" alt='logo' /> </Col>
                <Col className='des_imgInfo'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quo, officia sit soluta aliquid saepe quam odit dolorum laboriosam voluptatibus quisquam, consequuntur recusandae? Perferendis dolore facere maiores, laborum et ad!</Col>
            </Row>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <img src="https://media.giphy.com/media/xT5LMMGrLbGAvUoZxK/giphy.gif" alt='logo' width="200px" height="200px"  /> </Col>
                <Col className='des_imgInfo'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quo, officia sit soluta aliquid saepe quam odit dolorum laboriosam voluptatibus quisquam, consequuntur recusandae? Perferendis dolore facere maiores, laborum et ad!</Col>
            </Row>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <img src="https://media.giphy.com/media/l1J9AOL0UP81ULPZ6/giphy.gif" alt='logo'  width="200px" height="200px" /> </Col>
                <Col className='des_imgInfo'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quo, officia sit soluta aliquid saepe quam odit dolorum laboriosam voluptatibus quisquam, consequuntur recusandae? Perferendis dolore facere maiores, laborum et ad!</Col>
            </Row>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <img src="https://media.giphy.com/media/l1J9AOL0UP81ULPZ6/giphy.gif" alt='logo'  width="200px" height="200px" /> </Col>
                <Col className='des_imgInfo'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quo, officia sit soluta aliquid saepe quam odit dolorum laboriosam voluptatibus quisquam, consequuntur recusandae? Perferendis dolore facere maiores, laborum et ad!</Col>
            </Row>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <img src="https://media.giphy.com/media/l1J9AOL0UP81ULPZ6/giphy.gif" alt='logo'  width="200px" height="200px" /> </Col>
                <Col className='des_imgInfo'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quo, officia sit soluta aliquid saepe quam odit dolorum laboriosam voluptatibus quisquam, consequuntur recusandae? Perferendis dolore facere maiores, laborum et ad!</Col>
            </Row>
        </Container>
    )
}

export default Description
