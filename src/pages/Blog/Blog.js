import React from 'react';

const blogItems =[
    {
        image: "https://canadianbusinesscollege.com/wp-content/uploads/2021/01/image001.jpg",
        title: "Ho to become a software enginner",
        description: "this is a example site"
    },
    {
        image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/12/tes_gen_blog_post_071921_1233182206-1-800x412.jpg",
        title: "Ho to become a software enginner",
        description: "this is a example site"
    },
    {
        image: "https://onlinecs.baylor.edu/sites/default/files/field/image/Future%20of%20Software_Engineering%20%281%29.jpg",
        title: "Ho to become a software enginner",
        description: "this is a example site"
    },
]

const Blog = () => {
    return (
        <div className='lg:h-[750px] border-b-2 border-gray-300 my-20' id='6'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-extrabold mb-5'>My Blog</h1>
                <h2 className='text-red-500'>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mx-5 lg:px-10 mb-20'>
                {
                    blogItems.map(blog =>
                        <div class="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img class="object-cover w-full h-56" src={blog.image} alt="avatar" />

                            <div class="py-5 px-3">
                                <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{blog.title}</a>
                                <span class="text-sm text-gray-700 dark:text-gray-200">{blog.description}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blog;