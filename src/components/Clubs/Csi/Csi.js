import CSI from '../Images/CSI.png'
function Csi(){
    return(
        <div  className="csi container bg-white  m-auto border topic">
            
            <div className='container m-2'>
            <ul class="nav">
                <li class="nav-item">
                    <a class="" href='#'>
                    <div>
        <img  className='m-5'src={CSI} alt="" width="100px"/>
      </div>
                    </a>
                    </li>
                    <li>
                    <h1 className=' m-5 display-4 text-warning fw-semibold'> COMPUTER SOCIETY OF INDIA</h1>
                    </li>
</ul>

</div>
           <div className='container'>
      <h2 className='display-5 text-center mt-5'>ABOUT CSI</h2>
      <p className="lead text-center">
      CSI was formed in 1965 by few computer professionals. Today it has 72 chapters, 511 student chapters and more than 1,00,000 members in it, all over India.The wide spectrum of members is committed to advancement and practice of computer engineering and technology systems.
      </p>
      <button className='btn btn-danger m-5 p-3 btn-1'>Previous Events</button>
      <button className='btn btn-success m-5 p-3 btn-2'>Upcoming Events</button>
      </div>
        </div>
    )
}

export default Csi;
