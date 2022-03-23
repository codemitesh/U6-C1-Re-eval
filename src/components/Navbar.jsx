import { Link } from "react-router-dom";
import "./Navbar.css"
const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title : "About",
    link : "/about"
  },
  {
    title : "Products",
    link : "/products"
  }

];
export const Navbar = () => {
  return (
 
 links.map((e,i)=>{
   return <div className="navbar" key={i}>
     <Link className="Link" to={e.link}>{e.title}</Link>
   </div>
 })
  )
    
};
