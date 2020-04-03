import React from "react";
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "holderjs";
import Flight from "./Flight";
import FlightMultiple from "./FlightMultiple";
import LayOver from "./LayOver";

const FlightItem = ({ data, pax }) => {
  return data.map(flight => {
    // console.log("fl=", flight.length);
    if (flight.length === 1) {
      return (
        <Accordion className="mt-3 mb-3" key={flight[0].id}>
          <Flight data={flight[0]} pax={pax} />
        </Accordion>
      );
    }
    return (
      <Accordion className="mt-3 mb-3" key={flight[0].id}>
        <FlightMultiple data={flight} pax={pax} />
      </Accordion>
    );
  });

  /*
  return (
    <>
      <Accordion className="mt-3 mb-3">
        <Flight multiple={false} />
      </Accordion>

      <Accordion className="mt-3 mb-3">
        <Card>
          <Card.Header className="p-2">
            <Card.Body className="p-0">
              <Row noGutters={true}>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    width={32}
                    height={32}
                    className="align-self-center mr-3"
                    src="holder.js/32x32"
                    alt="Generic placeholder"
                  />
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center col-2">
                  <div>Multiple</div>
                  <Accordion.Toggle
                    as={Button}
                    className="p-0"
                    variant="link"
                    eventKey="0"
                  >
                    Show details
                  </Accordion.Toggle>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <div>05.00</div>
                  <small className="text-muted">Pune</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <div>07.00</div>
                  <small className="text-muted">Delhi</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <div>02h 00m</div>
                  <small className="text-muted">Non stop</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  Rs.3,786
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <Button variant="danger">Book</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <div>
              <Card.Body>
                <Container>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <img
                        width={32}
                        height={32}
                        className="align-self-center mr-3"
                        src="holder.js/32x32"
                        alt="Generic placeholder"
                      />
                    </Col>
                    <Col>
                      <div>Air India</div>
                      <small className="text-muted">AI-101</small>
                    </Col>
                    <Col>
                      <div>05.00</div>
                      <small className="text-muted">Pune</small>
                    </Col>
                    <Col>
                      <div>07.00</div>
                      <small className="text-muted">Delhi</small>
                    </Col>
                    <Col>
                      <div>02h 00m</div>
                      <small className="text-muted">Non stop</small>
                    </Col>
                    <Col>Rs.3,786</Col>
                    <Col>
                      <Button variant="danger">Book</Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
              <div className="layover-wrapper">
                <p className="layover-text">Layover time 01h 00m</p>
              </div>
              <Card.Body>
                <Container>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <img
                        width={32}
                        height={32}
                        className="align-self-center mr-3"
                        src="holder.js/32x32"
                        alt="Generic placeholder"
                      />
                    </Col>
                    <Col>
                      <div>Air India</div>
                      <small className="text-muted">AI-101</small>
                    </Col>
                    <Col>
                      <div>05.00</div>
                      <small className="text-muted">Pune</small>
                    </Col>
                    <Col>
                      <div>07.00</div>
                      <small className="text-muted">Delhi</small>
                    </Col>
                    <Col>
                      <div>02h 00m</div>
                      <small className="text-muted">Non stop</small>
                    </Col>
                    <Col>Rs.3,786</Col>
                    <Col>
                      <Button variant="danger">Book</Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>{" "}
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion className="mt-3 mb-3">
        <Card>
          <Card.Header className="p-2">
            <Card.Body className="p-0">
              <Row noGutters={true}>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    width={32}
                    height={32}
                    className="align-self-center mr-3"
                    src="holder.js/32x32"
                    alt="Generic placeholder"
                  />
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center col-2">
                  <div>Air India</div>
                  <Accordion.Toggle
                    as={Button}
                    className="p-0"
                    variant="link"
                    eventKey="0"
                  />
                  <small className="text-muted">AI-101</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <div>05.00</div>
                  <small className="text-muted">Pune</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <div>07.00</div>
                  <small className="text-muted">Delhi</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <div>02h 00m</div>
                  <small className="text-muted">Non stop</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  Rs.3,786
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <Button variant="danger">Book</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card.Header>
        </Card>
      </Accordion>
    </>
  );
  */
};

export default FlightItem;
