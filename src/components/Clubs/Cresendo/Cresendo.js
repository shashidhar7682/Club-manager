import SCINTILLATE from '../Images/SCINTILLATE.jpeg'
function Cresendo(){

    return(
        <div  className="csi container bg-white border mt-4 topic">
            <div className='container m-2'>
            <ul class="nav">
                <li class="nav-item">
                    <a class="" href='#'>
                    <div>
                    <img  className='m-5'src={SCINTILLATE} alt="" width="100px"/>
      </div>
                    </a>
                    </li>
                    <li>
                    <h1 className='heads m-5 display-4 text-warning fw-semibold text-center'>SCINTILLATE PHOTOGRAPHY</h1>
                    </li>
</ul>

</div>
           <div className='container'>
      <h2 className='display-5 mt-5 text-center'>ABOUT SCINTILLATES</h2>
      <p className="lead text-center">
      Welcome to
SCINTILLATE
Scintillate is a photography club from vnrvjiet.

      </p>
      <button className='btn btn-danger m-5 p-3 btn-1'>Previous Events</button>
      <button className='btn btn-success m-5 p-3 btn-2'>Upcoming Events</button>
      </div>
        </div>
    )
}

export default Cresendo;