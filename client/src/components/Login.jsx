import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useUIContext } from "../context/context";
import { Form } from 'react-bootstrap';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setCurrentUser, setUserToken } = useUIContext()

  const handleLogin = (user) => {
    axios
      .post("/login", {
        user: user,
      })
      .then(
        (res) => {
          if(res.status === 201) {
            setCurrentUser(res.data.user)
            setUserToken(res.data.token)
            navigate('/')
            toast.success(`Successfully logged in`)
          } else {
            toast.error(`Error!!! ${res.data.message}`)
          }
        }
      ).catch((error) => {
        toast.error(`Error!!! ${error}`)
      });
  }

  return (
    <div>
        <h1 className="text-center my-1">Login Now</h1>
      <form className='form w-50 mx-auto' onSubmit={(e) => { e.preventDefault(); handleLogin({username, password }); e.target.reset(); } }>
        <br />

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
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            value={password}
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

       
        <div className='text-center'>
            <button type="submit" className='btn btn-primary'>Login</button>
        </div>
      </form>
      <div className='text-center'>
        Don't have an account?
        <NavLink to="/register">Sign Up</NavLink>
      </div>
      <br />
      <br />
    </div>
  )
}