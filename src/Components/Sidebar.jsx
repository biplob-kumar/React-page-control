import React from 'react'

import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaHome
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Home from '../Page/Home';

const Sidebar = ({children}) => {

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/home",
      name: "Home",
      icon: <FaHome/>
    },
  
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />
    }
  ]
  return (
    <div className='container'>
      <div className='sidebar'>
        <div className="top_section">
          <h1 className="logo">BIPLOB</h1>
        
        </div>
        {
          menuItem.map((item,index)=>(
              <NavLink to={item.path} key={index} className='link' activeClassName='active'>
                 <div className="icon">{item.icon}</div>
                 <div className='link_text'>{item.name}</div>
              </NavLink>
          ))
        }
      </div>
      <main> {children} </main>
    </div>
  )
}

export default Sidebar