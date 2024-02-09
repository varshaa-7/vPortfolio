import {React} from 'react'
import { useRef } from 'react';
import Atropos from 'atropos/react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_favwghl', 'template_b8dcct2', form.current, '3oJB5F8OVYmJh0Cs0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }
    return (
        <div id="app">
            <Atropos className="my-atropos">
            <div className="py-16 bg-violet-200">
            <h2 className="text-xl text-violet-900 font-bold md:text-5xl">
                          Get In Touch
                        </h2>

                <div className="relative flex items-center justify-center h-screen min-h-[400px] sm:items-center">
                
                <form ref={form} onSubmit={sendEmail} className="w-full max-w-sm">
  <div className="md:flex md:items-center mb-4">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Enter your name" name='user_name' />
    </div>
  </div>


  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Email
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="Email" placeholder="Enter your Email" name='user_email'/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Subject
      </label>
    </div>
    
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="type" placeholder="Enter your Subject" name='subject'/>
    </div>
  </div>
  <div className="flex items-center mb-6">
  <div className="md:w-1/3">
  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
    Write message
  </label>
  </div>
  <div className="flex-grow">
    {/* Adjust the following classes to make it a larger text field */}
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      id="inline-full-name"
      type="text" name='message'
      placeholder="Enter your message"
    />
  </div>
</div>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button type='submit' className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        Send message
      </button>
    </div>
  </div>
</form>
                </div></div>
                </Atropos>
        </div>
    );
    }