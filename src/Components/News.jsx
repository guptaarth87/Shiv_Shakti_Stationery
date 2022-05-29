import React from 'react'
import {useState , useEffect} from "react";
import {db} from '../Firebaseconfig';
import {ReactComponent as Newsx} from "../Assets/News.svg"
import { 
  collection ,
  getDocs,
  } from 'firebase/firestore'
import {Link} from "react-router-dom";
import '../Styles/News.css'

export default function News() {
    const [news ,setUsers]=useState([]);
    const newsCollectionRef =collection(db , "News")
   
    useEffect(()=>{
    
        const getUsers=async ()=>{
           const data = await getDocs(newsCollectionRef);
            console.log(data);
          setUsers(data.docs.map((doc)=>({...doc.data(),
            id :doc.id})))
        };
          
    
        getUsers()
      },[] )
  return (
    <div className="container">
        <h2 className="news_title">Notifications and updates</h2>
        <div className="row ">
            <div className="col-lg-6 col-md-5 col-sm-12">
            {
        news.map((newx)=>{
          return(
            <>
            <div className="">
              {" "}
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       {newx.Title}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {newx.Description}<br></br>
      <Link to="/contact" class="btn btn-primary">Contact have a query?</Link>       
      </div>
    </div>
  </div>
  
</div>
                    
            </div>
            </>
            
          );
        })
      }
            </div>
          <Newsx className="col-lg-6 col-md-5 col-sm-12" />
        </div>
         
   </div>
  )
}
