import React from 'react'

const Newsletter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='text-center w-3/5 mx-auto'>
                <div className='flex justify-center'>
                    <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6'>Himanshu is a brilliant guy and a singer already.</h2>
                </div>
                <div className='flex justify-center'>
                    <button className='px-6 py-2 bg-brandPrimary text-white hover:bg-neutralDGrey rounded-md transition-all duration-300 hover:-translate-y-3 flex  '>
                        Get a Demo
                        <svg
                                        className="h-6 w-6 text-red-300 ml-2"
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
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter