import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Y:\websiteproject\src\Images\logo\logo1.png

const Topmenu = () => {
    return ( 
     <>
        <Navbar id='nav' collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">

            <img src="src/Images/logo/logo6.png" alt="" width={"80px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >

              <Nav.Link href="/home" style={{fontFamily:"unset"  , fontSize:"20px" , color:"grey" , fontWeight:"bold" , paddingLeft:"90px"}}>Home</Nav.Link>
              <Nav.Link href="/about"  style={{fontFamily:"unset"  , fontSize:"20px" , color:"grey" , fontWeight:"bold" , paddingLeft:"20px"}}>Product</Nav.Link>
              <NavDropdown title="Shop" id="collapsible-nav-dropdown" style={{fontFamily:"unset"  , fontSize:"20px" , color:"black" , fontWeight:"bold" , paddingLeft:"20px"}} >
                <NavDropdown.Item id='item' href="#action/3.1" style={{fontFamily:"unset"  , fontSize:"14px" , color:"black" , fontWeight:"bold" , paddingLeft:"20px"}}>MEN</NavDropdown.Item>
                <NavDropdown.Item id='item2' href="#action/3.2" style={{fontFamily:"unset"  , fontSize:"14px" , color:"black" , fontWeight:"bold" , paddingLeft:"20px"}}>
                  Women
                </NavDropdown.Item>
                <NavDropdown.Item id='item3' href="#action/3.3" style={{fontFamily:"unset"  , fontSize:"15px" , color:"black" , fontWeight:"bold" , paddingLeft:"20px"}}>Trendy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id='item4' href="#action/3.4" style={{fontFamily:"unset"  , fontSize:"15px" , color:"black" , fontWeight:"bold" , paddingLeft:"20px"}}>
                 All Products
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" style={{fontFamily:"unset"  , fontSize:"20px" , color:"grey" , fontWeight:"bold" , paddingLeft:"20px"}}>
                <img src="src/Images/logo/search.png" alt="" width={"20px"} />


              </Nav.Link>
              <Nav.Link eventKey={2} href="/category" style={{fontFamily:"unset"  , fontSize:"20px" , color:"grey" , fontWeight:"bold" , paddingLeft:"20px"}}>
              <img src="src/Images/logo/user1.png" alt="" width={"20px"} />
                

              </Nav.Link>

              <Nav.Link eventKey={2} href="/category" style={{fontFamily:"unset"  , fontSize:"20px" , color:"grey" , fontWeight:"bold" , paddingLeft:"20px"}}>
              <img src="src/Images/logo/shopping-cart.png" alt="" width={"20px"} />
                

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <marquee behavior=""  direction="left" id="mar" >Get 50% off ! Exiting offer in just 799rs</marquee>
      </>

     );
}
 
export default Topmenu;