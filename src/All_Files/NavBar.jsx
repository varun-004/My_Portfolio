import React from 'react'

export default function NavBar() {
  return (
    <div className='w-[100%] h-[100%] sm:w-[100%] sm:h-[100%] bg-pink-400'>
        <nav className='w-[100%] h-[10%] sm:w-[100%] sm:h-[10%] bg-blue-500 flex '>
            <div className='w-[20%] sm:w-[40%] sm:h-[100%]  flex items-center justify-start'>
                    <img src='src\Photes\Logo.png' alt='logo' className='w-[90%] sm:w-[15%]'></img>
            </div>

            <div className='w-[80%] sm:w-[60%] sm:h-[100%]'>
                <ul id="navFont" className='hidden  sm:flex sm:justify-around sm:p-6 '>
                    <li className='hover:text-white'>Home</li>
                    <li className='hover:text-white'>About</li>
                    <li className='hover:text-white'>Skills</li>
                    <li className='hover:text-white'>Projects</li>
                    <li className='hover:text-white'>Contact</li>               
                </ul>
                <div class="menu-icon" className='display sm:hidden pl-72 pt-4 text-6xl' >
                        &#9776;
                </div> 
            </div>
        </nav>       
        


    </div>
  )
}
