import React from 'react'
import about11 from "../assets/about11.png"
import menaces from "../assets/menaces.png"
const Products = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-9'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img className='w-50 h-80' src={about11} />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                        <p className='md:w-3/7 text-sm text-neutralGrey mb-9'>The unseen of spending three years at Pixelgrade" could be a catchy and intriguing caption for your image, especially if you are aiming to convey a sense of depth, experience, and behind-the-scenes insights related to your time at Pixelgrade. Here's how you might expand on that caption:
                            Full Caption for a Blog Post or Article
                            The Unseen of Spending Three Years at Pixelgrade: A Journey of Growth and Innovation
                            Behind the Scenes: Three Years of Creativity and Collaboration at Pixelgrade
                            Three Years at Pixelgrade: The Hidden Stories and Experiences.</p>
                        <button className='bg-red-500 px-4 py-2 rounded-md hover:bg-neutralDGrey hover:-translate-y-2 transition-all duration-300'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/*   company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='w-30 h-40' ></div>
                    <img src={menaces} alt="" />

                    {/* stats */}
                    <div className='md:w-2/3 mx-auto ml-5'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                                Full Caption for a Blog Post or Article
                                The Unseen of Spending Three Years at Pixelgrade: A Journey of Growth and Innovation
                                Behind the Scenes: Three Years of Creativity and Collaboration at Pixelgrade
                                Three Years at Pixelgrade Full Caption for a Blog Post or Article
                                The Unseen of Spending Three Years at Pixelgrade: A Journey of Growth and Innovation
                                Behind the Scenes: Three Years of Creativity and Collaboration at Pixelgrade
                            </p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                            <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center gap-8 flex-wrap'>
                                    <img src="/src/assets/about1.png" alt="" className='cursor-pointer w-8' />
                                    <img src="/src/assets/about2.png" alt="" className='cursor-pointer w-8' />
                                    <img src="/src/assets/about3.png" alt="" className='cursor-pointer w-8' />
                                    <img src="/src/assets/about4.png" alt="" className='cursor-pointer w-8' />
                                    <img src="/src/assets/about5.png" alt="" className='cursor-pointer w-8' />
                                    <div className='flex items-center'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>
                                            Meet all customers
                                        </a>
                                        <svg
                                            className="h-6 w-8 text-red-300 ml-2"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="13" y1="18" x2="19" y2="12" />
                                            <line x1="13" y1="6" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* */}
            <div className='pt-6 \'>
                <div>
                </div>
            </div>
        </div>)
}

export default Products

