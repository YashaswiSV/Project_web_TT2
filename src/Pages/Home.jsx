import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import a1 from "../Images/men/img1.avif"

const Home = () => {
    return ( 
        <>  
             <Carousel id='caro' fade>
      <Carousel.Item>
      <img src="src/Images/bg/2.png" alt=""  width="100%"  height="550px"/>

        <Carousel.Caption>
        
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="src/Images/bg/1.png" alt=""  width="100%"  height="550px" />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="src/Images/bg/3.png" alt=""  width="100%"  height="550px" />

        <Carousel.Caption>
        
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="src/Images/bg/4.png" alt=""  width="100%"  height="550px" />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
    {/* ======================================================================================= */}
   <div style={{textAlign:"center", paddingTop:"20px" , paddingBottom:"20px"}}><h1>Features</h1></div>
       
     
      <div id='cardf' style={{ backgroundColor:"MenuText"}}>
      <Card id='c1' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#fadbd8 "}}>
      <Card.Body>
        <Card.Title style={{fontSize:"23px" }} >Free Delivery</Card.Title>
          <img src="src/Images/logo/freedel1.png" alt=""   width="100%"  height="100px"/>  
      </Card.Body>
    </Card>
     
    <Card id='c2' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#e8daef  "}}>
      <Card.Body>
        <Card.Title style={{fontSize:"23px", marginBottom:"12px"}} >Happy Sell</Card.Title>
          <img src="src/Images/logo/happysell1.png" alt=""   width="100%"  height="100px"/>  
      </Card.Body>
    </Card>

    <Card id='c3' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#ebf5fb "}}>
      <Card.Body>
        <Card.Title style={{fontSize:"23px", marginBottom:"12px" }} >Coupons</Card.Title>
          <img src="src/Images/logo/coupon1.png" alt=""   width="100%"  height="100px"/>  
      </Card.Body>
    </Card>

    <Card id='c4' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#fcf3cf "}}>
      <Card.Body>
        <Card.Title style={{fontSize:"23px", marginBottom:"12px" }} >Service</Card.Title>
          <img src="src/Images/logo/custservice1.png" alt=""   width="100%"  height="100px"/>  
      </Card.Body>
    </Card>

    <Card id='c5' style={{ width: '15rem' , alignItems:"center", backgroundColor:"#fadbd8 "}}>
      <Card.Body>
        <Card.Title style={{fontSize:"23px", marginBottom:"12px"}} >Promotions</Card.Title>
          <img src="src/Images/logo/promo1.png" alt=""   width="100%"  height="100px"/>  
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
        <Card.Img variant="top" src="src\Images\men\img4.avif" />
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
      <Card.Img variant="top" src="src/Images/men/img3.avif" />
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
      <Card.Img variant="top" src="src/Images/men/img4.avif" />
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
      <Card.Img variant="top" src="src/Images/men/img8.avif" />
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
      <Card.Img variant="top" src="src/Images/men/img6.avif" />
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
      <Card.Img variant="top" src="src/Images/men/img7.avif" />
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
      <Card.Img variant="top" src="src/Images/men/img9.avif" />
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
      <Card.Img variant="top" src="src/Images/men/img10.avif" />
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


 <div style={{paddingTop:"40px" , paddingBottom:"40px"}}>
  <img src="src/Images/bg/p3.jpg" alt="" width={"100%"}  height={"400px"} />
 </div>

{/* ============================================================================ */}
<div style={{textAlign:"center", padding:"30PX" , color:"black"}}><h1>Women Wear</h1>
   <h5 style={{color:"grey"}}>Most Trendy collections Design</h5>
   </div>                   


   <div id="card">  
     <div id='car1'>
      <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src="src/Images/women/img1.avif" />
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
      <Card.Img variant="top" src="src/Images/women/img3.avif" />
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
      <Card.Img variant="top" src="src/Images/women/img4.avif" />
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
      <Card.Img variant="top" src="src/Images/women/img8.avif" />
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
      <Card.Img variant="top" src="src/Images/women/img6.avif" />
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
      <Card.Img variant="top" src="src/Images/women/img7.avif" />
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
      <Card.Img variant="top" src="src/Images/women/w1.webp" />
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
      <Card.Img variant="top" src="src/Images/women/imgp1.avif" />
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