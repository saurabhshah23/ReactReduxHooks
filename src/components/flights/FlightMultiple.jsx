import React from "react";
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "holderjs";
import LayOver from "./LayOver";

const FlightMultiple = ({ data }) => {
  const { airline, origin, destination, originTime, destTime, cost } = data[0];
  const f2 = data[1];

  return (
    <>
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
                  <div>
                    {("0" + new Date(originTime).getUTCHours()).slice(-2)}.
                    {("0" + new Date(originTime).getUTCMinutes()).slice(-2)}
                  </div>
                  <small className="text-muted">{origin}</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <div>
                    {("0" + new Date(f2.destTime).getUTCHours()).slice(-2)}.
                    {("0" + new Date(f2.destTime).getUTCMinutes()).slice(-2)}
                  </div>
                  <small className="text-muted">{f2.destination}</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <div>05h 00m</div>
                  <small className="text-muted">Total duration</small>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  Rs.{Number(cost) + Number(f2.cost)}
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <Button variant="danger">Book</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <div>
              <Card.Body className="pl-0 pr-0">
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
                      <div>{airline}</div>
                      <small className="text-muted">AI-101</small>
                    </Col>
                    <Col>
                      <div>
                        {("0" + new Date(originTime).getUTCHours()).slice(-2)}.
                        {("0" + new Date(originTime).getUTCMinutes()).slice(-2)}
                      </div>
                      <small className="text-muted">{origin}</small>
                    </Col>
                    <Col>
                      <div>
                        {("0" + new Date(destTime).getUTCHours()).slice(-2)}.
                        {("0" + new Date(destTime).getUTCMinutes()).slice(-2)}
                      </div>
                      <small className="text-muted">{destination}</small>
                    </Col>
                    <Col>
                      <div>02h 00m</div>
                      <small className="text-muted" />
                    </Col>
                    <Col />
                    <Col />
                  </Row>
                </Container>
              </Card.Body>
              <LayOver />
              <Card.Body className="pl-0 pr-0">
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
                      <div>{f2.airline}</div>
                      <small className="text-muted">AI-101</small>
                    </Col>
                    <Col>
                      <div>
                        {("0" + new Date(f2.originTime).getUTCHours()).slice(
                          -2
                        )}
                        .
                        {("0" + new Date(f2.originTime).getUTCMinutes()).slice(
                          -2
                        )}
                      </div>
                      <small className="text-muted">{f2.origin}</small>
                    </Col>
                    <Col>
                      <div>
                        {("0" + new Date(f2.destTime).getUTCHours()).slice(-2)}.
                        {("0" + new Date(f2.destTime).getUTCMinutes()).slice(
                          -2
                        )}
                      </div>
                      <small className="text-muted">{f2.destination}</small>
                    </Col>
                    <Col>
                      <div>02h 00m</div>
                      <small className="text-muted" />
                    </Col>
                    <Col />
                    <Col />
                  </Row>
                </Container>
              </Card.Body>{" "}
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default FlightMultiple;
