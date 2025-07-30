import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
const Navbar = ({setisdarkOn, isdarkOn}) => {
    
  return (
   <div className="navbar-div  flex justify-between items-center px-6 py-7" style={{backgroundColor:isdarkOn?"#04030F":"white", color:isdarkOn?"white":"black"}}>
    <div className='brand-logo'>
        <Link to='/'><span className='font-bold text-xl opacity-70' >Nom</span><span className='font-bold text-xl text-yellow-200'>Yumm</span></Link></div>
    <div className='middle-div'>
        <nav className='flex gap-[19vh] font-serif capitalize text-m items-center justify-center'>
            <Link to="/" className='transition ease-in-out duration-100 hover:text-yellow-300'>home</Link>
            <Link to="/about" className='transition ease-in-out duration-100 hover:text-yellow-300'>about us</Link>
            <Link to="/blog"  className='transition ease-in-out duration-100 hover:text-yellow-300'>blog</Link>
          

        </nav>
    </div>

    <div className='right-div'>
      
     <button  onClick={()=>setisdarkOn(!isdarkOn)}> {isdarkOn?<MdDarkMode className='text-2xl'></MdDarkMode>:<MdOutlineDarkMode className='text-2xl'></MdOutlineDarkMode>}</button>

        {/* <MdOutlineDarkMode /> */}

    </div>
   </div>
   
   
  )
}

export default Navbar