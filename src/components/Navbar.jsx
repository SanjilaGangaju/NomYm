import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHamburger } from "react-icons/fa";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
const Navbar = ({setisdarkOn, isdarkOn, inputValue, setinputValue, handleSubmit}) => {
    const[hamOn, sethamOn]=useState(false);
    
    const Navlinks = ()=>(
        <>
            <Link to="/" className='transition ease-in-out duration-100 hover:text-yellow-300'>home</Link>
            <Link to="/about" className='transition ease-in-out duration-100 hover:text-yellow-300'>about us</Link>
            <Link to="/blog"  className='transition ease-in-out duration-100 hover:text-yellow-300'>blog</Link>
          

        
        </>
    )
  return (
   <div className="navbar-div  flex justify-between items-center px-6 py-7" style={{backgroundColor:isdarkOn?"#04030F":"white", color:isdarkOn?"white":"black"}}>
    <div className='brand-logo'>
        <Link to='/'><span className='font-bold text-center  text-2xl opacity-70' >Nom</span><span className='font-bold text-2xl text-center text-yellow-200'>Yumm</span></Link></div>
        
        <div className='hidden md:flex items-center justify-center middle-div  w-full  px-4 py-4 bg-white' style={{backgroundColor:isdarkOn?"#04030F":"white", color:isdarkOn?"white":"black"}}>
        <nav className='flex  gap-10 font-serif capitalize text-m pr-5 items-center justify-center'>
            <Navlinks></Navlinks>
            <form onSubmit={handleSubmit}><input type="text" value={inputValue} className={`border px-1 py-1 text-[0.8rem] border-yellow-300 rounded  placeholder:text-[0.8rem] placeholder:text-center ${isdarkOn?'placeholder:text-white':'placeholder:text-black'} focus:outline-none`} placeholder=" Search any dish" onChange={(e)=>setinputValue(e.target.value)}></input></form>

          

        </nav>
        </div>
    
    {hamOn&&(
        <div className='middle-div absolute top-16 left-0 w-full border-t z-50 border-gray-100 px-4 py-4 md:hidden bg-white' style={{backgroundColor:isdarkOn?"#04030F":"white", color:isdarkOn?"white":"black"}}>
        <nav className='flex flex-col gap-3 font-serif capitalize text-m pr-5 items-end justify-center'>
            <Navlinks></Navlinks>
            <form onSubmit={handleSubmit}><input type="text" value={inputValue} className='border px-1 py-1 text-[0.8rem] border-yellow-300 rounded  placeholder:text-[0.8rem] placeholder:text-center focus:outline-none' placeholder=" Search any dish" onChange={(e)=>setinputValue(e.target.value)}></input></form>

          

        </nav>
    </div>
    )}
    

    <div className=' right-div flex gap-3 items-center'>
     <button onClick={()=>sethamOn(!hamOn)}><FaHamburger className='text-xl md:hidden'/></button>
     <button  onClick={()=>setisdarkOn(!isdarkOn)}> {isdarkOn?<MdDarkMode className='text-2xl'></MdDarkMode>:<MdOutlineDarkMode className='text-2xl'></MdOutlineDarkMode>}</button>

        {/* <MdOutlineDarkMode /> */}

    </div>
   </div>
   
   
  )
}

export default React.memo(Navbar);