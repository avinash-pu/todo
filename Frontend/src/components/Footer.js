import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../styles/Footer.css';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>
            <p>Some content for the footer</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>MDBootstrap.com</a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
