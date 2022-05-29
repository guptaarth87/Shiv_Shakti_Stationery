import React from 'react'
import {useState , useEffect} from "react";
import {db} from '../Firebaseconfig';

import {
  collection ,
  addDoc , 
  } from 'firebase/firestore'

function Contact() {
  const [newName,setNewName]=useState("");
  const [newQuery,setNewQuery]=useState("");
  const [newNumber,setNewNumber]=useState("");

  const usersCollectionRef =collection(db , "customer")

  const createUser=async ()=>{
    await addDoc(usersCollectionRef,{name:newName,query:newQuery,Mobile_no:newNumber});
    window.alert("your data submitted successfully!");
    window.location.reload();
}

  return (
   <>
     <div className="container cardz main ">
       <h2 className="heading">Shiv Shakti Shakti Stationery, Rau</h2>
    <h3>Contact Us at 9630385465!</h3>
       <div className="row">

           <div className="col-lg-6 col-md-6 col-sm-12">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.4816765562878!2d75.80665881496068!3d22.63582288515035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fbe2e4376a43%3A0xcf77a4710b00f9d2!2sShiv%20Shakti%20Stationery!5e0!3m2!1sen!2sin!4v1653815626673!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
           
           <div className=" col-lg-6 col-md-5 col-sm-12">
           <br/>
           <br/>
          
         <div className="mb-3">
             <label for="exampleFormControlInput1" className="form-label query">Enter Your Name</label>
             <input type="text"
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name"
              onChange={(event)=>{
                setNewName(event.target.value);
              }}
              ></input>
           </div>

           <div className="mb-3">
             <label for="exampleFormControlInput1" className="form-label query">Enter Mobile number.</label>
             <input type="text"
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name"
              onChange={(event)=>{
                setNewNumber(event.target.value);
              }}
              ></input>
           </div>

           <div class="mb-3">
             <label for="exampleFormControlTextarea1" className="form-label  query">Your query</label>
             <textarea 
             className="form-control" 
             id="exampleFormControlTextarea1" 
             rows="3"
             
             onChange={(event)=>{
              setNewQuery(event.target.value);
            }}
             ></textarea>
             <br></br>
                 <button className="btn btn-primary" onClick={createUser}>Submit</button>
           </div>
           </div>
       </div>
    </div>
   </>

  )
}

export default Contact