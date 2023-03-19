import React,{useState,useEffect, useContext} from 'react'
import './Events.css'
import {Link,Outlet} from 'react-router-dom'
import {useForm} from 'react-hook-form'


export default function Events() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  const [update, setUpdate] = useState(false)
  let submitForm=(userObj)=>{
    fetch("http://localhost:4000/events",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userObj)
    })
    .catch(err=>console.log("err is ",err))
    setUpdate(!update)
  }
  let [events,setEvents]=useState([])
    let [up,setUp]=useState(true)
    useEffect(()=>{
        fetch("http://localhost:4000/events")
        .then(response=>response.json())
        .then(eventData=>setEvents(eventData))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className=''>
      <h1 className="text-center text-primary">Create An Event</h1>
      <div id="dim">
        <div className="reg container mt-5 ">
          <style> @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,500;1,400&family=Berkshire+Swash&family=Carter+One&family=DM+Serif+Text:ital@1&family=Khand&family=Oleo+Script&family=Permanent+Marker&family=Righteous&display=swap'); </style>
          <form onSubmit={handleSubmit(submitForm)} >
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col mx-auto">            
                <label htmlFor="eventname">Event-Name</label>
                <input type="text"  className='form-control mb-2' placeholder='Event Name' {...register("eventname",{required:{value:"true",message:"* Event Name is required"},minLength:{value:4,message:"* Event Name is Too Small"}})}/>
                {errors.eventname?.message && <p className="text-danger">{errors.eventname?.message}</p> }            
              </div>
              <div className="col mx-auto" >
                <label htmlFor="clubname">Club-Name</label>
                <input type="text" className='form-control mb-2' placeholder='Club Name'  {...register("clubname",{required:{value:"true",message:"* Club Name is required"}})}/>
                {errors.clubname?.message && <p className="text-danger">{errors.clubname?.message}</p>}   
              </div>
              <div className="col mx-auto">            
                <label htmlFor="Event Date">Event Date</label>
                <input type="date"  className='form-control mb-3' placeholder='Event Date'{...register("eventdate",{required:true})}/>
                {errors.eventdate?.type==="required"&&<p className="text-danger">* DOB is required</p>}      
              </div>
              <div className="col mx-auto" >
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' placeholder='Emali Id'  {...register("email",{required:{value:"true",message:"* Email is required"}})}/>
                {errors.email?.message &&<p className="text-danger">{errors.email?.message}</p>}   
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-1">
              <div className="col mx-auto" >
                <label htmlFor="description">Event Description</label>
                <textarea id="description" cols="30" rows="6" className='form-control' placeholder='Enter Event Description Here...'  {...register("description",{required:{value:"true",message:"* Description is required"}})}></textarea> 
                {errors.description?.message &&<p className="text-danger">{errors.description?.message}</p>}  
              </div>
              {/* <div>
                <label htmlFor="bgimage">Please Upload an Image...</label>
                <input type="file" id="bgimage" className='form-control' {...register("bgimage",{required:{value:"true",message:"* Image is required"}})}/>
                {errors.bgimage?.message &&<p className="text-danger">{errors.bgimage?.message}</p>}  
              </div> */}
            </div>
            <button type='submit' className="btn3 mr-0 mt-3" onClick={()=>submitForm}>Create Event</button>
          </form>
        </div>
      </div>




        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className='nav-link' to='previousevents'>
                  <button className='btn4'>PreviousEvents</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='upcomingevents'>
                  <button className='btn4'>UpcommingEvents</button>
                </Link>
            </li>
        </ul>
        <Outlet/>        
    </div>
  )
}
