import './Clubs.css'
import React from 'react'
import Csi from './Csi/Csi';
import Nss from './Nss/Nss'
import Livewire from './Livewire/Livewire';
import Acm from './Acm/Acm';
import Cresendo from './Cresendo/Cresendo';

function Clubs() {

    return (
      <div className="clb">
        <h1 className='display-2  fw-light text-center technical'>TECHNICAL CLUBS</h1>
        <Csi/>
        <Acm/>
        <h1 className='display-2  fw-light text-center mt-5 technical'>NON-TECHNICAL CLUBS</h1>
        <Nss/>
        <Livewire/>
        <Cresendo/>
      </div>
    );
  
}

export default Clubs;