import "./Prev.css"
import {useState,useEffect} from 'react'

function PreviousEvents(){
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
        <h1>Previous Events</h1>
        {
            upevents?.map((eventObj)=>
            {if(eventObj.eventdate<=currentDate){
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
            <div className="card-footer text-end"><button className="btn btn-warning">Get Details</button></div>
            </div>;
            }}
            )
        }
      </div>
            // <div className="card container-fluid row row-cols-3 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 gap-3">
            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">Hackathon</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>
            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">Paper Presentation</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>

            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">RRR</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>
            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">Soch</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>
            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">Diksuchi</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>
            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">Workshops</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>
            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">Workshops</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>
            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">Workshops</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>
            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">Workshops</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>
            //     <div className=" col card">
            //         <div className="card-header bg-info">
            //             <h3 className="">Workshops</h3>
            //         </div>
            //         <div className="card-body ">
                        
            //         </div>
            //         <div className="card-footer text-end"><button className="btn btn-warning">Register</button></div>
            //     </div>

            // </div>
    );
}

export default PreviousEvents;