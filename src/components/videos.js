import React from "react";
import { Row, Col,Card, CardImg,Container, CardText, CardBody,Button } from "reactstrap";
import "./videos.css";
import VideoPlayer from 'react-video-js-player';

import despacito from './videoslist/XiaoYing.mp4';
import conn from './videoslist/con9.jpg'




function Videos() {

  const videoSrc = despacito;
  const poster=conn;
  return (
    <div className='full-body'>
      <Container fluid={true}>
    <Row className='scroll'>
        <Col lg='12' xs='12' className='anime-name-div'>
          <span className='name-of-anime'>Black clover</span>
          <span className='name-of-anime'>GOH</span>
          <span className='name-of-anime'>Death Note</span> 
          <span className='name-of-anime'>Bleach</span>
          <span className='name-of-anime'>Fairy Tail</span>
          <span className='name-of-anime'>Shinigami</span> 
        </Col>
        <Col lg='8' xs='12' className='main-video-div'>
          <span style={{width:'100%'}}>
        <VideoPlayer src={videoSrc} poster={poster}  height='420' className='sizing' />
        
        </span>
        <div>
          <b><p className='video-title'>Hello everyone</p></b><br /><br />
          <p className='video-views-likes'>45,300 views . 18-Jul-2020</p>
        </div>
        <div>
         
          <span className="description"></span>
        </div>
        </Col>
        <Col lg='4' xs='12' className='suggestion-div' >
          <ul>
            <li>
              <h5 style={{textAlign:'left'}}>Suggestions</h5>
            </li>
            <li>
              <Row>
                <Col lg='5'><img src={conn} height='100'></img></Col>
                <Col lg='7'>
                <span style={{textAlign:'left',float:'left'}}><b><p>Anime is Life</p> </b><br />
              <p>ansar hussain</p><br />
              <p>130l views . 3 months ago</p><br />
              </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg='5'><img src={conn} height='100'></img></Col>
                <Col lg='7'>
                <span style={{textAlign:'left',float:'left'}}><b><p>Anime is Life</p> </b><br />
              <p>ansar hussain</p><br />
              <p>130l views . 3 months ago</p><br />
              </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg='5'><img src={conn} height='100'></img></Col>
                <Col lg='7'>
                <span style={{textAlign:'left',float:'left'}}><b><p>Anime is Life</p> </b><br />
              <p>ansar hussain</p><br />
              <p>130l views . 3 months ago</p><br />
              </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg='5'><img src={conn} height='100'></img></Col>
                <Col lg='7'>
                <span style={{textAlign:'left',float:'left'}}><b><p>Anime is Life</p> </b><br />
              <p>ansar hussain</p><br />
              <p>130l views . 3 months ago</p><br />
              </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg='5'><img src={conn} height='100'></img></Col>
                <Col lg='7'>
                <span style={{textAlign:'left',float:'left'}}><b><p>Anime is Life</p> </b><br />
              <p>ansar hussain</p><br />
              <p>130l views . 3 months ago</p><br />
              </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col lg='5'><img src={conn} height='100'></img></Col>
                <Col lg='7'>
                <span style={{textAlign:'left',float:'left'}}><b><p>Anime is Life</p> </b><br />
              <p>ansar hussain</p><br />
              <p>130l views . 3 months ago</p><br />
              </span>
                </Col>
              </Row>
            </li>
        
         
          </ul>
        </Col>
    </Row>
    </Container>
    </div>
  );
}

export default Videos;
