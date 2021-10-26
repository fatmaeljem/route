import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "react-simple-star-rating";

const Add = ({ show, handleClose, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    genre: "",
    duration: "",
    img: "",
    discription: "",
    rate: 1,
  });
  const onStarClick = (nextValue, name) => {
    setNewMovie({ ...newMovie, rate: nextValue });
  };
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Rating
            name="rate1"
            ratingValue={newMovie.rate}
            onStarClick={onStarClick} /* Rating Props */
          />
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  onChange={handleChange}
                  name="title"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>image url</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="image url"
                  onChange={handleChange}
                  name="img"
                />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleChange}
                name="description"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group controlId="formGridZip">
                <Form>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Genre</Form.Label>
                    <Form.Select defaultValue="Choose genre">
                      <option>triller</option>
                      <option>action</option>
                      <option>romance</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
                <Form.Control onChange={handleChange} name="Genre" />
              </Form.Group>
            </Row>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                addMovie(newMovie);
                handleClose();
              }}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Add;
