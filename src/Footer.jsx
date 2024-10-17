import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return ( 
        <MDBFooter bgColor='light' className='text-center text-light text-muted bg-dark'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-dark'>
          <div className='me-5 d-none d-lg-block text-light'>
            <span>Get connected with us on social networks:</span>
          </div>
  
          <div>
            <a href='' className='me-4 text-light'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-light'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-light'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-light'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-light'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-light'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5 bg-dark'>
            <MDBRow className='mt-3 bg-dark'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 id='font1' className='text-uppercase fw-bold mb-4 text-light'>
                  <MDBIcon icon="gem" className="me-3 text-light" />
                  The Tough Tiger
                </h6>
                <p className='text-light'>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4 text-light'>Products</h6>
                <p>
                  <a href='#!' className='text-light'>
                    Angular
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-light'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-light'>
                    Vue
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-light'>
                    Laravel
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-light'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-light'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-light'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-light'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-light'>
                    Help
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-light'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:
          <a className='text-light fw-bold' href='https://mdbootstrap.com/'>
           ToughTiger.com
          </a>
        </div>
      </MDBFooter>  


      
     );
}
 
export default Footer;