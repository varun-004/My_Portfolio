import React from 'react'

export default function About() {
  return (
    <div className='w-[100%] h-[100%] sm:w-[100%] sm:h-[100%] bg-red-400 flex justify-center items-center' id="about">
      <div className='w-[100%] h-[100%] sm:w[100%] sm:h-[100%] bg-purple-400 mt-48 sm:mt-36'>
        <div className='w-[100%] h-[30%]  sm:w-[100%] sm:h-[40%] flex flex-col items-center sm:flex-row sm:justify-between bg-emerald-400'>
          <div className='w-[30%] h-[40%] sm:w-[18%] sm:h-[100%] bg-yellow-200 rounded-full' style={{backgroundImage:`URL("src/Photes/me.jpg")`,backgroundSize:"cover"}}>

          </div>

          <div className='w-[100%] h-[60%] sm:w-[70%] sm:h-[100%] bg-orange-300 flex flex-col p-2 sm:p-10'>
            <div className='font-bold text-xl sm:text-3xl'>
              Who am i ?
            </div>
            <div className='font-medium text-xs sm:text-lg sm:font-medium text-wrap '>
              "Hello, I'm Varun I'm from Chitradurga and currently pursuing my Bachelor's in Computer Applications(BCA).
              I am passionate about web development and aspire to grow as a full-stack developer. My goal is to make a positive impact through technology. 
              Feel free to explore my website and learn more about my journey!"
            </div> 
            <div className='w-[100%] sm:w-[30%] sm:h-[50%] flex justify-around items-end'>
              <a href='https://api.whatsapp.com/send/?phone=9036287917&text&type=phone_number&app_absent=0'><i id="social_media" class="fi fi-brands-whatsapp"></i></a>
              <a href="https://www.instagram.com/varun_g_a_04/" ><i id="social_media" class="fi fi-brands-instagram"></i></a>
              <a href="https://app.slack.com/client/T07JQA2F570/C07JU2WV9MK" ><i id="social_media" class="fi fi-brands-slack"></i></a>           
              <a href="https://www.linkedin.com/in/varun-g-a-112a4b301/" ><i id="social_media" class="fi fi-brands-linkedin"></i></a>       
              <a href="https://x.com/Varun_g_a_" ><i id="social_media" class="fi fi-brands-twitter-alt-circle"></i></a>
            </div>
          </div>
        </div>



        <div className='w-[100%] h-[60%] sm:w-[100%] sm:h-[50%] bg-red-200 flex flex-col'>
          <div className='w-[100%] h-[8%] sm:w-[100%] sm:h-[10%] bg-emerald-100 font-bold text-3xl text-center'>Education detalis</div>
            <div className='w-[100%] h-[92%] sm:w-[100%] sm:h-[90%] flex flex-col sm:flex-row'>  
              <div className='w-[100%] h-[34%] sm:w-[34%] sm:h-[100%] bg-red-500 flex flex-col justify-evenly'>
                <h1 className='font-bold text-center text-3xl sm:text-4xl'>Graduation</h1>
                <h1 className='text-center text-2xl sm:text-3xl' >Bachelor in computer applications</h1>
                <h1 className='text-center text-lg sm:text-xl'>Interface college of computer applications</h1>
                <h1 className='text-center text-base sm:text-xl'>Davanagere University</h1>
                <h1 className='text-center text-base sm:text-xl'>2022-2025</h1>
              </div>
              <div className='w-[100%] h-[33%] sm:w-[33%] sm:h-[100%] bg-pink-400 flex flex-col justify-evenly'>
                <h1 className='font-bold text-center text-3xl sm:text-4xl'>Pre-university-college</h1>
                <h1 className='text-center text-lg sm:text-2xl'>S T J P U College Davanagere</h1>
                <h1 className='text-center text-base sm:text-xl'>2020-2022</h1>
              </div>
              <div className='w-[100%] h-[33%] sm:w-[33%] sm:h-[100%] bg-blue-300 flex flex-col justify-evenly'>
                <h1 className='font-bold text-center text-3xl sm:text-4xl'>High School</h1>
                <h1 className='text-center text-xl sm:text-2xl'>S T J High school Davanagere</h1>
                <h1 className='text-center text-base sm:text-xl'>2018-2020</h1>

              </div>

            </div>



        </div>



      </div>
    </div>
  )
}
