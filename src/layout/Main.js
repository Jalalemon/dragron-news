import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/footer/Footer';
import Header from '../pages/Shared/Header/Header';
import Leftside from '../pages/Shared/Leftside/Leftside';
import Rightside from '../pages/Shared/Rightside/Rightside';

const Main = () => {
    return (
      <div>
        <Header> </Header>
        <Container>
          <Row>
            <Col col="2" >
             <Leftside></Leftside>
            </Col>
            <Col col="7">
              <Outlet> </Outlet>
            </Col>
            <Col col="3">
              <Rightside></Rightside>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
};

export default Main;