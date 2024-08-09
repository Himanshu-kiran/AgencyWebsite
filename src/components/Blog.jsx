import React from 'react';
import new1 from "../assets/new1.png"
import new2 from "../assets/new2.png"
import new3 from "../assets/new3.png"

const Blog = () => {
    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: `${new1}` },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: `${new2}` },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: `${new3}` }
    ];

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who is joining the community, read about how our community are increasing their membership income and lots more.</p>
            </div>

            {/* all blogs */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => (
                        <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                            <img className='h-50 hover:scale-95 transition-all duration-300' src={blog.image} alt={blog.title} />
                            <div className='absolute left-6 right-6 -bottom-12 bg-white p-4 rounded shadow-md'>
                                <h3 className='mb-3 text-neutralGrey font-semibold '>{blog.title}</h3>
                                <div className='flex items-center justify-center underline'>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700 '>
                                        Readmore
                                    </a>
                                    <svg
                                        className="h-6 w-6 text-brandPrimary ml-2"
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
                    ))
                }
            </div>
        </div>
    )
}

export default Blog;
