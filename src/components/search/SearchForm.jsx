import React, { useState } from "react";
import { Tabs, Tab, Form, Button } from "react-bootstrap";

export const SearchForm = props => {
  const { handleSubmit, searchData, handleChange } = props;
  const [key, setKey] = useState("searchTab1");

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab eventKey="searchTab1" title="One Way">
          tab 1
        </Tab>
        <Tab eventKey="searchTab2" title="Return">
          <div> tab 2</div>
        </Tab>
      </Tabs>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Origin city"
            className="mb-3 mt-3"
            name="origin"
            value={searchData.origin}
            onChange={handleChange}
          />
          <Form.Control
            size="sm"
            type="text"
            placeholder="Destination city"
            className="mb-3"
            name="dest"
            value={searchData.dest}
            onChange={handleChange}
          />
          <Form.Control
            type="date"
            className="mb-3"
            name="originDate"
            value={searchData.originDate}
            onChange={handleChange}
          />
          <Form.Control
            type="date"
            className="mb-3"
            name="returnDate"
            value={searchData.returnDate}
            onChange={handleChange}
          />
          <Form.Control
            size="sm"
            as="select"
            custom
            className="mb-3"
            name="passengers"
            value={searchData.passengers}
            onChange={handleChange}
          >
            <option value="0">Select Passangers</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Control>
          <Button
            size="sm"
            variant="primary"
            type="submit"
            block
            className="mb-3"
          >
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
};
