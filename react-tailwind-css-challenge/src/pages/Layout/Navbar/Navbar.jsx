//import built-in module
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
//import style for Navbar
import './navbar.style.css';
//import button ui component
import Button from '../../../components/ui/Button';

const Navbar = () => {
    //state for responsive section visibility
    const [visible , setVisible] = useState(false);

    return(
        <header>
            <nav className='navbar'>
                <div className='nav_left'>
                    <h2 className='logo'>Tripster</h2>
                    <ul className='max-[910px]:hidden'>
                        {
                            [
                                ['Properties' , '/property' , 1],
                                ['Attractions' , '/attraction' ,2],
                                ['Popular' , '/popular' ,3]
                            ].map(([title,  url, index])=>(
                                <a href={url} className='nav_link' key={index}>{title}</a>
                            ))
                        }
                    </ul>
                </div>
                <button 
                    data-collapse-toggle="navbar-default" 
                    type="buton" 
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg min-[910px]:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                    aria-controls="natvbar-default" 
                    aria-expanded="false"
                    onClick={()=>{setVisible(!visible)}}
                    >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className='nav_right'>
                    <Button className={"btn btn-outline"} content={"Sign Up"} handleClick={()=>{alert('SignUp Clicked!')}}/>
                    <Button className={"btn btn-fill"} content={"Log  in"} handleClick={()=>{alert('Login Clicked!')}}/>
                </div>
                {/* responsive section */}
                <div className={` ${visible ? "" : "hidden"} bg-gray-200 shadow-2xl absolute p-3 right-0 top-0 h-full float-right w-1/3 z-10`}>
                    <button onClick={()=>{setVisible(!visible)}} className='float-right top-2 right-2 absolute'><FontAwesomeIcon icon={faXmark} className='w-6 h-6 bg-gray-200'/></button>
                    <div className='flex flex-col justify-between mt-20 bg-gray-200'>
                        <ul className='flex flex-col items-center bg-gray-200'>
                            {
                                [
                                    ['Properties' , '/property' , 1],
                                    ['Attractions' , '/attraction' ,2],
                                    ['Popular' , '/popular' ,3]
                                ].map(([title,  url, index])=>(
                                    <a href={url} className='bg-gray-200 w-full shadow p-2 text-center mt-5 hover:-translate-y-2' key={index}>{title}</a>
                                ))}
                        </ul>
                        <button className=' w-full shadow-md p-2 text-center mt-5 hover:-translate-y-2 bg-blue-600 text-white rounded-3xl' onClick={()=>{alert('Login Clicked')}}>Log in</button>
                        <button className=' w-full shadow-md p-2 text-center mt-5 hover:-translate-y-2 bg-blue-600 text-white rounded-3xl' onClick={()=>{alert('Sign up Clicked')}}>Sign up</button>
                    </div>
                </div>
                {/* responsive section end */}
            </nav>
        </header>
    )
}

export default Navbar;