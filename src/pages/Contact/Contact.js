import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className='lg:h-[900px] border-b-2 border-gray-300 my-20' id='7'>
            <div className='text-center mb-10'>
                <h2 className='text-red-500'>Contact With Me</h2>
                <h1 className='text-5xl font-extrabold mb-5 uppercase'>Contact</h1>
            </div>

            <div className='lg:flex gap-5 mx-10 mb-20'>
                <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
                    <div className='p-10'>
                        <img class="object-cover w-full h-56 rounded-lg" src="https://davemcloughlin.com/images/general/contact-us.jpg" alt="avatar" />

                        <div class="py-5">
                            <a href="#" class="block text-2xl font-bold text-gray-800 dark:text-white mb-5" tabindex="0" role="link">Jubayer Khan</a>
                            <p class="text-lg text-gray-700 dark:text-gray-200 mb-5">Web Developer</p>
                            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vitae.</p>
                            <p className='mb-10'>Phone: +8801713262172 <br />email: jubayerkhan711@gmail.com</p>
                            <p className='text-lg font-semibold mb-10'>Find with me</p>
                            <div className="flex justify-between gap-2 items-center mt-3 -mx-2  w-60">
                                <a alt="" href="https://www.facebook.com/jubayerkhan993" className='bg-gray-200 p-3 rounded-md hover:text-white hover:bg-sky-500 transition duration-300'>
                                    <FaFacebookF className='text-xl' />
                                </a>
                                <a alt="" href="https://www.linkedin.com/in/khanjubayer/" className='bg-gray-200 p-3 rounded-md hover:text-white hover:bg-sky-500 transition duration-300'>
                                    <FaLinkedinIn className='text-xl' />
                                </a>
                                <a alt="" href="https://github.com/khanjubayer93" className='bg-gray-200 p-3 rounded-md hover:text-white hover:bg-sky-500 transition duration-300'>
                                    <FiGithub className='text-xl' />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <section class="w-full p-6 bg-white rounded-md shadow-md dark:bg-gray-800 mt-5">
                    {/* <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2> */}

                    <form>
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
                                <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                                <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>


                        </div>
                        <div className='mt-4'>
                            <label class="text-gray-700 dark:text-gray-200" for="password">Phone</label>
                            <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className='mt-4'>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Subject</label>
                            <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div className='mt-4'>
                            <label for="Description" class="block text-sm text-gray-500 dark:text-gray-300">Your Messge</label>
                            <textarea placeholder="lorem..." class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>

                            {/* <p class="mt-3 text-xs text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                        </div>

                        <div class="">
                            <button className='w-full uppercase mt-5 shadow-xl px-5 py-5 rounded-md text-sky-500 font-semibold  hover:bg-sky-500 hover:text-white transiction duration-300'>Send Message</button>
                        </div>
                    </form>
                </section>
            </div>
            <div className='bg-red-500 w-full'>

            </div>

        </div>
    );
};

export default Contact;