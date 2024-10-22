import React, { useRef } from 'react'
// import './Testimonal.css'
import next_icon from '../../src/assets/next-icon.png'
import back_icon from '../../src/assets/back-icon.png'
// import user_1 from '../../src/assets/'
import user_1 from '../../src/assets/user_1.jpeg'
import user_2 from '../../src/assets/user_2.jpeg'
import user_3 from '../../src/assets/user_3.jpeg'
import user_4 from '../../src/assets/user_4.jpeg'



const Testimonal = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}


return (
<div className='testimonal'>
  <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
  <img src={back_icon} alt="" className="back-btn"
onClick={slideBackward} />
  <div className="slider">
    <ul ref={slider}>
        {/* User 1 */}
        <li>
            <div className="slide">
                <div className="user-info">
                    <img id='sm1' src={user_1} alt="" />
                    <div>
                        <h3>Gunvor Marie Dyrdal</h3>
                        <span>California,US</span>
                    </div>
                </div>
                <p>
                “The mindfulness sessions have transformed how I
manage stress. The techniques are simple yet incredibly effective,
                and I find myself more centered and focused
throughout the day.”
                <br></br>
                “Thankful for folks willing to facilitate! What a gift."
                </p>
            </div>
        </li>
        {/* User 2 */}
        <li>
            <div className="slide">
                <div className="user-info">
                    <img id='sm2' src={user_2} alt="" />
                    <div>
                        <h3>Ayush Mehra</h3>
                        <span>New York,US</span>
                    </div>
                </div>
                <p>
                “Before the program, there was a stigma around
discussing mental health at work. This initiative has opened up
conversations, making it easier for us to support one another."
                </p>
            </div>
        </li>
        {/* User 3 */}
        <li>
            <div className="slide">
                <div className="user-info">
                    <img id='sm3' src={user_3} alt="" />
                    <div>
                        <h3>Glory Williams</h3>
                        <span>California,US</span>
                    </div>
                </div>
                <p>
                “I’ve noticed a significant improvement in my
mental health since joining the program. The sense of community and
support from my peers has been invaluable, and I feel less isolated
and more connected.”
                </p>
            </div>
        </li>
        {/* User 4  */}
        <li>
            <div className="slide">
                <div className="user-info">
                    <img id='sm4' src={user_4} alt="" />
                    <div>
                        <h3>John Doe</h3>
                        <span>California,US</span>
                    </div>
                </div>
                <p>
                “Incorporating mindfulness into my daily routine
has boosted my productivity. I’m able to stay present and tackle my
tasks with greater clarity and efficiency.”
                </p>
            </div>
        </li>
    </ul>
  </div>

</div>
)
}

export default Testimonal
