import React from 'react'
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"
import about4 from "../assets/about4.png"
import about5 from "../assets/about5.png"
const About = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-9'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img className='w-50 h-80' src={about1} />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
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
                    <div className='md:w-1/2'>
                        <h2 className='font-semibold text-4xl text-neutralDGrey mb-4 md:w-2/3'>Helping a local <br></br> <span className='font-semibold text-4xl  text-brandPrimary'>business reinvent itself </span></h2>
                        <p className='text-sm text-neutralDGrey'>We reached here with our hard work and determination</p>
                    </div>
                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-cennter justify-around'>
                        <div className='space-y-8' >
                            <div className='flex items-center gap-4'>
                                <img className='w-8' src={about2}></img>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-8' src={about3}></img>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8' >
                            <div className='flex items-center gap-4'>
                                <img className='w-8' src={about4}></img>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img className='w-10' src={about5}></img>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Events Booking</p>
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
        </div>
    )
}

export default About 