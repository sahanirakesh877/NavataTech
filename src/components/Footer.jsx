import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
       <footer class=" body-font bg-primary rounded-lg overflow-hidden ">
      <div class="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
         <p className='text-white text-xl'>NAVATA <span className=''>TECH</span></p>
          <p class="mt-2 text-sm text-sec">  With our innovative technology and dedicated team, we strive to elevate your business to new heights. 
</p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-sec tracking-widest text-sm mb-3">QUICK LINKS</h2>
            <nav class="list-none mb-10">
              <li>
                <Link  to={'/'} class="text-white">Home</Link>
              </li>
              <li>
                <Link to={'/services'} class="text-white">Services</Link>
              </li>
              <li>
                <Link to={'/about'} class="text-white">About Us</Link>
              </li>
             
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-sec tracking-widest text-sm mb-3">DEPARTMENTS</h2>
            <nav class="list-none mb-10">
              <li>
                <Link class="text-white">Technology</Link>
              </li>
              <li>
                <Link class="text-white">Media Support</Link>
              </li>
              <li>
                <Link class="text-white">Business Deals</Link>
              </li>
             
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-sec tracking-widest text-sm mb-3">CONNECT  US</h2>
            <nav class="list-none mb-10">
              <li>
                <a href='/contact' class="text-white">Contact Us</a>
              </li>
              <li>
                <a class="text-white">News & Updates</a>
              </li>
            
              <li>
                <a href='/jobs' class="text-white">Career Opportunities</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-sec tracking-widest text-sm mb-3">FOLLOW US</h2>
            <nav class="list-none mb-10">
              <li>
                <a href='https://www.facebook.com/profile.php?id=61554605785487' class="text-white">FaceBook</a>
              </li>
              <li>
                <a href='https://wa.me/+9779704501215' class="text-white">WhatsApp</a>
              </li>
              <li>
                <a href='https://www.instagram.com/techhnavata/?hl=en' class="text-white">LinkedIn</a>
              </li>
             
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-200">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-sm text-center sm:text-left">© 2024 NAVATA —
            <a href="https://whatsapp.com/knyttneve" rel="noopener noreferrer" class="text-gray-900 ml-1" target="_blank">TECH</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-primary hover:text-sec " href='https://www.facebook.com/profile.php?id=61554605785487'>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            
            <a class="ml-3 text-primary hover:text-sec" href="https://www.instagram.com/techhnavata/?hl=en">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-primary hover:text-sec" href='https://www.linkedin.com/in/navata-tech-57288a2ab/'>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      
    </footer>
    </>
  )
}

export default Footer

