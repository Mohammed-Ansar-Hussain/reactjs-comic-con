import React from "react";
import { Row, Col,  Card, CardImg,Container, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from "reactstrap";
  import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./shop.css";

import merch1 from './photos/merch1.jpg'
import merch2 from './photos/merch2.jpg'
import merch3 from './photos/merch3.jpg'
import merch4 from './photos/merch4.jpg'
import merch5 from './photos/merch5.jpg'

import tshirt from './photos/tshirt.jpg'
import tshirt1 from './photos/tshirt1.jpg'
import tshirt2 from './photos/tshirt2.jpg'
import tshirt3 from './photos/tshirt3.png'
import tshirt4 from './photos/tshirt4.jpg'
import tshirt5 from './photos/tshirt5.jpg'
import tshirt6 from './photos/tshirt6.jpg'

import cart1 from './photos/cartpic.png'
import cart2 from './photos/cartpic3.png'


const Shop = (props) => {
  return (
    <div>
      <Container>
      <Row>
        <Col lg='9' xs='12' className="shop-items-container">
          <Row>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={merch1} alt="Card image cap" />
        <CardBody>
          <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={merch2} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={merch3} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={merch4} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={merch5} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={tshirt} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={tshirt1} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={tshirt2} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={tshirt3} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={tshirt4} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={tshirt5} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      <Col lg='3'  className='card-body'>
      <Card>
        <CardImg  width="100%" height='180' src={tshirt6} alt="Card image cap" />
        <CardBody>
        <span className='shopping-item-inner-text'>Action Figure</span><br />
          <p  className='shopping-item-inner-text'><b>300.00 Rs</b></p><br />
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </Col>
      </Row>

      </Col>
      <Col lg='3' className='shopping-cart'>
        <span><img className='shopping-cart-pic' src={cart1}></img></span>
      </Col>
  
      </Row>
      </Container>
    </div>
  );
};

export default Shop;
