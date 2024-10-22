import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import a2 from '../Images/bg/2.png';
import a1 from '../Images/bg/1.png';
import a3 from "../Images/bg/3.png";
import a4 from "../Images/bg/4.png";
import freede1 from "../Images/logo/freedel1.png";
import happysell1 from "../Images/logo/happysell1.png";
import coupon1 from "../Images/logo/coupon1.png";
import custservice1 from "../Images/logo/custservice1.png";
import promo1 from '../Images/logo/promo1.png';
import m1 from '../Images/men/img1.avif';
import m2 from "../Images/men/img3.avif";
import m3 from '../Images/men/img4.avif';
import m4 from "../Images/men/img8.avif" ;
import m5 from "../Images/men/img5.avif";
import m6 from "../Images/men/img6.avif";
import m7 from "../Images/men/img7.avif";
import m8 from '../Images/men/img10.avif';
import w1 from '../Images/women/img1.avif';
import w2 from '../Images/women/img3.avif';
import w3 from '../Images/women/img4.avif';
import w4 from '../Images/women/img8.avif';
import w5 from '../Images/women/img6.avif';
import w6 from '../Images/women/img7.avif';
import w7 from '../Images/women/w1.webp';
import w8 from "../Images/women/imgp1.avif";
import ban2 from '../Images/bg/ban2.jpg';

// import a1 from "../Images/men/img1.avif"

const Home = () => {
    return ( 
        <>  
             <Carousel id='caro' fade>
      <Carousel.Item>
      <img id='cimg' src={a2} alt=""  width="100%"  height="550px"/>

        <Carousel.Caption>
        
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img id='cimg2' src={a1} alt=""  width="100%"  height="550px" />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img id='cimg3' src={a3} alt=""  width="100%"  height="550px" />

        <Carousel.Caption>
        
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img id='cimg4' src={a4} alt=""  width="100%"  height="550px" />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
    {/* ======================================================================================= */}
   <div id='fea' style={{textAlign:"center", paddingTop:"20px" , paddingBottom:"20px"}}><h1>Features</h1></div>
       
     
      <div id='cardf' style={{ backgroundColor:"MenuText"}}>
      <Card id='c1' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#fadbd8 "}}>
      <Card.Body >
        <Card.Title id='t1'  style={{fontSize:"23px"  }} >Free Delivery</Card.Title>
          <img id='m1' src={freede1} alt=""   width="100%"  height="100px"/>  
      </Card.Body>
    </Card>
     
    <Card id='c2' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#e8daef  "}}>
      <Card.Body>
        <Card.Title id='t2' style={{fontSize:"23px", marginBottom:"12px"}} >Happy Sell</Card.Title>
          <img id='m2' src={happysell1} alt=""   width="100%"  height="100px"/>  
      </Card.Body>
    </Card>

    <Card id='c3' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#ebf5fb "}}>
      <Card.Body>
        <Card.Title id='t3' style={{fontSize:"23px", marginBottom:"12px" }} >Coupons</Card.Title>
          <img id='m3' src={coupon1} alt=""   width="100%"  height="100px"/>  
      </Card.Body>
    </Card>

    <Card id='c4' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#fcf3cf "}}>
      <Card.Body>
        <Card.Title id='t4' style={{fontSize:"23px", marginBottom:"12px" }} >Service</Card.Title>
          <img id='m4' src={custservice1} alt=""   width="100%"  height="100px"/>  
      </Card.Body>
    </Card>

    <Card id='c5' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#fadbd8 "}}>
      <Card.Body>
        <Card.Title id='t5' style={{fontSize:"23px", marginBottom:"12px"}} >Promotions</Card.Title>
          <img id='m5' src={promo1} alt=""   width="100%"  height="100px"/>  
      </Card.Body>
    </Card>


      </div>



    {/* =========================================================================================== */}
   <div style={{textAlign:"center", padding:"30PX" , color:"black"}}><h1>Mens Wear</h1>
   <h5 style={{color:"grey"}}>Summer Collection New Modern Design</h5>
   </div>
     
   
   
   <div id="card">  
     <div id='car1'>
      <Card  style={{ width: '18rem' }}>
        <Card.Img id='cm1' variant="top" src={m1} />
          <Card.Body>
           <Card.Title>T-shirt</Card.Title>
            <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div> 

    {/* ====== */}
  <div id='car2'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm2' variant="top" src={m2} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
    {/* ======== */}
  <div id='car3'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm3' variant="top" src={m3} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>

      {/*=========  */}
  <div id='car4'> 
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm4' variant="top" src={m4}/>
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  </div>   
{/* ============= */}
<div id='car5'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm5' variant="top" src={m5} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
<div id='car6'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm6' variant="top" src={m6} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  </div>
 <div id='car7'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm7' variant="top" src={m7}  />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>    
    </div> 
   
 <div id='car8'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm8' variant="top" src={m8} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>  
 </div>  
  </div>   
{/* ================================================================================== */}


 <div  style={{paddingTop:"40px" , paddingBottom:"40px"}}>
  <img id='ban' src={ban2} alt="" width={"100%"}  height={"400px"} />
 </div>

{/* ============================================================================ */}
<div style={{textAlign:"center", padding:"30PX" , color:"black"}}><h1>Women Wear</h1>
   <h5 style={{color:"grey"}}>Most Trendy collections Design</h5>
   </div>                   


   <div id="card">  
     <div id='car1'>
      <Card  style={{ width: '18rem' }}>
        <Card.Img id='cm1' variant="top" src={w1} />
          <Card.Body>
           <Card.Title>T-shirt</Card.Title>
            <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div> 

    {/* ====== */}
  <div id='car2'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm2' variant="top" src={w2} />
      <Card.Body>
        <Card.Title>Dress</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$180</Card.Subtitle>
           <Card.Text>
         Designer printed Dress
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
    {/* ======== */}
  <div id='car3'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm3' variant="top" src={w3} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>

      {/*=========  */}
  <div id='car4'> 
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm4' variant="top" src={w4} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  </div>   
{/* ============= */}
<div id='car5'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm5' variant="top" src={w5} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
<div id='car6'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm6' variant="top" src={w6} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  </div>
 <div id='car7'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm7' variant="top" src={w7} />
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed t-shirt
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>    
    </div> 
   
 <div id='car8'>
    <Card  style={{ width: '18rem' }}>
      <Card.Img id='cm8' variant="top" src={w8} />
      <Card.Body>
        <Card.Title>black Cargo</Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">$80</Card.Subtitle>
           <Card.Text>
         Designer printed Cargo
         
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>  
 </div>  
  </div>   



        </>
     );
}
 
export default Home;