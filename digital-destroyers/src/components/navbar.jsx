import React, {useState} from 'react'
// import {Link} from 'react-scroll';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../logo.svg'
import duck from '../images/duck.jpg'

const NavBar1 = () => {
    
    const [nav, setNav] = useState(false)

    const handleNav = ()=>{
      setNav(!nav)
    }

    const handleClose=()=>{
        setNav(false)
    } 
    
    return (
    <div className='fixed flex justify-between items-center h-20 w-full mx-0 px-6 text-white inset-x-0 top-0 left-0 z-40 bg-black bg-opacity-90'>
        {/* <h1 className='cursor-pointer text-3xl font-bold left-2 m-4'>AIR INDIA</h1> */}
        {duck}
        
        <ul className = 'hidden md:flex'>
            {/* <li className='p-7 font-sans'><Link to ="About" spy={true} smooth={true} offset={10} duration={500} className="cursor-pointer hover:underline hover:font-light hover:decoration-sky-700">About Us</Link> </li> */}
            {/* <li className='p-7 font-sans'><Link to ="Vision" spy={true} smooth={true} offset={10} duration={500} className="cursor-pointer hover:underline hover:font-light hover:decoration-sky-700">Vision </Link></li> */}
            {/* <li className='p-7 font-sans'><Link to ="Dept" spy={true} smooth={true} offset={10} duration={500} className="cursor-pointer hover:underline  hover:font-light hover:decoration-sky-700">Departments</Link></li> */}
            {/* <li className='p-7 font-serif'><Link to= "FAQ" spy={true} smooth={true} offset={10} duration={500} className="cursor-pointer hover:underline">FAQs</Link></li> */}
            {/* <li className='p-7 font-sans'><Link to= "Contact" spy={true} smooth={true} offset={10} duration={500} className="cursor-pointer hover:underline hover:font-light hover:decoration-sky-700">Contact Us</Link></li> */}
            <li className="p-7 font-sans cursor-pointer hover:underline hover:font-light hover:decoration-sky-700">Login</li>
            {/* <li className="p-7 font-sans cursor-pointer hover:underline hover:font-light hover:decoration-sky-700">Contact Us</li> */}
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ?<AiOutlineClose onClose={handleClose} size={20}/>:<AiOutlineMenu size={20}/> }
       </div>
        <div  onClose={handleClose} className={!nav ? 'block md:hidden fixed left-0 top-0 w-75%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl font-bold left-0 m-7 uppercase'>AIR INDIA</h1>
            <ul className='pt-4 uppercase'>
                {/* <li className='p-6 border-b border-gray-200 font-sans'><Link to ="About" className="cursor-pointer">About Us</Link></li> */}
                {/* <li className='p-6 border-b border-gray-200 font-sans'><Link to ="Vision" className="cursor-pointer">Vision</Link></li> */}
                {/* <li className='p-6 border-b border-gray-200 font-sans'><Link to ="Dept" className="cursor-pointer">Departments</Link></li> */}
                {/* <li className='p-6 border-b border-gray-200 font-serif'><Link to ="FAQ" className="cursor-pointer">FAQs</Link></li> */}
                {/* <li className='p-6 border-b border-gray-200 font-serif'><Link to ="Contact" className="cursor-pointer">Contact Us</Link></li> */}
                <li className="p-6 border-b border-gray-200 font-serif cursor-pointer">Login</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar1
