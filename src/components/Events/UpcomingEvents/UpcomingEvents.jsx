import React,{useEffect,useState} from 'react'

export default function UpcomingEvents() {
  let [upevents,setUpevents]=useState([])
  let currentDate = new Date().toJSON().slice(0, 10);
  useEffect(()=>{
    fetch("http://localhost:4000/events")
    .then(response=>response.json())
    .then(eventData=>{setUpevents(eventData)})
    .catch(err=>console.log(err))

  },[])
  return (
    <div className="card container-fluid row row-cols-3 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 gap-3">
      <h1>Upcoming Events</h1>
      {
        upevents?.map((eventObj)=>
        {if(eventObj.eventdate>currentDate){
          return <div className=" col card" key={eventObj.id}>
          <div className="card-header bg-info">
            <h3 className="">{eventObj.eventname}</h3>
            <h6 className="">-by {eventObj.clubname}</h6>
          </div>
          <div className="card-body ">
            {eventObj.description}
            <br />
            This event is going to be hosted on {eventObj.eventdate}.
          </div>
          <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
        </div>;
        }}
        )
      }
      
      
    </div>
  )
}
