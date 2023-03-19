import React,{useState} from 'react'
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel'
import {Button,Row,Col,Card,Form} from 'react-bootstrap';
const EventList = require('./EventList');

function Home() {

  //const [query,setQuery]= useState("")
  // console.log(EventList.filter(event=>event.name.toLowerCase().includes("ha")))

  return (

    <div>
      
     
      <div className="current p-3 ">
        <h1 > Annual Fest at VNRvjiet</h1>
      </div>


        <Carousel className=''>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="Assets/scinti.jpg "
          alt="First slide" width="100px" height="450px"
        />
        <Carousel.Caption>
          <div className="first ">
            <h1>scintillashunzatvnrvjiet <br/> February 5 </h1>
          </div>
          <button className='btn btn-white'>Register </button>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="Assets/hack.jpg "
          alt="Second slide" width="100px" height="450px"
        />
        <Carousel.Caption>
        <div className="first text-white">
            <h1>VJ Hackathon  <br/> February 6,7 </h1>
        </div>
        <button className=' btn btn-white'>Register </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Assets/code.jpg "
          alt="Third slide" width="100px" height="450px"
        />
        <Carousel.Caption>
        <div className="first ">
            <h1>Coding Contest <br/>February 4 </h1>
        </div>
        <button className='btn btn-white'>Register </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='contain  '>      
      <h3 className='m-4 mt-5 mb-2 '>Choose the Technology <br/> to Learn 
      <Form className='search p-2  '>  
       
                  <Form.Control                   
                    className=' me-0 '
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </Form> 
          </h3> 
      <img id='girl' src="https://img.freepik.com/free-vector/group-college-university-students-hanging-out_74855-5251.jpg  " alt="" />      
    </div>
    </div>
  )
}

export default Home;