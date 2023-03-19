import acm from '../Images/acm.png'


function Acm(){
    return(
        <div  className="csi container bg-white  mt-3 border topic">
            
            <div className='container m-2'>
            <ul className="nav">
            
                <li  class="nav-item">
                    <img src={acm} alt="" width="100px"/>
                    <h1 className='heads display-5 text-warning fw-semibold'>ASSOCIATION FOR COMPUTING MACHINERY STUDENT CHAPTER</h1>
                </li>
           </ul>

</div>
           <div className='container'>
      <h2 className='display-5 text-center mt-5'>ABOUT ACM</h2>
      <p className="lead text-center">
      ACM is an international student chapter that brings together technology geeks, computer educators, working professionals, among others and gives them a platform to share all things related to the world of rapidly evolving technology. ACM has always been at the forefront of raising awareness about new technologies, educating people and empowering them to do something new.

Apart from being a technological learning and skill sharing platform, ACM is also renowned for developing in its members a sense of teamwork and dedication. It empowers individuals to scale new heights in their professional careers.

With more than 100,000 members worldwide, the fraternity only continues to grow stronger in every passing year. A chapter with such illustrious history, finds its place with a great prominence in VNRVJIET. The team running the chapter constantly strives to bring about awareness and widen the reach of technology and its wonders to more and more people.
      </p>
      <button className='btn btn-danger m-5 p-3 btn-1'>Previous Events</button>
      <button className='btn btn-success m-5 p-3 btn-2'>Upcoming Events</button>
      </div>
        </div>
    )
}

export default Acm;