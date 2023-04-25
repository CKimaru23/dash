import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const RoutePlan = () => {
  const [assignedRoutes, setAssignedRoutes] = useState([]);
  const [selectedMerchandiser, setSelectedMerchandiser] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  // const [autocomplete, setAutocomplete] = useState(null);

  const handleMerchandiserChange = (e) => {
    setSelectedMerchandiser(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleAssign = (e) => {
    e.preventDefault();
    const routePlan = { merchandiser: selectedMerchandiser, month: selectedMonth };
    setAssignedRoutes([...assignedRoutes, routePlan]);
    setSelectedMerchandiser('');
    setSelectedMonth('');
  };

  return (
    <Container>
      <h2>Assign Monthly Route Plans</h2>
      <Form onSubmit={handleAssign}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Merchandiser</Form.Label>
            <Form.Control as="select" value={selectedMerchandiser} onChange={handleMerchandiserChange}>
              <option value="">Select Merchandiser</option>
              <option value="merchandiser1">Merchandiser 1</option>
              <option value="merchandiser2">Merchandiser 2</option>
              <option value="merchandiser3">Merchandiser 3</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Month</Form.Label>
            <Form.Control as="select" value={selectedMonth} onChange={handleMonthChange}>
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Assign
        </Button>
      </Form>

      <h3 className="mt-5">Assigned Route Plans</h3>
      {assignedRoutes.length === 0 ? (
        <p>No route plans assigned yet</p>
      ) : (
        <ul>
          {assignedRoutes.map((routePlan, index) => (
            <li key={index}>
              {routePlan.merchandiser} - {routePlan.month}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default RoutePlan;
