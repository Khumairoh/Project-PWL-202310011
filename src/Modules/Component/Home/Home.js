import React from 'react'
import bg from '../../../Asset/bg.png'
import "../Home/Home.css"

export default function Home() {
  return (
    <div className='Fcontainer pukus'>
      <img src={bg} className="bgHome" alt='..'/>
      

      <div className='search'>
        <div class="form-outline mb-4">
          <input type="search" class="form-control" id="datatable-search-input"/>
            <label class="form-label" for="datatable-search-input">Search</label>
        </div>
      </div>
    </div>
  )
}
