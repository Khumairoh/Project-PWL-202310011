import React from 'react'
import koki from '../../../Asset/koki.png'
import "../About/About.css"

export default function About() {
  return (
    <div class="container">
      <img src={koki} className="kokiAbout" alt='..'/>

      <div class="container-fluid">
        <div class="textabts">
          <h1> About </h1>
          <p> Misi kami di Cuki adalah untuk membuat masakan sehari-hari
            makin menyenangkan, karena kami percaya bahwa memasak adalah
            kunci menuju kehidupan yang lebih bahagia dan lebih sehat bagi
            manusia, komunitas, dan planet ini. Kami mendukung koki
            rumahan di seluruh dunia untuk membantu satu sama lain dengan
            berbagi resep dan tips memasak. </p>
        </div>
      </div>
    </div>
  )
}
