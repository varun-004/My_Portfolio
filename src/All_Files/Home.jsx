import React ,{useState} from 'react'

export default function Home() {
    const [menu, setMenu] = useState(false);

    const toggleMenu= ()=>{
        setMenu(!menu);
    }

  return (
    <div className='w-[100%] h-[100%] sm:w-[100%] sm:h-[100%]  bg-pink-400' id="home">
        <nav className='w-[100%] h-[10%] sm:w-[100%] sm:h-[10%]  bg-blue-500 flex fixed'>
            <div className='w-[20%] sm:w-[40%] sm:h-[100%]  flex items-center justify-start'>
                <a href="#home"><img src='src\Photes\Logo.png' alt='logo' className='w-[90%] sm:w-[15%] '></img></a>
            </div>

            <div className='w-[80%] sm:w-[60%] sm:h-[100%] '>
                <ul id="navFont" className='hidden sm:flex sm:justify-around sm:p-6 '>
                    <a href="#home"><li className='hover:text-white'>Home</li></a>
                    <a href="#about"><li className='hover:text-white'>About</li></a>
                    <a href="#skills"><li className='hover:text-white'>Skills</li></a>
                    <a href="#projects"><li className='hover:text-white'>Projects</li></a>
                    <a href="#contact"><li className='hover:text-white'>Contact</li></a>               
                </ul>
                <div class="menu-icon" className='display sm:hidden pl-72 pt-4 text-6xl' onClick={toggleMenu} >

                        &#9776;
                </div> 
                
            </div>
        </nav>     
        {/* Dropdown Menu for Mobile (Conditionally Rendered) */}
        {menu && (
                <div className="absolute top-[10%] right-0 w-full bg-blue-500 flex flex-col items-center sm:hidden z-20">
                    <a
                        href="#home"
                        onClick={() => setMenu(false)}
                        className="p-4 hover:text-white"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={() => setMenu(false)}
                        className="p-4 hover:text-white"
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        onClick={() => setMenu(false)}
                        className="p-4 hover:text-white"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        onClick={() => setMenu(false)}
                        className="p-4 hover:text-white"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        onClick={() => setMenu(false)}
                        className="p-4 hover:text-white"
                    >
                        Contact
                    </a>
                </div>
            )} 
         
         
        <div className='w-[100%] h-[90%]  flex justify-center items-end'>
            <div className='w-[85%] h-[85%] sm:w-[90%] sm:h-[90%] bg-emerald-400 flex flex-col-reverse sm:flex-row sm:justify-start  sm:items-center'>
                <div className='w-[100%] h-[50%] sm:w-[70%] sm:h-[100%] flex flex-col justify-center gap-10 pl-12 sm:flex-col sm:justify-center sm:pl-32 sm:gap-16  bg-orange-300'>
                    <h2 id="threeLine" className='text-2xl sm:text-6xl'><span class="animate">Hi...</span></h2>
                    <h2 id="threeLine" className='text-2xl sm:text-6xl'>I'm Varun...</h2>
                    <h2 id="threeLine" className='text-wrap sm:text-2xl'>"A Fresher IT Professional Crafting Modern Web Experiences".</h2>
                </div>
                <div className='w-[100%] h-[50%] rounded-full sm:w-[30%] sm:h-[70%] sm:rounded-full bg-blue-400' style={{backgroundImage:`URL("src/Photes/me.jpg")`,backgroundSize:"cover"}}>                    

                </div>
            </div>
    
        </div>



    </div>
  )
}