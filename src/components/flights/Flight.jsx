import React from "react";
import { Accordion, Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "holderjs";

const Flight = ({ data, pax }) => {
  const { airline, origin, destination, originTime, destTime, cost } = data;

  return (
    <>
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
                <div>{airline}</div>
                <Accordion.Toggle
                  as={Button}
                  className="p-0"
                  variant="link"
                  eventKey="0"
                />
                <small className="text-muted">AI-101</small>
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
                  {("0" + new Date(destTime).getUTCHours()).slice(-2)}.
                  {("0" + new Date(destTime).getUTCMinutes()).slice(-2)}
                </div>
                <small className="text-muted">{destination}</small>
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <div>02h 00m</div>
                <small className="text-muted">Non stop</small>
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                Rs.{Number(cost) * (isNaN(Number(pax)) ? 1 : Number(pax))}
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <Button variant="danger">Book</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card.Header>
      </Card>
    </>
  );
};

export default Flight;
