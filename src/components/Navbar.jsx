import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHamburger } from "react-icons/fa";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
const Navbar = ({setisdarkOn, isdarkOn, inputValue, setinputValue, handleSubmit}) => {
    const[hamOn, sethamOn]=useState(false);
  return (
   <div className="navbar-div  flex justify-between items-center px-6 py-7" style={{backgroundColor:isdarkOn?"#04030F":"white", color:isdarkOn?"white":"black"}}>
    <div className='brand-logo'>
        <Link to='/'><span className='font-bold text-center text-2xl opacity-70' >Nom</span><span className='font-bold text-2xl text-center text-yellow-200'>Yumm</span></Link></div>
    {hamOn&&(
        <div className='middle-div absolute top-16 left-0 w-full border-t border-gray-100 px-4 py-4 md:hidden bg-white ' style={{backgroundColor:isdarkOn?"#04030F":"white", color:isdarkOn?"white":"black"}}>
        <nav className='flex flex-col gap-4 font-serif capitalize text-m pr-5 items-end justify-center'>
            <Link to="/" className='transition ease-in-out duration-100 hover:text-yellow-300'>home</Link>
            <Link to="/about" className='transition ease-in-out duration-100 hover:text-yellow-300'>about us</Link>
            <Link to="/blog"  className='transition ease-in-out duration-100 hover:text-yellow-300'>blog</Link>
            <form onSubmit={handleSubmit}><input type="text" value={inputValue} className='border px-2 border-yellow-200 rounded' placeholder=" Search any dish" onChange={(e)=>{setinputValue(e.target.value)}}></input></form>
          

        </nav>
    </div>
    )}
    

    <div className='right-div flex gap-3 items-center'>
     <button onClick={()=>sethamOn(!hamOn)}><FaHamburger className='text-xl'/></button>
     <button  onClick={()=>setisdarkOn(!isdarkOn)}> {isdarkOn?<MdDarkMode className='text-2xl'></MdDarkMode>:<MdOutlineDarkMode className='text-2xl'></MdOutlineDarkMode>}</button>

        {/* <MdOutlineDarkMode /> */}

    </div>
   </div>
   
   
  )
}

export default Navbar