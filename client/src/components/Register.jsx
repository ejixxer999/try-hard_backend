import axios from "axios";
import React, { useContext, useState } from "react";
// import { Button, Form } from "semantic-ui-react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUIContext } from "../context/context";
import { toast } from "react-toastify";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const {setCurrentUser, setUserToken } = useUIContext()

  const createUser = (user) => {
    if(!user.email || !user.password) {
      toast.warn(`Please add email and password`)
    }
    axios
      .post("/register", {
        user: user,
      })
      .then(
        (res) => {
          if(res.status === 201) {
            setCurrentUser(res.data.user)
            setUserToken(res.data.token)
            navigate('/')
            toast.success(`Successfully Registered`)
          } else {
            toast.error(`Could not register user: ${res.data.errors}`)
          }
        }
      ).catch((error) => {
        toast.error(`Error!!! ${error}`)
      });
  };

  return (
    <div>
      <h1 className="text-center my-1">Sign Up</h1>

      <Form
        className="create-form w-50 mx-auto p-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
          createUser({ username, email, password });
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Username"
            value={username}
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            placeholder="Email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="text-center my-1">
          <Button type="submit" className="btn btn-primary">
            Sign up
          </Button>
        </div>
      </Form>
    </div>
  );
}
