import React from 'react'
import './Register.css'
import {Link,Outlet} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Register() {
  return (
    <div className="login">
      <Row xs={1} md={2} className="ro">
        <Col className='columns' >
          <h1 className='heads'>For <span className='text-success'>Clubs</span></h1>
          <h4 className='mb-5'>login to create new events...</h4>
          <button className='btn1'>
            <Link className='nav-link' to='/clublogin'>Login</Link>
          </button>
          <h4>Don't have an account?</h4>
          <h3><Link className="nav-link text-primary" to='/clubregister'>Sign Up</Link></h3>
        </Col>
        <Col className='columns'>
          <h1 className='heads'>For <span className='text-primary'>Students</span></h1>
          <h4 className='mb-5'>login for news updates...</h4>
          <button className='btn2'>
            <Link className="nav-link" to='/studentlogin'>Login</Link>
          </button>
          <h4>Don't have an account?</h4>
          <h3><Link className="nav-link text-success" to='/studentregister'>Sign Up</Link></h3>
        </Col>
      </Row>
      <Outlet/>
    </div>
  )
}