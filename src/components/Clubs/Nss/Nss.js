import NSS from '../Images/NSS.png'
function Nss(){
    return(
        <div  className="csi container topic border">
            <div className='container m-2'>
            <ul class="nav">
                <li class="nav-item">
                    <a class="" href='#'>
                    <div>
        <img  className='m-5'src={NSS} alt="" width="300px"/>
      </div>
                    </a>
                    </li>
                    <li>
                    <h1 className='heads m-5 display-4 text-warning fw-semibold'>NATIONAL SERVICE SCHEME</h1>
                    </li>
</ul>

</div>
           <div className='container'>
      <h2 className='display-5 mt-5 text-center'>ABOUT NSS</h2>
      <p className="lead text-center">
      Welcome to
National Service Scheme
The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various government led community service activities & programmes.The sole aim of the NSS is to provide hands on experience to young students in delivering community service.

      </p>
      <button className='btn btn-danger m-5 p-3 btn-1'>Previous Events</button>
      <button className='btn btn-success m-5 p-3 btn-2'>Upcoming Events</button>
      </div>
        </div>
    )
}

export default Nss;