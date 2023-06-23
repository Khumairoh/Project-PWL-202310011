import React from 'react'
import Headers from './Component/headers/Headers'
import '../Layout/Layout.css'
import 'bootstrap/dist/css/bootstrap.css'


export default function Layout(props) {
  return (
    <div id="main-layout" className='pall'>
      <Headers/>

        <main className='inti' >
          {props.children}
        </main>

    
    </div>
  )
}
