import React from 'react'
import { Link} from 'react-router-dom';
import '../Styles/Header.css';

export default function Header() {
  return (
    <div className="nav">
    <Link to="Contact" className="Contact navlinks ">Contact us</Link>
    <Link to="News" className="News navlinks">News/Updates</Link>
   
    
</div>
  )
}
