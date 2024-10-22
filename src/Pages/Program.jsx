import React from 'react'
// import './Programs.css'; // Ensure this path is correct
import '../css/product.css'
import program_1 from '../../src/assets/program-1.webp'
import program_2 from '../../src/assets/program-2.jpeg'
import program_3 from '../../src/assets/program-3.jpeg'
import program_icon_1 from '../../src/assets/program-icon-1.png'
import program_icon_2 from '../../src/assets/program-icon-2.png'
import program_icon_3 from '../../src/assets/program-icon-3.png'

const Program = () => {
    return (
      <div className='programs'>
        <div className="program">
        <img src={program_1} alt="Program 1" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Employee Well-being Programs</p>
         </div>
        </div>
        <div className="program">
              <img src={program_2} alt="Program 2" />
              <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Executive and Leadership Coaching</p>
         </div>
        </div>
        <div className="program">
              <img src={program_3} alt="Program 3" />
              <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Business Coaching</p>
         </div>
        </div>
      </div>
    )
  }
  
  export default Program;
  
  