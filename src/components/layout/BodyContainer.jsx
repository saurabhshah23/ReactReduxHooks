import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { SearchContainer } from "../search/SearchContainer";
import { FlightsContainer } from "../flights/FlightsContainer";

const BodyContainer = () => {
  return (
    <Container fluid className="mt-3 mb-3">
      <Row>
        <Col sm={3} className="search-wrapper">
          <SearchContainer />
        </Col>
        <Col sm={9}>
          <FlightsContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default BodyContainer;
