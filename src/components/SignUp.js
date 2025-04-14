import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: '#fff7e6' }} // Creamy beige background
    >
      <Card className="shadow p-4" style={{ width: '26rem', backgroundColor: 'white', color: '#333' }}>
        <h3 className="text-center mb-3" style={{ fontSize: '1.8rem', color: '#d2691e' }}>
          Create Your Account
        </h3>
        <Form>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label style={{ fontSize: '1rem' }}>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" style={{ fontSize: '0.95rem' }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label style={{ fontSize: '1rem' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" style={{ fontSize: '0.95rem' }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label style={{ fontSize: '1rem' }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" style={{ fontSize: '0.95rem' }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label style={{ fontSize: '1rem' }}>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" style={{ fontSize: '0.95rem' }} />
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100" style={{ fontSize: '1rem', color: 'white' }}>
            Sign Up
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
