import React from 'react'
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"
import pic5 from "../assets/pic5.png"
import pic6 from "../assets/pic6.png"
import pic8 from "../assets/pic8.png"

const Services = () => {
    /* const services = [
        { id: 1, title: "Membership Organisations", description: "Our membership managgement software provides full automation of  membership renewls and payments", image: "/src/assets/icons/service1.png" },
        { id: 2, title: "National Associations", description: "Our membership management software provides  full automation renewels and payments", image: "/src/assets/icons/service2.png" },
        { id: 3, title: "Clubs And Groups", description: "Our membership management software provides  full automation renewels and payments", image: "/src/assets/icons/service3.png" }
    ] */
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGrey '>We have been working with some Fortune 500+ Clients</p>
                {/* company logo*/}
                <div className='my-12 flex flex-wrap justify-between gap-8'>
                    <div className='w-14'> <img src={pic2} alt="" /></div>
                    <div className='w-14'> <img src={pic1} alt="" /></div>
                    <div className='w-14'> <img src={pic3} alt="" /></div>
                    <div className='w-14'> <img src={pic4} alt="" /></div>
                    <div className='w-14'> <img src={pic5} alt="" /></div>
                    <div className='w-14'> <img src={pic6} alt="" /></div>
                    <div className='w-14'> <img src={pic8} alt="" /></div>
                </div>
            </div>
            {/* services card */}
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h2>
                <p className='text-neutralGrey '>Who is Nextcent suitable for?</p>
            </div>
            {/* card */}

            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                <div className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-slate-400 mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                            <img src="/src/assets/service1.png" alt="" className='ml-5' />
                        </div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>Membership Organisations</h4>
                        <p className='text-sm'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>

                <div className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-slate-400 mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                            <img src="/src/assets/service2.png" alt="" className='ml-5' />
                        </div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>National Associations</h4>
                        <p className='text-sm'>Our membership management software provides full automation renewals and payments</p>
                    </div>
                </div>

                <div className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-slate-400 mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                            <img src="/src/assets/service3.png" alt="" className='ml-5' />
                        </div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>Clubs And Groups</h4>
                        <p className='text-sm'>Our membership management software provides full automation renewals and payments</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services