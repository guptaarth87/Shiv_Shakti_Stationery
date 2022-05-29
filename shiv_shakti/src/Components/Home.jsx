import React from 'react'
import '../Styles/Home.css'
import {ReactComponent as Business} from "../Assets/business.svg"
import Header from '../Components/Header.jsx';
//import {ReactComponent as Landing} from "../Assets/landing1.jpg"
import {Link} from "react-router-dom";

function Home() {
    // const data=[
    //     {
    //         Title:"Books",
    //         Description:"All type of Notebooks/Registars available and diary for gift and personal use.",
    //         Img_url:"../Assets/book_stack.jpg"
    //     }
    // ];
    // const urls=["../Assets/book_stack.jpg"]
  return (
    <>
     <div className="container">
       <h2 className="Title">Shiv Shakti Stationery ,Rau</h2>
       <Header/>
       <div className="row">
       <img src={require('../Assets/landing1.jpg')} className="col-12 landing_img" alt="..."/>
       </div>
       <br></br><br></br><br></br>
       <div className="row">
          <h4 className="col-lg-5 col-md-5 col-sm-12"> We believe  in "Customer satisfaction is the most important service we can provide to our Community!"</h4>
          <Business className="col-lg-5 col-md-5 col-sm-12" style={{"height":"10rem"}}></Business>
          </div>
      <br></br>   <br></br><br></br><br></br>
      <div className="row"><h3>What we provide!</h3></div>
      <div className="row">
     
            <div class="card col-lg-3 col-md-4 col- sm-12" >
            <img src={require('../Assets/book_stack.jpg')} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Notebooks</h5>
                <p class="card-text">All type of Notebooks/Registars available and diary for gift and personal use at best prices.</p>
                <Link to="/contact" class="btn btn-primary">Contact have a query?</Link>
            </div>
            </div>

            <div class="card col-lg-3 col-md-4 col- sm-12" >
            <img src={require('../Assets/Blue_pink_books.jpg')} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Books</h5>
                <p class="card-text">We provide Govn./private school to college level books plus competetive books.If any book is not available then we try our best to make it available to you in 3-5 working days.</p>
                <Link to="/contact" class="btn btn-primary">Contact have a query?</Link>
            </div>
            </div>

            <div class="card col-lg-3 col-md-4 col- sm-12" >
            <img src={require('../Assets/books_bulb.jpg')} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Stationery plus art and craft Accessories</h5>
                <p class="card-text">All type of stationery and stuff related to art and craft activity available at unbeatable prices .</p>
                <Link to="/contact" class="btn btn-primary">Contact have a query?</Link>
            </div>
            </div>

            <div class="card col-lg-3 col-md-4 col- sm-12" >
            <img src={require('../Assets/school.jpg')} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Plastic items and bags</h5>
                <p class="card-text">All type of plastic items like tiffen, water bottles, box etc are available plus school, college and laptop bags are available .</p>
                <Link to="/contact" class="btn btn-primary">Contact have a query?</Link>
            </div>
            </div>
            </div>
            <br></br><br></br><br></br>  
        <div className="row"><strong>General FAQ's</strong></div>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Schools whose books and stationery are available?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        We provide books of Medicaps International school, St. Norbert School, Jeevan Jyoti, New Horizon International School, Mandhar School pluss all type of government school books and NCERT Books are available.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How to order a book if it is not available?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        You can directly contact on 9630385465. Generally we ask for depositing some initial price and then try to ake it available in 3-5 working days.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Quality of products
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        We provide best in class products and this is the reason why schools and educational firms are choosing us.
      </div>
    </div>
  </div>
</div>
<br></br><br></br><br></br> 
<footer>
    <div className="footer">
      <h2 className="fot">Shiv Shakti Stationery Contact on:- 9630385465</h2>
         </div>
</footer>

    
   </div> </>
  )
}

export default Home