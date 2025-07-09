import React from "react"

export default function Contact() {
  return (
    <div className='w-[100%] h-[100%] sm:w-[100%] sm:h-[100%] bg-pink-600 flex flex-col justify-center items-center ' id="contact">
      <div className='w-[90%] h-[80%] sm:w-[50%] sm:h-[80%] bg-yellow-200 flex flex-col'>
        <div className='w-[100%] h-[10%] sm:w-[100%] sm:h-[15%] bg-purple-400 flex flex-col justify-center items-center'>
          <h1 className='font-bold text-3xl sm:text-4xl'>Get in Touch</h1>
          <h1 className='text-lg'>Send a message </h1>
        </div>

        <div className='w-[100%] h-[25%] sm:w-[100%] sm:h-[20%] flex flex-col justify-center sm:flex-row bg-blue-400'>
          <div className='w-[100%] h-[35%] sm:w-[100%] sm:h-[100%] flex flex-col pl-10 sm:pt-4'> 
            <label className='text-lg sm:text-xl'>First Name</label>
            <input type='text' placeholder='Please enter first name' className='w-[90%] h-[100%] sm:w-[80%] sm:h-[40%] border-x-2 border-y-2 border-black'></input>
          </div>
          <div className='w-[100%] h-[35%] sm:w-[100%] sm:h-[100%] flex flex-col pl-10 sm:pt-4'>
            <label className='text-lg sm:text-xl'>Last Name</label>
            <input type='text' placeholder='Please enter last name' className='w-[90%] h-[100%] sm:w-[80%] sm:h-[40%] border-x-2 border-y-2 border-black'></input>
          </div>
        </div>

        <div className='w-[100%] h-[25%] sm:w-[100%] sm:h-[20%] flex flex-col justify-center sm:flex-row bg-emerald-300'>
          <div className='w-[100%] h-[35%] sm:w-[100%] sm:h-[100%] flex flex-col pl-10 sm:pt-4'>
            <label className='text-lg sm:text-xl'>Email</label>
            <input type='text' placeholder='Please enter email' className='w-[90%] h-[100%] sm:w-[80%] sm:h-[40%] border-x-2 border-y-2 border-black'></input>
          </div>
          <div className='w-[100%] h-[35%] sm:w-[100%] sm:h-[100%] flex flex-col pl-10 sm:pt-4'>
            <label className='text-lg sm:text-xl'>Phone Number</label>
            <input type='text' placeholder='Please enter phone number' className='w-[90%] h-[100%] sm:w-[80%] sm:h-[40%] border-x-2 border-y-2 border-black'></input>
          </div>
        </div>

        <div className='w-[100%] h-[25%] sm:w-[100%] sm:h-[35%] bg-blue-300 flex flex-col pl-10 pt-2 '>
          <label className='text-lg sm:text-xl'>Message</label>
          <input type='text' placeholder='Please enter message' className='w-[90%] h-[65%] sm:w-[90%] sm:h-[70%] border-x-2 border-y-2 border-black'></input>
        </div>

        <div className='w-[100%] h-[10%] bg-red-200 pl-10 flex items-center'>
          <button type='submit' className='w-[90%] h-[60%] bg-yellow-700 hover:text-white sm:hover:text-white'>Submit</button>
        </div>
        

      </div>
      <div className='w-[90%] h-[5%] sm:w-[50%] sm:h-[5%] flex justify-around sm:justify-evenly sm:pt-8'>
        <a href='https://api.whatsapp.com/send/?phone=9036287917&text&type=phone_number&app_absent=0'><i id="social_media" className="fi fi-brands-whatsapp"></i></a>
        <a href="https://www.instagram.com/varun_g_a_04/" ><i id="social_media" className="fi fi-brands-instagram"></i></a>
        <a href="https://app.slack.com/client/T07JQA2F570/C07JU2WV9MK" ><i id="social_media" className="fi fi-brands-slack"></i></a>           
        <a href="https://www.linkedin.com/in/varun-g-a-112a4b301/" ><i id="social_media" className="fi fi-brands-linkedin"></i></a>       
        <a href="https://x.com/Varun_g_a_" ><i id="social_media" className="fi fi-brands-twitter-alt-circle"></i></a>
      </div>
      




    </div>
  )
}
