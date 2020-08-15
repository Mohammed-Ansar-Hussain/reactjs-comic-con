import React, {useEffect,useState, prevState} from 'react';
import './App.css';
import { UncontrolledCarousel } from 'reactstrap';
import {
  Row,
  Col,
  Container,
  NavLink,
  Collapse, Button, CardBody, Card ,
} from "reactstrap";
import Shop from './components/shop'
import Videos from './components/videos'
import Home from './components/home'
import {BrowserRouter as Router,Switch,Route, Redirect, Prompt} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { render } from '@testing-library/react';
import {NavDropdown,Nav,Navbar} from 'react-bootstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends React.Component{


  constructor(props){
    super(props);
    this.state={
    loggedin:false,
    modal:false,
    nestedModal:false,
    closeAll:false,
    };
  }

  // const [isOpen, setIsOpen] = useState(false);
  
loginhandle=()=>{
this.setState(prevState => ({loggedin:!prevState.loggedin}))
}

toggle = () => {
  this.setState({modal:!this.state.modal})
}
toggleNested = () => {
  this.setState({nestedModal:!this.state.nestedModal});
  // this.setNestedModal(!this.state.nestedModal);
  // this.setCloseAll(false);
  this.setState({closeAll:false})
}
toggleAll = () => {
  this.setState({nestedModal:!this.state.nestedModal});
  this.setState({modal:false})
  // this.setNestedModal(!this.state.nestedModal);
  // this.setCloseAll(true);
}
  // useEffect(() => {
  //   Aos.init({});
  // }, []);

render() { 
  return (
    <Router>
    <div className="App">
           <Container fluid className='full-body-color'>
        
        <Row>
        <Prompt
            when={!this.state.loggedin}
            message={(location)=>{return location.pathname.startsWith('/user') ? 'Please Log In to Continue' : true}}
            />
         
          <Col lg='12' xs='12'>  
            {/* <Link style={{ textDecoration: 'none', color: 'white'}} to="/"><span className='header-menu'>HOME</span> </Link>
            <Link style={{ textDecoration: 'none', color: 'white'}} to="/user/shop"><span className='header-menu'>SHOP</span></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/user/videos"><span className='header-menu'>VIDEOS</span></Link>
            <i style={{color:'white', fontSize:'20px'}}  onClick={this.loginhandle.bind(this)} class="fa fa-sign-in" aria-hidden="true"> {this.state.loggedin ? 'Log Out' : 'Log -In'}</i>   */}
            
    <Navbar collapseOnSelect expand="lg" bg="navbar-bg" variant="dark" className='navbar-bg'>
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className='navbar-bg'>
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
       <Link style={{ textDecoration: 'none', color: 'white'}} to="/"><span className='header-menu'>HOME</span> </Link>
        <Link style={{ textDecoration: 'none', color: 'white'}} to="/user/shop"><span className='header-menu'>SHOP</span></Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/user/videos"><span className='header-menu'>VIDEOS</span></Link>
    </Nav>
    <Nav>
      {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}

<i style={{color:'white', fontSize:'20px'}}  onClick={this.loginhandle.bind(this)} class="fa fa-sign-in" aria-hidden="true"> {this.state.loggedin ? 'Log Out' : 'Log -In'}</i>   

    </Nav>
  </Navbar.Collapse>
</Navbar>




          </Col> 
   
        </Row>
             </Container>
       
        <Switch>
        <Route path='/' exact component={Home}></Route>
          <Route path='/user/videos' exact render={()=>(this.state.loggedin ? (<Videos />):(<Redirect to='/' />))} />
          <Route path='/user/shop' exact render={()=>(this.state.loggedin ? (<Shop />):(<Redirect to='/' />))} />
        </Switch>  

          {/* <Button color="danger" onClick={()=>{this.toggle()}}>hi there</Button>
      <Modal isOpen={this.state.modal} toggle={() => this.setState({modal: false})}>
        <ModalHeader toggle={() => this.setState({modal: false})}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <Button color="success" onClick={()=>{this.toggleNested()}}>Show Nested Modal</Button>
          <Modal isOpen={this.state.nestedModal} toggle={()=>this.setState({nestedModal:false})} onClosed={this.state.closeAll ? this.toggle : undefined}>
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={()=>{this.toggleNested()}}>Done</Button>{' '}
              <Button color="secondary" onClick={()=>{this.toggleAll()}}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{this.toggle()}}>Do Something</Button>{' '}
          <Button color="secondary" onClick={()=>{this.toggle()}}>Cancel</Button>
        </ModalFooter>
      </Modal>    */}
    </div>
    </Router>
    
  );

}

}

 

export default App;
